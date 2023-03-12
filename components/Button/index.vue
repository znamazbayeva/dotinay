<template>
  <div>
    <button :class="[styleClass, 'hover:cursor-pointer shadow-md shadow-gray-300 px-2 py-2  tablet:px-4 tablet:py-3 rounded-2xl font-semibold tracking-wide']">
      <slot />
    </button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  styleClass: string
}>()
</script>