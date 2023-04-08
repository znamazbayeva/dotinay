<template>
  <div class="flex-1 flex flex-col">
    <div class="max-w-2xl w-full py-12 px-4 mx-auto">
      <div class="mt-8 dark:text-white max-w-none">
        <h1 class="font-bold text-4xl mb-8 leading-relaxed">
          Projects I have worked on
        </h1>
      </div>
      <section class="mt-12 space-y-16 dark:text-white">
        <ProjectsProject
          v-for="(project, i) in projects"
          :key="i"
          :background-color="backgroundColors[i % 9]"
          :project="project"
          @onClick="openModal(i)"
        />
      </section>
      <ProjectsModal
        :current-project="currentProject"
        :is-open="isOpen"
        @closeModal="closeModal"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Project } from "~/types/index";

const isOpen = ref<boolean>(false);
const currentProject = ref<Project | null>(null);

const projects = ref<Project[] | null>(null);
const { result } = await myFetch<Project[]>("projects");
projects.value = result.value;

function closeModal() {
  isOpen.value = false;
}
function openModal(i: number) {
  isOpen.value = true;
  currentProject.value = projects.value && projects.value[i];
}
const backgroundColors: Array<string> = [
  "bg-orange-600",
  "bg-yellow-600",
  "bg-amber-600",
  "bg-lime-600",
  "bg-green-600",
  "bg-emerald-600",
  "bg-cyan-600",
  "bg-blue-600",
  "bg-violetish",
];
</script>
