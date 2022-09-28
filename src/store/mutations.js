export default {
    setNews (state, data) {
        state.news = data
    },

    setMovies (state, data) {
        state.movies = data
    },

    setTvs (state, data) {
        state.tvs = data
    },

    setSeries (state, data) {
        state.series = data
    },

    setSelectedContent (state, data) {
        state.selected_content = data
    },

    toggleLoading (state, toggle) {
        state.loading = toggle
    },

    toggleSigninWindow (state, toggle) {
        state.signin_window = toggle
    },

    toggleLockScroll (state, toggle) {
        state.lock_scroll = toggle
    }
}
