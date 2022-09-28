<template>
  <div>
    <ul class="space-y-2">
      <li v-if="info.director != undefined"> Director: <span class="opacity-70"> {{info.director[0]}} </span> </li>
      <li class="flex gap-2" v-if="info.writers != undefined">
        Writers:
        <ul class="flex gap-6 relative opacity-70">
          <li v-for="writer in info.writers" class="flex items-center relative"> {{ writer }} </li>
        </ul>
      </li>
      <li class="flex gap-2" v-if="info.creators != undefined">
        Creators:
        <ul class="flex gap-6 relative opacity-70">
          <li v-for="creator in info.creators" class="flex items-center relative"> {{ creator }} </li>
        </ul>
      </li>
      <li class="flex gap-2" v-if="info.stars != undefined">
        Stars:
        <ul class="flex gap-6 relative opacity-70">
          <li v-for="star in info.stars" class="flex items-center relative"> {{ star }} </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default  {
    props: {
      info: Object
    }
  }
</script>

<style scoped>
  li ul li:nth-child(1n+2)::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 1000px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: -.8rem;
  }
</style>
