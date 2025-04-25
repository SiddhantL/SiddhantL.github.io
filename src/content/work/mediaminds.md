---
title: MediaMinds Text-to-Video Generator
publishDate: 2023-05-01 00:00:00
img: /assets/stock-3.jpg
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

---

MediaMinds was my final-year capstone, focused on automating video generation from raw text prompts. I worked with a team of three to design a pipeline that could take a textual blog post and output a visually rich, synchronized video.

We used Flan-T5 for summarization, Selenium to scrape relevant context and image tags, and Stable Diffusion 1.5 to generate visuals frame-by-frame. For audio, we used Google TTS and a custom fine-tuned RVC voice model to narrate content. All assets were aligned using Mutagen and stitched together via FFMPEG with precise frame-level timing.

The pipeline generated 90-second videos in under 3 minutes — a 35% improvement over traditional scripted workflows. We built a React-based frontend to manage inputs, view drafts, and manually tweak generated frames.

This project taught me how to coordinate multi-modal generative AI workflows, optimize media pipelines, and make complex systems user-friendly. It pushed the boundaries of what generative AI can do for solo and small-team creators.
