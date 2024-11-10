<template>
  <div class="image-gallery">
    <div class="header">
      <p class="title">{{ title }}</p>
      <p class="date">{{ date }}</p>
    </div>
    <div class="image-grid">
      <div v-for="(image, index) in processedImages" :key="index" class="image-container">
        <img :src="image.src" :alt="image.alt || 'gallery-image'" data-zoomable />
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import mediumZoom from "medium-zoom";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  computed: {
    processedImages() {
      return this.images.map((image) => {
        return {
          ...image,
          src: `${import.meta.env.BASE_URL}${image.src.replace(/^\//, "")}`,
        };
      });
    },
  },
  mounted() {
    const zoom = mediumZoom("[data-zoomable]");

    zoom.on("open", (event) => {
      const zoomedImg = zoom.getZoomedImage();
      if (zoomedImg) {
        zoomedImg.style.objectFit = "contain";
      }
    });

    zoom.on("closed", (event) => {
      const imgs = zoom.getImages();
      imgs.forEach((img) => {
        img.style.objectFit = "";
      });
    });
  },
};
</script>

<style scoped>
.image-gallery {
  overflow: hidden;
  margin: 1rem 0.5rem;
  border-radius: 12px;
  border: 2px solid var(--vp-c-gray-1);
  transition: border-color 0.25s;
}

.header,
.footer {
  background-color: var(--vp-c-bg-soft);
  transition: background-color 0.25s;
}

.header {
  padding: 10px 12px 4px 12px;
  border-bottom: 2px solid var(--vp-c-gray-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer {
  padding: 4px 12px;
  border-top: 2px solid var(--vp-c-gray-1);
}

.title {
  max-width: 75%;
  margin: 0;
  font-size: 0.8rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}

.date {
  width: 20%;
  margin: 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  text-align: right;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
}

.image-container {
  width: 100%;
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
  cursor: pointer;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
