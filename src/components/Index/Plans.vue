<template>
    <section class="w-full relative bg-cover bg-center">
        <div class="w-70% flex gap-6 relative z-10 mx-auto py-4">
            <div v-for="(plan, index) in plans" :key="index" class="rounded-md overflow-hidden">
                <div class="w-full relative" :class="`plan_${index}`">
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
