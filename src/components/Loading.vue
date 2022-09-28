<template>
    <div class="w-full min-h-screen absolute left-0 top-0 bg-no-repeat bg-cover z-50" v-if="enable">
        <Modal class="opacity-100 z-40"></Modal>
        <div class="center z-50">
            <div class="flex flex-col items-center gap-8">
                <span class="spiner"></span>
                <span class="text-2xl text-third">{{loading_text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
    components: {Modal},

    props: ['enable'],

    data() {
        return {
            loading_text: 'Loading'
        }
    },

    methods: {
        loading() {
            let text = 'Loading'
            let dots = ''
    
            setInterval(() => {
                dots += '.'
                this.loading_text = text + dots
                
                if (dots.length >= 3) dots = ''
            }, 700);
        }
    },

    created() {
        this.loading()
    },
    
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

<style scoped>
    .spiner {
        width: 100px;
        height: 100px;
    }

    .spiner:before {
      content: '';
      display: block;
      width: inherit;
      height: inherit;
      border-radius: 50%;
      transform: rotateX(0);
      animation: 1s spin linear infinite;
    }

    @keyframes spin {
        0%,
        100% {
          box-shadow: .3em 0px 0 0px #FD7014;
        }
        12% {
          box-shadow: .3em .3em 0 0 #FD7014;
        }
        25% {
          box-shadow: 0 .3em 0 0px #FD7014;
        }
        37% {
          box-shadow: -.3em .3em 0 0 #FD7014;
        }
        50% {
          box-shadow: -.3em 0 0 0 #FD7014;
        }
        62% {
          box-shadow: -.3em -.3em 0 0 #FD7014;
        }
        75% {
          box-shadow: 0px -.3em 0 0 #FD7014;
        }
        87% {
          box-shadow: .3em -.3em 0 0 #FD7014;
        }
    }
</style>
