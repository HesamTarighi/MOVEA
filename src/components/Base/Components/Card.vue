<template>
    <a :href="`/watch/${info.id}`" class="card">
        <div class="flex flex-col transition-all duration-400 transform hover:-translate-y-4">
            <div class="h-full rounded-md relative overflow-hidden">
                <Modal class="opacity-40"/>
                <img :src="info.poster" class="w-full h-full object-cover">
            </div>
            <span class="opacity-70">{{ info.title }}</span>
        </div>
    </a>
</template>

<script>
  //Components
  import Modal from '../../Modal.vue'
  import axios from 'axios'

  export default {
    components: {
      Modal
    },

    props: {
      info: Object
    }
  }
</script>

<style scoped>
    .card > div {
        width: 180px;
        height: 300px;
    }
</style>
