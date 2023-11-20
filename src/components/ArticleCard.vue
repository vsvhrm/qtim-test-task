<script setup lang="ts">
import { RouteName } from '@/router';
import type { Post } from '@/types';

interface Props {
  post: Post;
}

defineProps<Props>();
</script>

<template>
  <article class="article-card">
    <img
      class="article-card__image"
      src="https://dummyimage.com/280x280/868686/fff "
      width="280"
      height="280"
      alt=""
    />
    <p class="article-card__text">{{ post.preview }}</p>
    <RouterLink
      :to="{ name: RouteName.Article, params: { id: post.id } }"
      class="article-card__link"
    >
      Read more
    </RouterLink>
  </article>
</template>

<style>
.article-card {
  max-width: 280px;
  display: flex;
  flex-direction: column;
}

.article-card__image {
  margin-bottom: 24px;
}

.article-card__text {
  margin-bottom: 12px;
  font-size: 20px;
}

.article-card__link {
  color: var(--color-mauve);
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.article-card:hover .article-card__link {
  opacity: 1;
}
</style>
