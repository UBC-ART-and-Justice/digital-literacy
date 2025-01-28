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

We have organized the content to be used on our project's tablets. The sections are designed to be read in order, but you can skip ahead if you're already familiar with any of the topics! 

## Content

<VitepressCardContainer :cols="2">
  <VitepressCard
    mdiIcon="mdiMonitorCellphone"
    iconColor="var(--vp-c-brand-2)"
    title="Introduction"
    link="./tech-terror-experience"
    linkText="Go to section"
  >
    One person's journey to adjust to a technology-driven world after 20 years in prison.
  </VitepressCard>
  <VitepressCard
    mdiIcon="mdiCellphone"
    iconColor="var(--vp-c-brand-2)"
    title="Using a Tablet"
    link="./1-tablet-navigation/index"
    linkText="Go to section"
  >
    Learn the basics of using a tablet, from keyboard skills to icons and accessibility settings.
  </VitepressCard>
  <VitepressCard
    mdiIcon="mdiApps"
    iconColor="var(--vp-c-brand-2)"
    title="Internet and Apps"
    link="./2-apps-and-internet/index"
    linkText="Go to section"
  >
    Learn about connecting to the internet and using browsers, search engines, and apps.
  </VitepressCard>
  <VitepressCard
    mdiIcon="mdiFolder"
    iconColor="var(--vp-c-brand-2)"
    title="Files"
    link="./3-file-system/index"
    linkText="Go to section"
  >
    Learn what files and folders are, and how you can use them to save and share information.
  </VitepressCard>
  <VitepressCard
    mdiIcon="mdiShieldAlert"
    iconColor="var(--vp-c-brand-2)"
    title="Staying Safe"
    link="./4-staying-safe/index"
    linkText="Go to section"
  >
    Stay safe when using the internet, and learn about updates, passwords, encryption, and viruses.
  </VitepressCard>
  <VitepressCard
    mdiIcon="mdiForumOutline"
    iconColor="var(--vp-c-brand-2)"
    title="Communication"
    link="./5-communication/index"
    linkText="Go to section"
  >
    Connect with others through email, texting, messaging, video calls, and social media.
  </VitepressCard>
</VitepressCardContainer>

## Art Exhibitions & Gallery

<BlogPostList
  format="vertical"
  filterCategory="Gallery"
  hideCategory="true"
/>

