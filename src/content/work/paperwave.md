---
title: PaperWave
slug: paperwave
publishDate: 2024-07-01 00:00:00
img: /assets/paperwave.png
img_alt: A research paper reflowed for mobile readability
description: |
  Mobile-first research paper reader that reflows academic PDFs into a readable format with AI summarization. Built with React Native, PyMuPDF, and BART.
tags:
  - React Native
  - LLM
  - PDF
skills:
  - mdi:language-kotlin
  - mdi:android
  - mdi:file-pdf-box
  - mdi:read
  - mdi:bookmark

---

Reading academic PDFs on a phone is miserable. Two-column layouts, tiny fonts, constant pinch-and-zoom. PaperWave reflows papers into a scrollable, mobile-native reading experience with optional audio conversion.

The backend uses PyMuPDF and pdf2image for content extraction, and BART-LARGE-CNN via LangChain for chunked, context-aware summarization. The React Native frontend is stripped down to just typography and readability.

Pipeline runs on AWS Elastic Beanstalk with async queuing and a serverless worker layer for image-to-text tasks. Common queries are cached to keep latency down on repeat reads.
