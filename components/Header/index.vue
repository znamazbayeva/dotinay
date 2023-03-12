<template>
  <div class="flex items-center h-20">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-xl tablet:text-3xl text-violetish font-bold hover:cursor-pointer">
        <nuxt-link to="/">
          Dotinay
        </nuxt-link>
      </div>
        <div class="flex justify-between items-center tablet:gap-2 gap-1">
          <nuxt-link to="/projects">
            <Button styleClass="flex justify-between items-center gap-1 bg-violetish text-white hover:-translate-y-1 transition-all">
                <span>Projects</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 6C2 4.89543 2.89543 4 4 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289L11.4142 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM8.58579 6L4 6V18H20V8H11C10.7348 8 10.4804 7.89464 10.2929 7.70711L8.58579 6Z"
                    fill="currentColor" />
                </svg>
            </Button>
          </nuxt-link>
          <nuxt-link to="/blog">
            <Button styleClass="flex justify-between items-center gap-1 bg-white text-violetish hover:-translate-y-1 transition-all">
                <span>Blog</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L8.70711 20.7071C8.51957 20.8946 8.26522 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.7348 3.10536 15.4804 3.29289 15.2929L13.2927 5.2931L16.2929 2.29289ZM14 7.41421L5 16.4142V19H7.58579L16.5858 10L14 7.41421ZM18 8.58579L19.5858 7L17 4.41421L15.4142 6L18 8.58579Z" fill="currentColor"/>
                </svg>
            </Button>
          </nuxt-link>
        </div>
    </div>
  </div>
</template>
