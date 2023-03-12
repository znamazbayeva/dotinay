<template>
  <div>
    <nuxt-link :to="`/blog/${id}/`">Post</nuxt-link>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  id: number
}>()
</script>
