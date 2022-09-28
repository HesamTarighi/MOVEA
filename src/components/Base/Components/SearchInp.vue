<template>
    <div>
      <input
        type="text" class="rounded-full bg-secondary text-white text-opacity-70 px-4 py-1 transition-all duration-150"
        :class="{'de-active': !toggle}" placeholder="Search..."
        v-model="search_data"
        @input="$emit('searching', search_data)"
      >
    </div>
</template>

<script>
  export default {
    props: ['toggle'],

    data() {
      return {
        search_data: ''
      }
    }
  }
</script>

<style scoped>
  input {
    width: 200px;
  }

  input::placeholder {
    font-style: italic;
    opacity: .5;
  }

  .de-active {
    opacity: 0;
    transform: translateY(-5px);
    pointer-events: none;
  }
</style>
