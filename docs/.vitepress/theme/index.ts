// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import './custom.css'
import { Icon } from '@iconify/vue';              // Iconify
import { onMounted, watch, nextTick } from 'vue'; // Medium Zoom
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
// import VpvImageGallery from './components/VpvImageGallery.vue'
import MdiIcon from './components/MdiIcon.vue'
import VitepressCard from './components/VitepressCard.vue';
import VitepressCardContainer from './components/VitepressCardContainer.vue';
// New Components
import '@cynber/vitepress-valence/style.css'
import {
  VpvArticleHeader,
  VpvArticleList,
  VpvImageGallery,
} from '@cynber/vitepress-valence'
import authors from './data/authors.js'
import { data as postsData } from './data/posts.data.js';
import { data as galleryData } from './data/gallery.data.js';


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Icon', Icon);
    // app.component('ImageText', ImageText);
    app.component('MdiIcon', MdiIcon);
    app.component('VitepressCard', VitepressCard);
    app.component('VitepressCardContainer', VitepressCardContainer);
    // New Components
    app.component('VpvImageGallery', VpvImageGallery)
    app.component('VpvArticleHeader', VpvArticleHeader)
    app.component('VpvArticleList', VpvArticleList)
    app.provide('authors', authors)
    app.provide('postsData', postsData)
    app.provide('galleryData', galleryData)
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
} satisfies Theme
