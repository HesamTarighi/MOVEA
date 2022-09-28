import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './index.css'

const global = {
    created() {
        store.dispatch('getMovies')
        store.dispatch('getSeries')
        store.dispatch('getTvs')
    },
}

createApp(App)
.use(store)
.use(router)
.mixin(global)
.mount('#app')
