---
title: University System Security Testing
slug: nmims-security
publishDate: 2022-08-01 00:00:00
img: /assets/ethical.png
img_alt: A system terminal showing network vulnerability scan results
description: |
  Black-box pen testing of a live university portal used by 10,000+ students. Found critical vulnerabilities including unauthorized grade modification.
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
gallery:
  - /assets/ethical.png
---

Ran black-box penetration testing on a live academic portal used by 10,000+ students. Mapped the attack surface and found IDOR vulnerabilities and unvalidated POST parameters that allowed privilege escalation.

Found critical flaws: unauthorized grade modification, attendance editing, and full access to student profiles, all without admin credentials. Used Nmap, Burp Suite, Nessus, and custom Python scripts to reverse-engineer hidden endpoints and escalate to file upload privileges.

Wrote a full vulnerability report with CVSS scores, exploit paths, and remediation steps. Submitted PoCs to university IT and presented findings to the Vice Chancellor and central IT team. Led to a full system overhaul and tighter session controls across the portal.
