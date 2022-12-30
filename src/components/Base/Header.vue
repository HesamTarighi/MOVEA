<template>
    <header class="relative bg-cover flex flex-col justify-between" :style="`background-image: url(${require('../../assets/covers/' + best.cover)});`">
        <Modal class="opacity-70"/>
        <NavBase/>

        <section class="w-full flex flex-col justify-center items-center py-4 relative z-20">
            <div class="w-70% flex flex-col gap-4">
                <h1 class="text-7xl font-melody uppercase name">{{ name }}</h1>
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
                    name: 'WEDNESDAY',
                    session: 1,
                    rating: 8.4,
                    price: '5.99',
                    description: 'Follows Wednesday Addams years as a student, when she attempts to master her emerging psychic ability, thwart and solve the mystery that embroiled her parents.',
                    cover: 'wednesday1.jpg',
                    genres: [
                        'Crime',
                        'Drama',
                        'Mystery'
                    ],
                    href: '/'
                }
            }
        },
        computed: {
          name() {
            return this.best.name.toUpperCase()
          },
          news() {
            if (this.$store.getters.news.length > 6) return this.$store.getters.news.slice(0, 6)
            else return this.$store.getters.news
          },
          description() {
            const max_char = 700
            if(this.best != null) {
              if (this.best.description.length > max_char) {
                let filter_text = this.best.description.slice(0, max_char)
                filter_text += '...'
                return filter_text
              } else return this.best.description
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
        background: linear-gradient(to bottom, #eeeeee, #393E46);
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