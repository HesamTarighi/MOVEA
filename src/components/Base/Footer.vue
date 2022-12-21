<template>
  <footer class="bg-secondary flex flex-col items-center gap-4 py-2">
    <div>
      <a href="/" class="text-xl">MOVEA</a>
    </div>
    <div>
      <Links :selected="false"/>
    </div>
    <div class="flex items-center opacity-70"> <Icon> copyright </Icon> <span>2022</span> <a href="/" class=" pl-1 text-third">Hesam Tarighi</a> </div>
  </footer>
</template>

<script>
  //Components
    import Icon from '../Icon.vue'
    import Links from '../Links.vue'

  export default {
    components: {
      Icon,
      Links
    }
  }
</script>
