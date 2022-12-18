<template>
    <section class="w-full relative bg-cover bg-center">
        <div id="canvas_container">

        </div>
        <div class="w-70% flex gap-6 relative z-10 mx-auto py-4">
            <div v-for="(plan, index) in plans" :key="index" class="rounded-md overflow-hidden" :class="`plan plan_${index} ${plan[index].special ? 'active-plan' : ''}`">
                <div class="w-full relative">
                    <div class="flex flex-col items-center relative gap-1 py-12 px-24">
                        <span> {{ plan.title }} </span>
                        <span class="text-3xl"> ${{ plan.price }} </span>
                        <span class="text-sm"> {{ plan.time }} </span>
                    </div>
                </div>
                <div class="bg-secondary px-2 py-4 flex flex-col items-center gap-4">
                    <ul class="list-disc list-inside space-y-3 self-start">
                        <li v-for="plan in 7" :key="plan" class="text-fifth opacity-70"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid </li>
                    </ul>
                    <CButton class="flex items-center gap-2"> <Icon>shopping_cart</Icon> Buy plan </CButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Modal from '../Modal.vue'
    import CButton from '../Button.vue'
    import Icon from '../Icon.vue'

    import Konva from 'konva'

    export default {
        components: {
            Modal,
            CButton,
            Icon
        },

        data () {
            return {
                plans: [
                    {
                        title: 'Basic',
                        price: '199.99',
                        time: '2Mounth'
                    },
                    {
                        title: 'Pro',
                        price: '399.99',
                        time: '6Mounth',
                        special: true
                    },
                    {
                        title: 'Elite',
                        price: '599.99',
                        time: '12Mounth'
                    },
                ]
            }
        },

        mounted () {
            this.defineEffect()
        },

        methods: {
            defineEffect () {
                const stage = new Konva.Stage({
                    container: 'canvas_container',
                    width: this.$el.clientWidth,
                    height: this.$el.clientHeight
                })
                const layer = new Konva.Layer()

                const bubble = new Konva.Circle({
                    x: 50,
                    y: 50,
                    radius: 15,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 4
                })

                layer.add(bubble)
                stage.add(layer)

                var amplitude = stage.width()
                var period = 3000

                var anim = new Konva.Animation((frame) => {
                    bubble.x(
                        amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + 500
                    )
                }, layer)

                anim.start();
            }
        }
    }
</script>

<style scoped>
    .plan {
        max-width: 350px;
    }

    .plan_0 {
        background-color: #1363DF;
    }

    .plan_1 {
        background-color: #E6B31E;
    }

    .plan_2 {
        background-color: #EB1D36;
    }

    .active-plan {
        box-shadow: 4px 4px 8px #000;
    }
</style>
