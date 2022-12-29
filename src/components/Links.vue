<template>
    <ul class="flex gap-8">
        <li v-for="(link, index) in links" :key="index" class="relative" :class="link.href == $route.path && selected_option ? 'text-third border-b border-third pb-4 -mb-4' : ''">
          <a :href="link.href">{{ link.text }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
      props: {
        selected_option: Boolean
      },

      data() {
        return {
          links: [
            {text: 'Home', href: '/'},
            {text: 'Movies', href: '/movies'},
            {text: 'Series', href: '/series'},
            {text: 'Plans', href: '/plans'}
          ]
        }
      }
    }
</script>
