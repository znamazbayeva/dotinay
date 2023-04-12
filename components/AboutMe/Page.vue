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
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // you can change

const me = ref<Me | null>(null);
const { result } = await myFetch<Me[]>("me");
me.value = result.value && result.value[0];
onMounted(() => {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
})
</script>