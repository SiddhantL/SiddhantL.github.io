---
title: University System Security Testing
publishDate: 2022-08-01 00:00:00
img: /assets/ethical.png
img_alt: A system terminal showing network vulnerability scan results
description: |
  Performed hands-on security testing of a university system, identifying critical vulnerabilities allowing data manipulation and privilege escalation.
tags:
  - Security
  - PenTest
  - EthicalHacking
skills:
  - mdi:shield-lock
  - mdi:bug
  - mdi:alert
  - mdi:lock-alert
  - simple-icons:nmap
  - mdi:database

---

As part of a university initiative, I conducted black-box penetration testing of a live academic portal used by over 10,000 students. I began by mapping the attack surface and simulating privilege escalation via IDOR vulnerabilities and unvalidated POST request parameters.

Within a few weeks, I discovered critical flaws allowing for unauthorized grade modification, attendance editing, and full access to student profiles — all without admin credentials. I created a detailed vulnerability report outlining CVSS scores, risk tiers, exploit paths, and immediate remediation steps.

Using tools like Nmap, Nessus, and custom Python scripts, I reverse engineered hidden endpoints and escalated to file upload privileges. I submitted PoCs and walkthroughs to university IT and was invited to present the findings to the Vice Chancellor and central IT team.

The result was a full system overhaul and tighter session controls across the portal. This experience gave me real-world exposure to offensive security and vulnerability disclosure — and the satisfaction of seeing my recommendations implemented in production.
