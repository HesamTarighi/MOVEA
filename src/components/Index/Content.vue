<template>
    <section class="w-full pb-8" v-if="data != ''">
        <h2 class="w-60% mx-auto my-4 text-3xl"> {{ title }} </h2>
        <div class="w-60% grid grid-cols-6 gap-8 mx-auto card-box">
            <Card
            v-for="(info, index) in data"
            :key="index"
            :info="info"
            >
            </Card>
        </div>
    </section>
</template>

<script>
    import Card from './Components/Card.vue'
    export default {
        components: {
            Card
        },

        props: {
            title: String,
            content: String
        },

        computed: {
            data() {
                if(this.$store.state[this.content] != '' && this.$store.state[this.content] != null) return this.$store.state[this.content].slice(0, 6)
            }
        }
    }
</script>

<style scoped>
    .card-box {
        grid-auto-rows: 300px;
    }
</style>
