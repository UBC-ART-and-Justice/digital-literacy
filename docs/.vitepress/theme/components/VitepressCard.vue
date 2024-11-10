<template>
  <div class="card">
    <p class="text-with-icon">
      <MdiIcon
        v-if="resolvedIconPath"
        :iconPath="resolvedIconPath"
        :width="'1.2em'"
        :height="'1.2em'"
        :iconColor="iconColor"
      />
      <span :class="['title', { 'no-icon': !resolvedIconPath }]">{{ title }}</span>
    </p>
    <div class="card-body">
      <slot />
    </div>
    <a v-if="link" :href="link" class="card-link">
      {{ actualLinkText }}
      <MdiIcon :iconPath="mdiArrowRight" class="arrow-icon" />
    </a>
  </div>
</template>

<script>
import { computed } from "vue";
import MdiIcon from "./MdiIcon.vue";
import {
  mdiArrowRight,
  mdiMonitorCellphone,
  mdiCellphone,
  mdiApps,
  mdiFile,
  mdiFolder,
  mdiShieldAlert,
  mdiForumOutline,
  mdiInformation,
  mdiCog,
  mdiMinusCircle,
  mdiArrowRightBoldBox,
  mdiWeb,
  mdiLinkBox,
  mdiMagnify,
  mdiStarCircle,
  mdiHelpRhombus,
  mdiContentSaveCheck,
  mdiFolderAccount,
  mdiUpdate,
  mdiFormTextboxPassword,
  mdiLockCheck,
  mdiVirus,
  mdiEmailFast,
  mdiCommentCheck,
  mdiVideoPlus,
  mdiAccountMultipleOutline,
} from "@mdi/js"; // Import icons you plan to use

export default {
  name: "VitepressCard",
  components: {
    MdiIcon,
  },
  props: {
    mdiIcon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    linkText: {
      type: String,
      default: "Check it out",
    },
  },
  setup(props) {
    // Use the prop value directly to resolve the icon path
    const iconPaths = {
      mdiArrowRight,
      mdiMonitorCellphone,
      mdiCellphone,
      mdiApps,
      mdiFile,
      mdiFolder,
      mdiShieldAlert,
      mdiForumOutline,
      mdiInformation,
      mdiCog,
      mdiMinusCircle,
      mdiArrowRightBoldBox,
      mdiWeb,
      mdiLinkBox,
      mdiMagnify,
      mdiStarCircle,
      mdiHelpRhombus,
      mdiContentSaveCheck,
      mdiFolderAccount,
      mdiUpdate,
      mdiFormTextboxPassword,
      mdiLockCheck,
      mdiVirus,
      mdiEmailFast,
      mdiCommentCheck,
      mdiVideoPlus,
      mdiAccountMultipleOutline,
      // Use any other icons you'd like to support
    };

    const resolvedIconPath = computed(() => {
      return iconPaths[props.mdiIcon] || null;
    });

    const actualLinkText = computed(() => {
      return props.linkText || "Check it out";
    });

    return {
      resolvedIconPath,
      actualLinkText,
      mdiArrowRight,
    };
  },
};
</script>

<style scoped>
.card {
  padding: 12px 24px;
  margin: 1rem 0.5rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.text-with-icon {
  display: flex;
  align-items: center;
}

.text-with-icon .title {
  line-height: 24px;
  font-size: 18px;
  font-weight: 600;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
}

.text-with-icon .title.no-icon {
  margin-left: 0;
}

.text-with-icon .title:not(.no-icon) {
  margin-left: 0.5em;
}

.card-body {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.card-link {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 600;
}

.card-link:hover {
  color: var(--vp-c-brand-2);
}

.arrow-icon {
  margin-left: 0.5em;
  width: 1em;
  height: 1em;
}
</style>
