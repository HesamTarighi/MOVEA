<template>
      <nav class="w-full grid grid-cols-3 py-5 px-16 border-b border-fourth relative z-20">
        <div class="flex justify-center items-center">
            <a href="/" class="text-xl">
                MOVEA
            </a>
        </div>
        <div class="relative flex justify-center items-center">
            <Links :selected_option="true"/>
        </div>
        <div class="flex justify-center items-center gap-4 relative">
          <Search :toggle="toggle" @searching="searching"/>
          <button class="bg-secondary rounded-full hover:bg-opacity-70" @click="toggle = !toggle"> <Icon class="px-2 py-2"> search </Icon> </button>
          <Menu class="absolute top-12 -ml-36 z-50" :toggle="toggle_menu" :results="results"/>
          <div>
            <button> <Icon> bookmarks </Icon> </button>
          </div>
          <div>
            <button @click="$store.commit('toggleSigninWindow', true)"> <Icon class="text-3xl"> person </Icon> </button>
          </div>
        </div>
    </nav>
</template>

<script>
// Components
import Links from '../Links.vue'
import Icon from "../Icon";
import CButton from "../Button";
import Search from "./Components/SearchInp.vue";
import Menu from "../Menu.vue";

export default {
  components: {
    CButton,
    Icon,
    Links,
    Search,
    Menu
  },

  data() {
    return {
      toggle: false,
      toggle_menu: false,
      results: []
    }
  },

  methods: {
    async searching(search_data) {
      this.$store.dispatch('searchingByTitle', search_data)
          .then(results => {
            if (results.data.length > 10) this.results = results.data.slice(0, 10)
          })

      if (search_data != '') this.toggle_menu = true
      else this.toggle_menu = false
    }
  }
}
</script>
