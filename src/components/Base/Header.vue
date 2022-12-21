<template>
    <header class="relative bg-cover flex flex-col justify-between" :style="`background-image: url(${require('../../assets/covers/' + best.cover)});`">
        <Modal class="opacity-70"/>
        <NavBase/>

        <section class="w-full flex flex-col justify-center items-center py-4 relative z-20">
            <div class="w-70% flex flex-col gap-4">
                <h1 class="text-6xl font-raleway uppercase name">{{ name }}</h1>
                <span class="text-2xl">Session {{ best.session }}</span>
                <div class="space-y-2">
                    <div>
                        <div>
                            <Icon color="orange"> star </Icon>
                            <Icon color="orange"> star </Icon>
                            <Icon color="orange"> star </Icon>
                            <Icon color="orange"> star </Icon>
                            <Icon> star </Icon>
                        </div>
                    </div>
                    <div class="opacity-70 text-lg space-x-4" v-if="best != null">
                        <span v-for="(genre, index) in best.genres" :key="index"> {{ genre }} </span>
                    </div>
                    <div>
                        <CButton class="flex items-center gap-2"> <Icon> play_circle </Icon> <span> Watch </span> </CButton>
                    </div>
                </div>
                <p class="w-3/6 h-46 font-caveat text-lg description">
                    {{ description }}
                </p>
            </div>
            <div class="w-full flex justify-center flex-wrap gap-4" v-if="news != ''">
                <Card
                v-for="(info, index) in news"
                :key="index"
                :info="info"
                />
            </div>
        </section>
    </header>
</template>

<script>
    // Components
    import NavBase from './Nav.vue'
    import Modal from '../Modal.vue'
    import CButton from '../Button.vue'
    import Icon from '../Icon.vue'
    import CForm from '../Form.vue'
    import Card from './Components/Card.vue'
    
    export default {
        components: {
            NavBase,
            Modal,
            CButton,
            Icon,
            Card,
            CForm
        },
        data() {
            return {
              best: {
                    name: 'WITCHER',
                    session: 1,
                    rating: 8,
                    price: '5.99',
                    description: 'Geralt of Rivia, a brooding professional monster hunter for hire also known as witcher, struggles to keep his humanity in a medieval dark fantasy world ruled by corrupt kings, queens and mages, where poverty, violence and intolerance are rampant, normal humans are sometimes worse than actual monsters and most jobs that pay well involve the darkest of human emotions and desires. Yennefer of Vengerberg is an ambitious mage who came from nothing and wants everything. Princess Cirilla or Ciri is a young girl who may or may not possess some great mysterious power within her. Their destinies, seemingly quite different, slowly intertwine in a rather cosmic fashion. Their companions include Jaskier the bard, Geralts endearingly annoying friend and hype man vowed to spread the word of his heroics throughout the continent even if he has to embellish them a little for a few coins more, Tissaia de Vries, Yennefers secretive mentor who believes in tough love, and Triss Merigold, a good-natured druidic mage and trustworthy friend. The Nilfgaardian Empires sudden brutal invasion of the kingdom of Cintra ruled by Cirillas protective grandmother, warrior queen Calanthe, puts their lives in great danger.',
                    cover: 'witcher2.jpg',
                    genres: [
                        'Crime',
                        'Drama',
                        'Mystery'
                    ]
                }
            }
        },
        computed: {
          name() {
            return this.best.name.toUpperCase()
          },
          news() {
            if (this.$store.getters.news.length > 9) return this.$store.getters.news.slice(0, 9)
            else return this.$store.getters.news
          },
          description() {
            const max_char = 700
            if(this.best != null) {
              if (this.best.description.length > max_char) {
                let filter_text = this.best.description.slice(0, max_char)
                filter_text += '...'
                return filter_text
              }else return this.best.description
            }
          }
        },
    }
</script>

<style scoped>
    header {
        min-height: 100vh;
    }
    .name {
        background: linear-gradient(to bottom, #eeeeee 30%, #393E46);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .description {
        background: linear-gradient(to bottom, #393E46, rgb(0, 0, 0, 0));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>