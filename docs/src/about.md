---
layout: home
---

<VPTeamPage>
<img src="/banners/OurOriginStory.png" width="90%" style="margin: 0 auto"/>
  <VPTeamPageTitle>
    <template #title>
      About Us
    </template>
    <template #lead>
      Our Origin Story
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
  </VPTeamPageSection>
</VPTeamPage>

**A.R.T. & Justice** (**A**ction, **R**eciprocity, **T**ransformation & **J**ustice) is a collaborative Participatory Action Research project committed to supporting the holistic health, well-being, and dignity of currently and formerly incarcerated people in BC through Indigenous-guided and trauma-informed art and creative writing initiatives. *We believe that storytelling can build community, reduce stigma, and support healing.* 

This partnership includes researchers at the University of British Columbia (UBC) School of Nursing, Indigenous Elders, Peer Leaders with lived and living experience of incarceration, and champions from the Correctional Service of Canada (CSC). 

Since the beginning of the COVID-19 pandemic, we’ve been gifting art and writing kits to people in prison, and inviting them to share their work, voice and vision with us and the world. Each kit contains art and writing supplies, Indigenous teachings and medicines, messages of support from our team, and creative writing, visual art, and poetry prompts, including example poems from one of the Elders on our team. 

Our team recognizes that historic and ongoing colonialism are foundational to the current Canadian prison system. We know that Indigenous Peoples face immense health and social inequities, and that these are linked to disproportionate and unjust encounters with the prison system. In this context, we see art as a way to build community and dream a better world. Consent, autonomy and intellectual property rights are important to us, so participants can also choose not to share or digitize their work. 

We believe that art and writing are powerful tools of connection and social change. Individuals who receive a kit are invited to share their art and writing with us and with other participating storytellers and artists. They are also invited to take part in research program to help us learn how to strengthen and sustain the program over time. This research is Participatory (meaning we centre the voices and wisdom of experts, people who are or have been incarcerated), Action (meaning we believe research should *do something positive*) Research, with people who have survived prison working with us as Leaders, Advisors and Colleagues.   




<VPTeamPage>
  <img src="/banners/MeetTheTeam.png" width="90%" style="margin: 0 auto"/>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      This project was made possible by a large team, some of whom are featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
  <template #members>
      <VPTeamMembers size="medium" :members="teamMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

## Read More

### Helen Brown

Helen is a registered nurse, the academic lead of A.R.T. & Justice and a professor at UBC. She has been working to shift research towards having tangible social justice impact since 2007 using community-led approaches that honour voices that often go unheard. Helen is a mum of 2 adult ‘kids’ who make her laugh daily and a daughter to an amazingly joyful father who loves art at his ripe age of 94 as a way to connect with others and spark conversation, stories and remembering. A.R.T & Justice brings together everything she loves about doing research in a good way- a mirror for inclusion, community and belonging through creativity.

### Kelsey Timler

Kelsey is the Research Manager of A.R.T. & Justice who has honoured to work with artists and leaders who are or have been incarcerated since 2015. She believes in the power of community-led research to help build a better world. She spent many years as a professional cook and is a proud art school drop-out who believes that art is for everybody, that every human is creative, and that food has the power to bring people together. She loves hiking up mountains with her dog and making elaborate meals. Cooking is her main artistic endeavour, and she sees art as a practice that can support the simple but radical act of taking care of one another.

### Angelee Porter

Angelee is an artist with many years of experience. She uses mixed media with mostly found objects. Angelee’s artwork has been shown in several galleries throughout the country and she also facilitates community art workshops. Angelee has been a passionate member of the A.R.T. & Justice team since she joined in 2022. She is also a public speaker, advocate, and teacher with a special interest in prison art and artists. Dogs are her true love. She works as a dog trainer and boards dogs at her house. In fact, Angelee’s work sometimes contains accidental dog footprints which turn out to be just what the piece needs. The universe provides.

### Sam Young

Sam is a freelance artist, art instructor at the City of Burnaby, Project Coordinator with the UBC Transformative Health & Justice Research Cluster and Research Assistant with A.R.T. & Justice. Sam got her bachelor’s in fine arts in Drawing and Painting in Toronto and primarily works with acrylic and watercolor paint. She is a mom to 2 pet hedgehogs named Quilly and Nutmeg. In her free time you can find Sam playing video games and baking new recipes. Sam sees art as a way to speak in a different language, but this language can be understood universally and is not just for a select group. Art allows you to share a different form of expression and understanding, which allows for different forms of engagement and influences in those that view it. Art can be recycled, collaborated upon, temporary, or a piece of history. She likes that you are able to choose what art wants to be for you, there are no rights or wrongs, just creativity.


<VPTeamPage>
<img src="/banners/WhyTablets.png" width="90%" style="margin: 0 auto"/>
  <VPTeamPageTitle>
    <template #title>
      Why Tablets?
    </template>
    <template #lead>
      We are using tablets as a way to teach digital literacy to those inside, in order to bridge the technology gap to the outside. Tablets are very similar in format to phones, but also have uses that computers would be used for, this is why we chose tablets for their dual purpose.
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
  </VPTeamPageSection>
</VPTeamPage>

<!-- <VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Updates
    </template>
    <template #lead>

    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
  </VPTeamPageSection>
</VPTeamPage> -->

<VPTeamPage>
  <img src="/banners/KeepInTouch.png" width="90%" style="margin: 0 auto"/>
  <VPTeamPageTitle>
    <template #title>
      Keep in Touch
    </template>
    <template #lead>
      <p>Call us at 1-888-379-0118, or send mail to Kelsey Timler or Helen Brown at the following mailing address:</p>
      <div class="about-address">
        <p>University of British Columbia</p>
        <p>School of Nursing</p>
        <p>T201-2211 Wesbrook Mall</p>
        <p>Vancouver, BC, Canada, V6T 2B5</p>
      </div>
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
  </VPTeamPageSection>
</VPTeamPage>


<style>
.about-address p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.5;
  /* font-weight: 800; */
  
}
</style>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const teamMembers = [
  {
    avatar: './team/helen-brown.png',
    name: 'Helen Brown',
    title: 'Associate Professor & Academic Lead',
    // sponsor: './about#helen-brown',
    // actionText: 'Learn more'
  },
  {
    avatar: './team/kelsey-timler.png',
    name: 'Kelsey Timler',
    title: 'Research Manager',
    // sponsor: './about#kelsey-timler',
    // actionText: 'Learn more'
  },
  {
    avatar: './team/angelee-porter.png',
    name: 'Angelee Porter',
    title: 'Research Assistant',
    // sponsor: './about#angelee-porter',
    // actionText: 'Learn more'
  },
  {
    avatar: './team/sam-young.png',
    name: 'Sam Young',
    title: 'Research Assistant',
    // sponsor: './about#sam-young',
    // actionText: 'Learn more'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/26402139',
    name: 'cynber',
    title: 'Volunteer & Developer',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/98669531',
    name: 'sagedrake',
    title: 'Volunteer & Developer',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/98340537',
    name: 'logank8',
    title: 'Volunteer & Developer',
  },
]
</script>