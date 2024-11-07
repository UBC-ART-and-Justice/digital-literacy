---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Digital Literacy"
  # tagline: An arts based initiative by the UBC A.R.T. & Justice Research Project group.
  # actions:
  #   - theme: brand
  #     text: Open the Content
  #     link: /markdown-examples
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

# Welcome to the Digital Literacy Project
This is an arts based initiative by the UBC A.R.T. & Justice Research Project group, to support the well-being of people in prison. These lessons on digital literacy are designed to be accessible to anyone, regardless of their prior experience.

## Content

<VitepressCardContainer :cols="2">
  <VitepressCard
    mdiIcon="monitor-cellphone"
    iconColor="var(--vp-c-brand-2)"
    title="Introduction"
    link="./tech-terror-experience"
    linkText="Go to section"
  >
    This page contains one person's story and experience with encountering new technology after being in prison.
  </VitepressCard>
  <VitepressCard
    mdiIcon="cellphone"
    iconColor="var(--vp-c-brand-2)"
    title="Navigating Your Tablet"
    link="./1-tablet-navigation/index"
    linkText="Go to section"
  >
    This section covers the basics of using a tablet, including the keyboard, terminology, icons, and accessibility.
  </VitepressCard>
  <VitepressCard
    mdiIcon="apps"
    iconColor="var(--vp-c-brand-2)"
    title="Apps and the Internet"
    link="./2-apps-and-internet/index"
    linkText="Go to section"
  >
    This section covers connecting to the internet, navigating websites, browsers and search engines, and apps.
  </VitepressCard>
  <VitepressCard
    mdiIcon="folder"
    iconColor="var(--vp-c-brand-2)"
    title="Files"
    link="./3-file-system/index"
    linkText="Go to section"
  >
    This section covers what files and folders are, and how to save or share files.
  </VitepressCard>
  <VitepressCard
    mdiIcon="shield-alert"
    iconColor="var(--vp-c-brand-2)"
    title="Staying Safe"
    link="./4-staying-safe/index"
    linkText="Go to section"
  >
    This section covers updates, passwords, encryption, viruses, and internet safety.
  </VitepressCard>
  <VitepressCard
    mdiIcon="forum-outline"
    iconColor="var(--vp-c-brand-2)"
    title="Communication"
    link="./5-communication/index"
    linkText="Go to section"
  >
    This section covers email, texting, direct messaging, video calls, and social media.
  </VitepressCard>
</VitepressCardContainer>

<!-- Find and replace

body="(.*)"\n(.*)\n(.*)\n(.*)

$2\n$3\n>\n$1\n</VitepressCard>
-->
