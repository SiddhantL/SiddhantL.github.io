---
title: Sensor’D Bluetooth Arcade Game with IoT Controller
publishDate: 2019-06-01 00:00:00
img: /assets/sensord.jpg
img_alt: An Arduino-based physical arcade controller paired with a mobile game
description: |
  Created a physical arcade car game controller using Arduino and Bluetooth HC05, integrating it with a custom Android game built from scratch.
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

---

Sensor’D was a hybrid project blending gaming with real-world hardware control, designed to showcase the potential of interactive systems in entertainment. I created a retro-style Android racing game and paired it with a custom physical controller built on Arduino. The controller featured a rotary switch for steering, tactile buttons for boosting and braking, and Bluetooth integration via the HC-05 module to wirelessly communicate with the game.

The game, developed in Java using the Android SDK, focused on dynamic difficulty scaling and in-game physics optimized with the Canvas drawing API and low-latency Bitmap rendering for 60 FPS gameplay. On the backend, Firebase Realtime Database enabled a live leaderboard, syncing player scores and facilitating global competition.

On the hardware side, careful signal calibration ensured real-time responsiveness of physical inputs. I implemented a debounce logic and wrote serial parsers to interpret commands efficiently on the mobile side. The most satisfying part was watching players physically turn the dial and push buttons to control the digital car, bridging the digital and tactile worlds.

Sensor’D was showcased during my undergrad IoT competition and received first place and praise for its “arcade-like authenticity.” It taught me how to prototype interactive systems under time constraints, how to troubleshoot cross-platform Bluetooth issues, and how to design for fun — all while maintaining robustness and polish in execution.
