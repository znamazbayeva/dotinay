<template>
  <div class="container mx-auto">
    <BlogPost v-for="i in 9" :key="i" :id="i" />
  </div>
</template>