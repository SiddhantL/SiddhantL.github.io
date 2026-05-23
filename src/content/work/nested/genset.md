---
title: Generator Monitoring System
slug: genset
publishDate: 2023-08-01 00:00:00
img: /assets/generator.png
img_alt: A monitoring dashboard showing real-time generator metrics from GSM data
description: |
  Full-stack industrial monitoring system. Firmware collects 77 metrics from generators, transmits via GSM, visualized in real-time on a mobile app.
tags:
  - IoT
  - Cloud
  - Embedded
  - Android
skills:
  - simple-icons:arduino
  - simple-icons:dotnet
  - simple-icons:postgresql
  - mdi:server
  - mdi:cellphone-android
  - mdi:cellphone-link
gallery:
  - /assets/generator.png
  - /assets/generator-2.png
  - /assets/generator-3.png
  - /assets/generator-4.png
video:
  - https://www.youtube.com/embed/_-isff31S4s?si=xU3lwYk6cKfezNIB
---

Programmed the generator chipset in C to collect and transmit 77 operational metrics (temperature, oil pressure, vibration, fuel, fault codes) via GSM every 2 seconds. Deployed across all clients of the company, each running multiple gensets independently.

Data hit a custom ASP.NET Core API on EC2 behind a reverse proxy, then got parsed and stored in a time-series PostgreSQL schema on RDS optimized for high-write throughput and fast historical queries.

Started with a native Android app in Java for monitoring, then rebuilt it in React Native when the system scaled and needed cross-platform support. Dashboards, push notifications for critical thresholds, and remote diagnostics.

The hard parts: GSM reliability under bad network conditions, tuning the database for burst writes from entire fleets transmitting simultaneously, and keeping the whole pipeline fault-tolerant with retry logic at the firmware level and failover policies on the backend.
