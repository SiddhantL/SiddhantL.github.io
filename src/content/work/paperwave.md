---
title: PaperWave Mobile-Optimized Research Papers
publishDate: 2024-07-01 00:00:00
img: /assets/stock-2.jpg
img_alt: A research paper reflowed for mobile readability
description: |
  Reimagining how we read academic PDFs on mobile — combining React Native, PyMuPDF, and BART summarization into a seamless mobile-first paper reader.
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

PaperWave is my take on rethinking how long academic PDFs are consumed on mobile. I set out to build an app that reflows technical research papers into a readable, scrollable experience — eliminating the need for pinching, zooming, and scrolling through two-column chaos.

Built in React Native, the frontend provides a minimalist reading interface optimized for typography and readability. Behind the scenes, I used PyMuPDF and pdf2image to extract content from PDFs and BART-LARGE-CNN via LangChain to chunk, summarize, and stream context-aware sections to the user.

The model pipeline is deployed on AWS Elastic Beanstalk, leveraging async queuing and multi-threading to handle load during batch uploads. We optimized latency by offloading image-to-text tasks to a serverless worker layer and caching common queries.

This project allowed me to explore full-stack NLP at scale, tackle UX design for long-form reading, and experiment with mobile-native ways of displaying machine-processed content. It’s especially valuable for students, researchers, and anyone tired of reading tiny font PDFs on their phone.
