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
import Card from './components/Card.vue';         // Custom components
import CardContainer from './components/CardContainer.vue';
import ImageGallery from './components/ImageGallery.vue'
import ImageText from './components/ImageText.vue';
import MdiIcon from './components/MdiIcon.vue'
import VitepressCard from './components/VitepressCard.vue';
import VitepressCardContainer from './components/VitepressCardContainer.vue';
import TermList from './components/TermList.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Icon', Icon);
    app.component('Card', Card);
    app.component('CardContainer', CardContainer);
    app.component('ImageGallery', ImageGallery);
    app.component('ImageText', ImageText);
    app.component('MdiIcon', MdiIcon);
    app.component('VitepressCard', VitepressCard);
    app.component('VitepressCardContainer', VitepressCardContainer);
    app.component('TermList', TermList);
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
