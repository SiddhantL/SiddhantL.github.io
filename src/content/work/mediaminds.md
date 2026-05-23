---
title: MediaMinds
slug: mediaminds
publishDate: 2023-05-01 00:00:00
img: /assets/mediaminds.png
img_alt: An AI-generated video timeline being rendered from text
description: |
  Text-to-video pipeline that turns articles into fully rendered 90-second videos in under 3 minutes. FlanT5 + Stable Diffusion + Google TTS.
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

Final-year capstone. Feed it a blog post or news article, get a narrated video back in under 3 minutes.

The pipeline: Flan-T5 for summarization, Selenium for context scraping, Stable Diffusion 1.5 for frame-by-frame visual generation, Google TTS plus a fine-tuned RVC voice model for narration. Mutagen handles metadata, FFMPEG stitches everything together with frame-level precision.

Built a React frontend where users could upload text, preview generated frames, and tweak before export. The whole thing was designed for solo journalists, small media teams, and anyone who needs video content but doesn't have an editing team.
