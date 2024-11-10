<template>
  <svg
    :style="{ color: iconColor }"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path :d="iconPath" />
  </svg>
</template>

<script>
export default {
  name: "MdiIcon",
  props: {
    iconPath: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "1.2em",
    },
    height: {
      type: String,
      default: "1.2em",
    },
    iconColor: {
      type: String,
      default: "",
    },
  },
};
</script>
