module.exports = {
    publicPath:'./',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://stzb.cbg.163.com',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}