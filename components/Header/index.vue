<template>
    <div v-if="menu" :style="menu ? 'display: block;' : 'display: none;'" class="fixed inset-0 bg-white dark:bg-gray-900 z-20">
            <div class="h-20 px-4 flex items-center justify-between">
                <a class="block h-14 w-14 relative dark:text-white font-bold text-2xl opacity-60" href="/">
                    Dotinay
                </a>
                <button @click="menu = !menu">
                    <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <nav class="px-4 text-right">
                <ul class="flex flex-col gap-6">
                        <li>
                            <a href="/about" class="font-medium text-xl py-1 hover:text-gray-900 dark:hover:text-gray-100 text-gray-500 border-transparent">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/blog" class="font-medium text-xl py-1 hover:text-gray-900 dark:hover:text-gray-100 text-gray-500 border-transparent">
                                Articles
                            </a>
                        </li>
                         <li>
                            <a href="/projects" class="font-medium text-xl py-1 hover:text-gray-900 dark:hover:text-gray-100 text-gray-500 border-transparent">
                                Projects
                            </a>
                        </li>  
                </ul>
            </nav>
    </div>
  <div
    class="h-20 flex items-center bg-white/80 dark:bg-gray-900/60 backdrop-blur-md sticky top-0 z-10"
  >
    <div class="w-full max-w-4xl px-4 mx-auto flex items-center">
      <div class="font-bold flex-1 text-3xl dark:text-white">
        <nuxt-link to="/"> Dotinay </nuxt-link>
      </div>
      <nav class="hidden sm:block flex-1">
        <ul class="flex justify-center gap-6">
          <li>
            <a
              href="/about"
              class="font-medium py-1 hover:text-gray-900 dark:hover:text-gray-100 text-gray-500 border-transparent"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/blog"
              class="font-medium py-1 hover:text-gray-900 dark:hover:text-gray-100 text-gray-500 border-transparent"
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="/projects"
              class="font-medium py-1 hover:text-gray-900 dark:hover:text-gray-100 text-gray-500 border-transparent"
            >
              Projects
            </a>
          </li>
          <!-- <li>
            <a
              href="/books"
              class="font-medium py-1 hover:text-gray-900 dark:hover:text-gray-100 text-gray-500 border-transparent"
            >
              Books
            </a>
          </li> -->
        </ul>
      </nav>
      <div class="flex-1 flex gap-4 items-center justify-end">
        <div class="relative">
          <button
            class="p-1 border dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 focus:hover-gray-50 dark:focus:hover-gray-800 hover:border-gray-300 dark:hover:border-gray-600 dark:focus:border-gray-600 text-gray-700 dark:text-gray-300"
            :class="
              isDark
                ? 'text-gray-700 dark:text-gray-300'
                : 'text-gray-400 dark:text-gray-600 hover:text-gray-500 focus:text-gray-500 dark:hover:text-gray-500 dark:focus:text-gray-500'
            "
            @click="toggleDark()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="block dark:hidden w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="hidden dark:block w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              ></path>
            </svg>
          </button>
        </div>
        <button class="sm:hidden" @click="menu = true">
          <svg
            class="w-6 h-6 text-gray-700 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
let menu = ref<boolean>(false);
</script>
