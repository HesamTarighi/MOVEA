export default {
    news(state) {
        if (state.movies != '') {
            return state.movies.filter(movie => movie.release == '2022')
        } else return ''
    }
}
