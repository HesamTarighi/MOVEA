<template>
    <span class="material-icons" :style="`color: ${color};`"> <slot/> </span>
</template>

<script>
    export default {
        props: {
            color: String
        }
    }
</script>
