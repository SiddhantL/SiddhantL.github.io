---
title: Sensor'D
slug: sensord
publishDate: 2019-06-01 00:00:00
img: /assets/sensord.jpg
img_alt: An Arduino-based physical arcade controller paired with a mobile game
description: |
  Physical arcade racing controller built with Arduino and Bluetooth, paired with a custom Android game. Won first place at my university's IoT competition.
tags:
  - GameDev
  - IoT
  - Android
skills:
  - mdi:chip
  - mdi:robot-industrial
  - mdi:bluetooth
  - mdi:cellphone
  - simple-icons:arduino
  - simple-icons:raspberrypi
gallery:
  - /assets/sensord.jpg
video:
  - https://www.youtube.com/embed/tQK7zG41_sE?si=BVHKhs8qBqO-vw7y
  - https://www.youtube.com/embed/Lm_5xqpQHtY?si=RKgvRd4lTSbpttyg

---

A retro arcade racing game for Android paired with a physical controller I built on Arduino. Rotary switch for steering, tactile buttons for boost and brake, and Bluetooth via HC-05 for wireless communication.

The game ran at 60 FPS using the Canvas API with low-latency Bitmap rendering. Firebase Realtime Database powered a live leaderboard. On the hardware side, I wrote debounce logic and serial parsers to keep the physical inputs responsive.

The best part was watching people physically crank the dial and mash buttons to control a digital car. Won first place at my university's IoT competition.
