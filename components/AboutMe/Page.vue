<template>
  <div class="flex-1 flex flex-col">
    <div class="max-w-2xl w-full py-12 px-4 mx-auto">
      <div class="mt-8 dark:text-white max-w-none">
        <div class="ck-content" v-html="me?.content"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Me } from "~/types/index";
import 'highlight.js/lib/common';
import javascript from 'highlight.js/lib/languages/javascript';
import hljs from 'highlight.js'

const me = ref<Me | null>(null);
const { result } = await myFetch<Me[]>("me");
me.value = result.value && result.value[0];
onMounted(() => {
  hljs.registerLanguage('javascript', javascript);
  hljs.highlightAll()
})
</script>