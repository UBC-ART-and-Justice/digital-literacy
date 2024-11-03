<template>
  <div class="term-list-wrapper">
    <div class="term-list">
      <div v-for="term in filteredTerms" :key="term.name" class="term-card">
        <h3 class="term-title">{{ term.name }}</h3>
        <p class="term-body">{{ term.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';

export default {
  props: {
    file: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  setup(props) {
    const terms = ref([]);
    const filteredTerms = computed(() => {
      const termsArray = terms.value;
      if (props.tags.length === 0) {
        return termsArray.sort((a, b) => a.name.localeCompare(b.name));
      }
      return termsArray
        .filter((term) => term.tags.some((tag) => props.tags.includes(tag)))
        .sort((a, b) => a.name.localeCompare(b.name));
    });

    const loadTerms = async () => {
      try {
        const response = await fetch(props.file);
        if (response.ok) {
          terms.value = await response.json();
        } else {
          console.error("Failed to fetch terms.json");
        }
      } catch (error) {
        console.error("Error fetching terms.json:", error);
      }
    };

    onMounted(loadTerms);

    watch(() => props.file, loadTerms);

    return {
      filteredTerms,
    };
  },
};
</script>

<style>
.term-list-wrapper {
  padding: 2rem 0;
}

.term-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.term-card {
  padding: 1.5rem 2rem 1rem 2rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.term-title {
  line-height: 24px;
  font-size: 18px;
  font-weight: 600;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

h3.term-title {
  margin-top: 0;
}

.term-body {
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
  margin-bottom: 0;
}
</style>
