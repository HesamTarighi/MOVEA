<template>
    <div class="bg-cover rounded-xl relative overflow-hidden flex flex-col justify-between card" :style="`background-image: url('${info.poster}');`">
        <Modal class="opacity-60"/>
        <div class="flex flex-col relative z-10 m-4">
            <span class="uppercase"> {{ info.title }} </span>
            <span class="opacity-60 text-sm"> {{info.genres[0]}} </span>
        </div>
        <div class="relative z-10 m-4"> <a :href="`/watch/${info.id}`" class="inline-block"> <CButton class="flex items-center gap-2"> <Icon> play_circle </Icon> <span> Watch </span> </CButton> </a> </div>
    </div>
</template>

<script>
    import Modal from '../../Modal.vue'
    import CButton from '../../Button.vue'
    import Icon from '../../Icon.vue'
    export default {
        components: {
            Modal,
            CButton,
            Icon
        },

        props: {
            info: Object
        }
    }
</script>

<style scoped>
    .card {
        background-position-x: center;
    }

    .card:nth-child(1) {
        grid-column-start: span 6;
    }

    .card:nth-child(2),
    .card:nth-child(3) {
        grid-column-start: span 3;
        background-position-y: 30% !important;
    }

    .card:nth-child(4),
    .card:nth-child(5),
    .card:nth-child(6) {
        grid-column-start: span 2;
    }
</style>
