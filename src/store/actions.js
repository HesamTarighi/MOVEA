import axios from 'axios'

export default {
    //Movies
    getMovies ({commit}) {
        const proxy = {
            '/api/': {
                target: 'https://imdbapi.cyclic.app'
            }
        }
        const today = new Date()
        axios.get(`/api/advance_search/?title_type=feature&release_date=2022-01-01,${today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}`, {proxy})
            .then(res => commit('setMovies', res.data))
    },

    //Series
    getSeries ({commit}) {
        const proxy = {
            '/api/': {
                target: 'https://imdbapi.cyclic.app'
            }
        }
        axios.get(`/api/advance_search/?title_type=tv_miniseries`, {proxy})
            .then(res => commit('setSeries', res.data))
    },

    //Tvs
    getTvs ({commit}) {
        const proxy = {
            '/api/': {
                target: 'https://imdbapi.cyclic.app'
            }
        }
        axios.get(`/api/advance_search/?title_type=tv_movie&release_date=2022-01-01,2023-01-01`, {proxy})
            .then(res => commit('setTvs', res.data))
    },

    //Searching in id
    searchingById ({commit}, title) {
        axios.get(`https://imdbapi.cyclic.app/api/title/${title}`)
            .then(res => commit('setSelectedContent', res.data))
    },

    //Searching in Title
    async searchingByTitle ({commit}, title) {
        const proxy = {
            '/api/': {
                target: 'https://imdbapi.cyclic.app'
            }
        }

        return await axios.get(`/api/search/${title}`, {proxy})
    }
}
