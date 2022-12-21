<template>
  <div class="px-8 py-2 rounded-lg bg-secondary transition-all duration-150" :class="{'de-active': !toggle}">
    <ul class="space-y-4" v-if="results != ''">
      <li v-for="result in results"> <a :href="'/watch/' + result.id" class="underline opacity-70 hover:text-third hover:opacity-100">{{ title(result.title) }}</a></li>
      <li class="text-center text-third" v-if="results.length > 9">
        <hr class="opacity-10 mb-3">
        <a href="/" class="text-md inline-flex items-center more"> More results </a>
      </li>
    </ul>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import CButton from './Button'
import Icon from "./Icon";

export default {
  name: "DropDownMenu.vue",

  props: ['toggle', 'results'],

  components: {Icon, CButton},

  methods: {
    title(title) {
      if (title.length > 25) {
        const new_title = title.slice(0, 25) + '...'
        return new_title
      } else return title
    }
  }
}
</script>

<style scoped>
  .de-active {
    opacity: 0;
    pointer-events: none;
  }

  .more:hover span {
    transform: translateX(5px);
  }
</style>