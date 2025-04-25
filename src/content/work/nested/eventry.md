---
title: evEntry Event Ticketing App
publishDate: 2019-12-01 00:00:00
img: /assets/stock-2.jpg
img_alt: Mobile app interface for event ticketing and check-in system
description: |
  Engineered an end-to-end mobile ticketing system supporting QR-based check-ins, real-time cancellations, and 2,000+ transactions in a single event.
tags:
  - Android
  - AWS
  - Payments
skills:
  - mdi:cellphone
  - mdi:qr-code-scan
  - simple-icons:aws
  - mdi:credit-card
  - simple-icons:razorpay
  - mdi:account-check
  - mdi:language-kotlin


---

evEntry was developed to solve the chaos of last-minute ticketing and on-site event check-ins. The app was engineered for mobile, supporting high-speed QR code scanning, ticket verification, and real-time cancellation management. It handled 2,000+ transactions in a single night at a university event, with zero downtime and sub-second latency — even under load.

The backend was deployed on AWS with EC2 and Cognito for authentication and RazorPay for payment processing. I built modular APIs to handle payment verification, dynamic ticket generation, and usage analytics. The app enabled event organizers to create, launch, and manage events — all from a mobile dashboard.

Check-ins used Firebase to update attendance status in real time and trigger alerts for duplicate scans or refund requests. Each event could be configured in under 5 minutes with fully customizable pricing, participant limits, and notifications.

This project taught me the nuances of transactional system design, the importance of UI/UX during high-stress event moments, and how to architect systems for burst scalability. It was later used by 10+ student clubs at my university and became a go-to for small to mid-scale event ops.
