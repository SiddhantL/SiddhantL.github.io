---
title: 6-DOF Robotic Arm with IoT Control
publishDate: 2023-11-01 00:00:00
img: /assets/6dof.png
img_alt: A 3D-printed robotic arm connected to a mobile phone app
description: |
  Designed and programmed a fully controllable six-axis robotic arm integrated with mobile-based real-time IoT control using Arduino and Bluetooth.
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

---

This project represents a fusion of mechanical design, embedded programming, and mobile app development. Over the span of several months, I conceptualized, built, and programmed a six-degree-of-freedom robotic arm from the ground up. The frame and joints were modeled in Blender and 3D-printed on a Creality Ender3, using custom-tuned slicing profiles to balance torque demands with material rigidity. Each axis was powered by a stepper motor connected via a driver board to an Arduino controller, forming a low-latency actuation system.

On the software side, I designed an Android application in Kotlin that communicated with the Arduino via an HC-05 Bluetooth module. This app featured a joystick-like interface that allowed for both manual manipulation and saved sequence execution of the robotic arm. I implemented real-time telemetry that provided live position feedback and error detection, displayed in an intuitive dashboard UI.

Calibration was critical — each joint's motion range had to be mapped, constrained, and smoothed to prevent jitter and mechanical wear. I wrote a custom PID tuning routine for the motor controllers to stabilize the movements, and designed a compact control box to house all wiring and electronics for field safety. The robotic arm was capable of performing repeatable pick-and-place actions and demonstrated object manipulation tasks in a controlled environment.

This project not only strengthened my understanding of kinematics, control theory, and microcontroller interfacing, but also taught me the importance of spatial design and user-centric software when working with physical systems. The full-stack development cycle — from circuit design to UI polish — was a highlight of my hardware journey.
