---
title: 6-DOF Robotic Arm
slug: 6-dof
publishDate: 2023-11-01 00:00:00
img: /assets/6dof-1.png
img_alt: A 3D-printed robotic arm connected to a mobile phone app
description: |
  Six-axis robotic arm I designed, 3D-printed, and programmed from scratch. Controlled via a custom Android app over Bluetooth.
tags:
  - IoT
  - Robotics
  - Embedded
skills:
  - simple-icons:arduino
  - mdi:bluetooth
  - mdi:gamepad
  - mdi:car
  - mdi:chip
  - mdi:cellphone
gallery:
  - /assets/6dof-1.png
  - /assets/6dof-2.jpg
  - /assets/6dof-3.jpg
video:
  - https://www.youtube.com/embed/oV6S_uxZM0Y?si=lKShHBQjjtgqJ-zg
---

Designed the frame in Blender, 3D-printed it on an Ender3 with custom slicing profiles tuned for torque vs rigidity, and wired six stepper motors through driver boards to an Arduino.

The Kotlin Android app talks to the arm over Bluetooth (HC-05) with a joystick interface for manual control and saved sequences for repeatable actions. Built real-time telemetry that feeds back joint positions and flags errors in a dashboard UI.

Each joint needed its own motion mapping, constraints, and smoothing to prevent jitter. Wrote a custom PID tuning routine for the motor controllers and designed a compact control box to house all the wiring. The arm could do reliable pick-and-place operations in a controlled environment.
