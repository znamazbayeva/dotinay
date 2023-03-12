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
            <Button styleClass="bg-violetish text-white">
                Projects
            </Button>
          </nuxt-link>
          <nuxt-link to="/blog">
            <Button styleClass="bg-white text-violetish">
                Blog
            </Button>
          </nuxt-link>
        </div>
    </div>
  </div>
</template>
