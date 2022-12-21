import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import responsive from './composabels/responsive'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './index.css'

const global = {
    created() {
        // this.receiveContents()
    },

    methods: {
        receiveContents () {
            store.dispatch('getMovies')
            store.dispatch('getSeries')
            store.dispatch('getTvs')
        }
    }
}

createApp(App)
.use(store)
.use(router)
.mixin(global)
.mixin(responsive)
.mount('#app')
