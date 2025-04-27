---
title: MediaMinds Text-to-Video Generator
slug: mediaminds
publishDate: 2023-05-01 00:00:00
img: /assets/mediaminds.png
img_alt: An AI-generated video timeline being rendered from text
description: |
  Automated text-to-video generation using FlanT5, Stable Diffusion, and Google TTS — delivering media-ready content in under 3 minutes.
tags:
  - AI
  - Video
  - Automation
skills:
  - simple-icons:python
  - mdi:video
  - mdi:microphone
  - simple-icons:selenium
  - simple-icons:googlecloud
  - simple-icons:stablediffusion
  - simple-icons:google
video:
  - https://www.youtube.com/embed/YicuUUOBQSM?si=7vLPH1HcOBFZcv3R

---

MediaMinds was my final-year capstone project, focused on automating video generation from raw text prompts. I worked with a team of three to design a complete pipeline that could take a textual blog post or news article and output a visually rich, synchronized video.

The primary use case was critical: enabling rapid storytelling from pure text inputs. In situations where immediate dissemination of important information is necessary — such as breaking news, announcements, or educational briefs — MediaMinds allowed content creators to instantly transform written material into engaging video formats without manual video editing. This capability was especially valuable for solo journalists, small media houses, and organizations aiming to expand reach through visual media.

Technically, we employed Flan-T5 for summarization, Selenium to scrape relevant context and keyword tags, and Stable Diffusion 1.5 to generate visuals frame-by-frame based on the extracted prompts. For audio narration, we used a combination of Google TTS and a custom fine-tuned RVC voice model to create natural-sounding, context-aware voiceovers. Asset synchronization was handled using Mutagen for metadata management, and videos were stitched together using FFMPEG with frame-level precision.

The pipeline could generate fully rendered 90-second videos in under three minutes — a major improvement over traditional scripted workflows. We also built a React-based frontend where users could upload text, view generated drafts, and optionally tweak frames before final export.

Through this project, I gained valuable experience coordinating multi-modal generative AI workflows, optimizing high-throughput media pipelines, and designing user-friendly interfaces for complex backend systems. MediaMinds showed me how generative AI can empower small teams and independent creators to deliver professional-quality content at unprecedented speed and scale.
