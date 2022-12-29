<template>
  <div class="w-full overflow-x-hidden" :class="$store.state.lock_scroll ? 'h-screen overflow-y-hidden' : ''">
    <Loading :enable="$store.state.loading || false"/>
    <Window :enable="$store.state.signin_window" @window="closeWindow" v-slot="props">
      <CForm :class="props.class"></CForm>
    </Window>
    <router-view/>
    <FooterBase/>
  </div>
</template>

<script>
  // Components
  import FooterBase from './components/Base/Footer.vue'
  import Window from './components/Window.vue'
  import CForm from './components/Form.vue'
  import Loading from './components/Loading.vue'

  export default {
    components: {
      FooterBase,
      Window,
      CForm,
      Loading
    },

    mounted() {
        this.receiveContents()
    },

    methods: {
      closeWindow(close) {
        this.$store.commit('toggleSigninWindow', close)
      },

      receiveContents () {
        this.$store.dispatch('getMovies')
        this.$store.dispatch('getSeries')
        this.$store.dispatch('getTvs')
      }
    }
  }
</script>

<style>
  #app {
    min-height: 100vh;
    background-color: #141414;
    display: flex;
    justify-content: center;
  }
</style>
