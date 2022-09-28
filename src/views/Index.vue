<template>
  <HeaderBase />
  <main class="space-y-8 py-8">
    <Content :title="'Movies'" content="movies" id="movies_continer"/>
    <hr class="border-secondary">
    <Content :title="'Tv shows'" content="tvs" id="tvs_continer"/>
    <hr class="border-secondary">
    <Content :title="'Series'" content="series" id="series_continer"/>
    <Plans />
  </main>
</template>

<script>
  //Components
  import HeaderBase from '../components/Base/Header'
  import Content from '../components/Index/Content'
  import Plans from '../components/Index/Plans'

  export default {
    components: {
      HeaderBase,
      Content,
      Plans
    },

    computed: {
      contents() {
        return [this.$store.state.movies, this.$store.state.tvs, this.$store.state.series]
      }
    },

    created() {
      if (this.contents[0] == '' || this.contents[1] == '' || this.contents[2] == '') this.$store.commit('toggleLoading', true)
    },

    watch: {
      contents: {
        handler() {
          if (this.contents[0] != '' && this.contents[1] != '' && this.contents[2] != '') this.$store.commit('toggleLoading', false)
        }
      }
    }
  }
</script>
