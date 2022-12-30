<template>
  <NavBase />
  <main class="py-8" v-if="info != ''">
    <section class="w-full flex flex-col items-center">
      <div class="w-60% space-y-4">
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-xl text-third"> {{info.title}} </span>
            <div class="flex items-center gap-2"> <Icon> star </Icon> {{info.rating}} </div>
          </div>
          <img :src="info.poster" class="object-cover object-top rounded-xl cover">
        </div>
        <div class="space-y-2">
          <CButton class="flex items-center gap-2"> <Icon> add_to_queue </Icon> Add to Watchlist </CButton>
          <div class="flex flex-col gap-4">
            <p class="opacity-70"> {{info.description}} </p>
            <hr class="border-fourth">
            <div class="space-y-4">
              <ul class="flex gap-2">
                <li v-for="genre in info.genres"> <a href="/" class="px-2 py-1 border-2 border-fourth rounded-full"> {{genre}} </a> </li>
              </ul>
              <FilmMakers :info="info.film_makers" v-if="info != '' && info != undefined"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
//Components
import NavBase from "../components/Base/Nav";
import CButton from "../components/Button";
import Icon from "../components/Icon";
import FilmMakers from "../components/Watch/FilmMakersInfo";

export default {
  components: {
    Icon,
    NavBase,
    CButton,
    FilmMakers
  },

  data () {
    return {
      info: ''
    }
  },

  async mounted () {
    // if (this.info == '') this.$store.commit('toggleLoading', true)
    await this.$store.dispatch('searchingByTitle', this.$route.params.title)

    this.info = this.$store.state.selected_content
  }
}
</script>

<style scoped>
  .box-info {
    width: 60%;
  }

  .cover {
    width: 100%;
    height: 500px;
  }
</style>
