const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        ['/auth/google', '/api/**', '/client/**'],
        createProxyMiddleware({
            target: 'http://localhost:5000',
            // changeOrigin: true,
        })
    );
};