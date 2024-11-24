<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  script: [
    {
      src: 'https://telegram.org/js/telegram-web-app.js',
      defer: true,
    },
  ],
});
</script>

<template>
  <div>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
</style>
