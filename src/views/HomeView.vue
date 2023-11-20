<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue';
import VPagination from '@/components/VPagination.vue';
import type { Post } from '@/types';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const limit = 8;

const route = useRoute();
const page = ref(Number(route.query.page) || 1);
const posts = ref<Post[] | null>(null);

const displayedPosts = computed(() => {
  const start = (page.value - 1) * limit;
  const end = start + limit;
  return posts.value?.slice(start, end);
});

const url = new URL('posts', import.meta.env.VITE_API_BASE_URL);
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    posts.value = json;
  });
</script>

<template>
  <h1 class="main__title">Articles</h1>
  <template v-if="posts">
    <div class="main__articles">
      <ArticleCard v-for="post in displayedPosts" :key="post.id" :post="post" />
    </div>
    <VPagination v-model="page" :total="posts.length" :page-count="limit" aria-label="Articles" />
  </template>
  <h2 v-else>Loading...</h2>
</template>

<style>
.main__articles {
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: space-between;
  gap: 40px 32px;
  margin-bottom: 50px;
}

@media (max-width: 767px) {
  .main__articles {
    grid-template-columns: 1fr;
    place-items: center;
  }
}
</style>
