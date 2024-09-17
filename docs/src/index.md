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
    icon="icon-park-twotone:new-computer"
    iconColor="var(--vp-c-brand-2)"
    title="Introduction"
    body="This page contains one person's story and experience with encountering new technology after being in prison."
    link="./tech-terror-experience"
    linkText="Go to section"
  />
  <VitepressCard
    icon="ant-design:tablet-twotone"
    iconColor="var(--vp-c-brand-2)"
    title="Navigating Your Tablet"
    body="This section covers the basics of using a tablet, including the keyboard, terminology, icons, and accessibility."
    link="./1-tablet-navigation/index"
    linkText="Go to section"
  />
  <VitepressCard
    icon="uim:apps"
    iconColor="var(--vp-c-brand-2)"
    title="Apps and the Internet"
    body="This section covers connecting to the internet, navigating websites, browsers and search engines, and apps."
    link="./2-apps-and-internet/index"
    linkText="Go to section"
  />
  <VitepressCard
    icon="ph:files-duotone"
    iconColor="var(--vp-c-brand-2)"
    title="Files"
    body="This section covers what files and folders are, and how to save or share files."
    link="./3-file-system/index"
    linkText="Go to section"
  />
  <VitepressCard
    icon="ic:twotone-security"
    iconColor="var(--vp-c-brand-2)"
    title="Staying Safe"
    body="This section covers updates, passwords, encryption, viruses, and internet safety."
    link="./4-staying-safe/index"
    linkText="Go to section"
  />
  <VitepressCard
    icon="ph:chats-duotone"
    iconColor="var(--vp-c-brand-2)"
    title="Communication"
    body="This section covers email, texting, direct messaging, video calls, and social media."
    link="./5-communication/index"
    linkText="Go to section"
  />
</VitepressCardContainer>
