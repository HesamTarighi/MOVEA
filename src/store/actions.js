import axios from 'axios'

export default {
    //Movies
    async getMovies ({commit}) {
        const today = new Date()
        await axios.get(`api/advance_search/?title_type=feature&release_date=2022-01-01,${today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}`)
            .then(res => commit('setMovies', res.data))
    },

    //Series
    async getSeries ({commit}) {
        await axios.get(`api/advance_search/?title_type=tv_miniseries`)
            .then(res => commit('setSeries', res.data))
    },

    //Tvs
    async getTvs ({commit}) {
        await axios.get(`api/advance_search/?title_type=tv_movie&release_date=2022-01-01,2023-01-01`)
            .then(res => commit('setTvs', res.data))
    },

    //Searching in id
    async searchingById ({commit}, id) {
        await axios.get(`api/title/${id}`)
            .then(res => commit('setSelectedContent', res.data))
    },

    //Searching in Title
    async searchingByTitle ({commit}, title) {
        const headers = {
            'Access-Control-Allow-Origin': '*'
        }

        return await axios.get(`api/search/${title}`, {headers})
    }
}
