---
title: Safe Distancing
slug: safe-distancing
publishDate: 2020-03-01 00:00:00
img: /assets/safedistancing.jpg
img_alt: A heatmap overlay of a crowded area on a mobile screen
description: |
  Android app that predicted venue crowding in real-time using DBSCAN clustering and LSTM forecasting. Built during COVID, scaled to 10K+ concurrent users.
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

Built during the height of COVID to help people avoid crowded public spaces. The app combined DBSCAN for unsupervised hotspot detection with an LSTM model for predicting future congestion, all running on-device via TensorFlow Lite.

Users got dynamic heatmaps, risk zones, and predicted density for both their current location and where they were heading. The LSTM was trained on anonymized location history and Google Popular Times data, then converted to TFLite for low-latency mobile inference.

Backend was Firebase Cloud Firestore for historical pattern logging, with geofencing that warned users before entering high-density zones. The architecture handled 10K+ concurrent users with minimal backend load since most of the compute happened on the phone.

The app was featured at my university orientation and led to collaborations with epidemiology and behavioral research teams who used the anonymized data for their own studies.
