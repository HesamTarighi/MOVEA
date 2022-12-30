import axios from 'axios'

export default {
    //Movies
    getMovies ({commit}) {
        const today = new Date()
        axios.get(`http://localhost:3000/api/advance_search/?title_type=feature&release_date=2022-01-01,${today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}`)
            .then(res => commit('setMovies', res.data))
    },

    //Series
    getSeries ({commit}) {
        axios.get(`http://localhost:3000/api/advance_search/?title_type=tv_miniseries`)
            .then(res => commit('setSeries', res.data))
    },

    //Tvs
    getTvs ({commit}) {
        axios.get(`http://localhost:3000/api/advance_search/?title_type=tv_movie&release_date=2022-01-01,2023-01-01`)
            .then(res => commit('setTvs', res.data))
    },

    //Searching in id
    searchingByTitle ({commit}, title) {
        axios.get(`http://localhost:3000/api/title/${title}`)
            .then(res => commit('setSelectedContent', res.data))
    },

    //Searching in Title
    searchingByName ({commit}, name) {
        axios.get(`http://localhost:3000/api/search/${name}`)
            // .then(res => commit('setSelectedContent', res.data))
    }
}
