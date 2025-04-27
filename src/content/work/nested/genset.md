---
title: Generator Monitoring System with GSM Telemetry and Cloud Integration
slug: genset
publishDate: 2023-08-01 00:00:00
img: /assets/generator.png
img_alt: A monitoring dashboard showing real-time generator metrics from GSM data
description: |
  Built a full-stack generator monitoring system that relayed real-time GSM data across cloud infrastructure, providing live alerts, visualization, and remote control through mobile apps.
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

This project involved building a fully functional generator monitoring system from scratch, interfacing embedded hardware with scalable cloud-based infrastructure. At the hardware level, I programmed the chipset of the generator in C to collect and transmit 77 critical operational metrics via a GSM module. These metrics included temperature, oil pressure, vibration signatures, fuel levels, and system fault codes.

The system was deployed across all clients of the company, with each client owning multiple gensets operating independently. Each genset transmitted telemetry data every 2 seconds, resulting in a high-volume, low-latency data flow that demanded robust and efficient backend handling.

The data was relayed to a custom-built API endpoint developed in ASP.NET Core, running on an EC2 instance hosted on AWS. I set up a reverse proxy to securely manage incoming traffic and ensure reliable uptime. Incoming telemetry was parsed, processed, and stored in a time-series schema inside a PostgreSQL database hosted on AWS RDS, optimized for fast retrieval and historical analysis.

The visualization layer was originally designed as a native Android app using Java, providing real-time monitoring, alert generation, and historical trend analysis. As the system scaled and users demanded cross-platform compatibility, I rebuilt the app in React Native, ensuring seamless functionality across both Android and iOS devices. The app featured detailed dashboards, push notifications for critical thresholds, and remote diagnostic capabilities.

Key challenges included optimizing GSM transmission reliability under fluctuating network conditions, tuning the database for high-write throughput, and ensuring fault-tolerant communication between embedded hardware and cloud endpoints. I implemented retry logic at the firmware level, health-checks at the API level, and failover policies for the database to maintain robustness. Load testing and dynamic resource scaling on AWS were introduced to handle bursts in data traffic from fleets of gensets operating simultaneously.

This project significantly deepened my expertise in embedded systems, network programming, cloud deployments, and mobile app development. Building the entire data pipeline end-to-end — from physical sensors embedded in machinery to real-time user notifications — provided valuable experience in designing scalable, fault-tolerant architectures for industrial-grade applications.
