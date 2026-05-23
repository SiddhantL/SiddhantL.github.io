import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from "fs/promises";
import path from "path";
import https from "https";
import http from "http";

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const BLOG_DIR = "src/content/blog";
const IMAGE_DIR = "public/assets/blog";

if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error(
    "Missing NOTION_TOKEN or NOTION_DATABASE_ID.\n" +
      "Add them to .env:\n" +
      "  NOTION_TOKEN=ntn_...\n" +
      "  NOTION_DATABASE_ID=abc123..."
  );
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      const stream = fs.open(dest, "w").then((fh) => {
        const ws = fh.createWriteStream();
        res.pipe(ws);
        ws.on("finish", () => {
          ws.close();
          resolve();
        });
        ws.on("error", reject);
      });
    }).on("error", reject);
  });
}

async function downloadImage(url, slug, index) {
  await fs.mkdir(IMAGE_DIR, { recursive: true });

  const ext = url.match(/\.(png|jpg|jpeg|gif|webp|svg)/i)?.[1] || "png";
  const filename = `${slug}-${index}.${ext}`;
  const dest = path.join(IMAGE_DIR, filename);

  try {
    await downloadFile(url, dest);
    return `/assets/blog/${filename}`;
  } catch (err) {
    console.warn(`  Failed to download image: ${err.message}`);
    return url;
  }
}

function getProperty(page, name) {
  const prop = page.properties[name];
  if (!prop) return null;

  switch (prop.type) {
    case "title":
      return prop.title.map((t) => t.plain_text).join("");
    case "rich_text":
      return prop.rich_text.map((t) => t.plain_text).join("");
    case "date":
      return prop.date?.start || null;
    case "multi_select":
      return prop.multi_select.map((s) => s.name);
    case "select":
      return prop.select?.name || null;
    case "status":
      return prop.status?.name || null;
    default:
      return null;
  }
}

async function syncPosts() {
  console.log("Fetching published posts from Notion...\n");

  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      status: { equals: "published" },
    },
    sorts: [{ property: "Publish Date", direction: "descending" }],
  });

  console.log(`Found ${response.results.length} published post(s).\n`);

  await fs.mkdir(BLOG_DIR, { recursive: true });

  for (const page of response.results) {
    const title = getProperty(page, "Title") || "Untitled";
    const description = getProperty(page, "Description") || "";
    const publishDate = getProperty(page, "Publish Date") || new Date().toISOString().split("T")[0];
    const tags = getProperty(page, "Tags") || [];
    const slug = slugify(title);

    console.log(`Syncing: ${title} -> ${slug}.md`);

    const mdBlocks = await n2m.pageToMarkdown(page.id);
    let markdown = n2m.toMarkdownString(mdBlocks).parent;

    let imageIndex = 0;
    const imageRegex = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;
    const replacements = [];

    for (const match of markdown.matchAll(imageRegex)) {
      const [full, alt, url] = match;
      imageIndex++;
      const localPath = await downloadImage(url, slug, imageIndex);
      replacements.push({ full, replacement: `![${alt}](${localPath})` });
    }

    for (const { full, replacement } of replacements) {
      markdown = markdown.replace(full, replacement);
    }

    const tagsYaml = tags.length > 0
      ? `tags:\n${tags.map((t) => `  - ${t}`).join("\n")}`
      : "tags: []";

    const frontmatter = [
      "---",
      `title: "${title.replace(/"/g, '\\"')}"`,
      `description: "${description.replace(/"/g, '\\"')}"`,
      `publishDate: ${publishDate}`,
      tagsYaml,
      "---",
    ].join("\n");

    await fs.writeFile(
      path.join(BLOG_DIR, `${slug}.md`),
      `${frontmatter}\n\n${markdown.trim()}\n`
    );

    console.log(`  Done.\n`);
  }

  console.log("Sync complete.");
}

syncPosts().catch((err) => {
  console.error("Sync failed:", err);
  process.exit(1);
});
