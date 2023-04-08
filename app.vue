<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import 'highlight.js/lib/common';
import javascript from 'highlight.js/lib/languages/javascript';
import hljs from 'highlight.js'
onMounted(() => {
  hljs.registerLanguage('javascript', javascript);
  hljs.highlightAll()
})
</script>
