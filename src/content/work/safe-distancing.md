---
title: Safe Distancing
slug: safe-distancing
publishDate: 2020-03-01 00:00:00
img: /assets/safedistancing.jpg
img_alt: A heatmap overlay of a crowded area on a mobile screen
description: |
  A predictive Android application leveraging DBSCAN and LSTM to forecast and visualize venue crowding in real-time. Designed to promote public safety during COVID-19.
tags:
  - Android
  - ML
  - Firebase
skills:
  - mdi:language-kotlin
  - mdi:android
  - mdi:chart-line
  - mdi:map-marker-radius
  - mdi:database
  - simple-icons:tensorflow
video:
  - https://www.youtube.com/embed/XP5uQdw3YaU?si=Z8UHcZ3xraDRnkyD
---

The Safe Distancing app was born out of a global need — empowering people to make smarter, safer decisions in public spaces during the height of the COVID-19 pandemic. Unlike typical crowd monitoring apps that simply aggregate GPS data, Safe Distancing pushes the boundaries by integrating unsupervised learning (DBSCAN) with temporal prediction models (LSTM) to detect hotspots and forecast future congestion.

The app functions entirely on-device, prioritizing user privacy and enabling real-time responsiveness even in areas with limited internet connectivity. Using user location history and anonymized background data, the system clusters behavioral patterns to distinguish between normal foot traffic and crowd formation events. The integration of Google’s Popular Times dataset with live pinging further enhances the contextual accuracy of the model.

I trained and converted the LSTM model into a TensorFlow Lite format to support low-latency predictions directly on Android devices. A custom-built visualization component presents users with dynamic heatmaps, risk zones, and predicted future density — not just for their current location but also for destinations they might be heading to. This predictive layer proved essential during early reopening phases when individuals sought safe ways to re-enter public life.

Under the hood, I relied on Firebase Cloud Firestore for scalable logging of historical patterns, A/B tested different alert mechanisms (push vs banner), and integrated geofencing features that warned users before they entered predefined danger zones. The architecture supported over 10,000 concurrent users with negligible backend latency due to lean frontend logic and robust data sync management.

This project was not just an engineering challenge — it became a design statement on how mobile systems can proactively protect lives. The UI embraced minimalism to focus attention on actionable insights. The app was featured in my my university orientation event as a key project and sparked interdisciplinary collaborations across epidemiology and behavioral research teams based on the anaonymized data it collected.

Above all, Safe Distancing proved that thoughtful software design can serve as a frontline tool in crisis response — and that machine learning doesn’t have to live in the cloud to be effective in the real world.
