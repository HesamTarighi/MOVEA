export default {
    methods: {
        responsive ({min, max}, callback) {
            if (max) {
                if (window.innerWidth <= max) callback()
            }
            if (min) {
                if (window.innerWidth >= min) callback()
            }
        }
    }
}
