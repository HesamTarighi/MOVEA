module.exports = {
    devServer: {
        proxy: {
            '/api/*': {
                target: 'https://imdbapi.cyclic.app',
                changeOrigin: true
            }
        }
    }
}