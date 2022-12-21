<template>
    <div class="absolute w-full h-screen z-50" :class="enable ? 'pointer-events-auto' : 'pointer-events-none'">
        <slot class="center transition-all duration-200 z-50" :class="enable ? 'opacity-100' : 'opacity-0'"/>
        <Modal class="transition-all duration-200" :class="enable ? 'opacity-80' : 'opacity-0'" @click="$emit('window', false)"/>
    </div>
</template>

<script>
    import Modal from './Modal.vue'

    export default {
        components: {Modal},

        props: ['enable'],

        watch: {
            enable: {
                handler() {
                    if (this.enable) this.$store.commit('toggleLockScroll', true)
                    else this.$store.commit('toggleLockScroll', false)
                }
            }
        }
    }
</script>
