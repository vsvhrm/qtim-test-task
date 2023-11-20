<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <TheHeader />
  <main class="main">
    <RouterView />
  </main>
  <TheFooter />
</template>

<style>
.page {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
}

.main {
  padding: 120px 100px 140px 100px;
  display: flex;
  flex-direction: column;
}

.main__title {
  margin-bottom: 60px;
  font-size: 84px;
}
</style>
