<template>
  <div class="my-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap flex-row gap-8 justify-between">
        <ProjectsProject 
        v-for="i in 9" :key="i" 
        :background-color="backgroundColors[i-1]"
        @click="openModal()"
        /> 
      </div>
    </div>
    <ProjectsModal :is-open="isOpen" @closeModal="closeModal" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
const backgroundColors: Array<string>= [
  'bg-orange-600', 
  'bg-yellow-600', 
  'bg-amber-600', 
  'bg-lime-600', 
  'bg-green-600',
  'bg-emerald-600',
  'bg-cyan-600',
  'bg-blue-600',
  'bg-violetish', 
]
</script>