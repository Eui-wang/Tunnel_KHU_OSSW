const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
<<<<<<< HEAD
        createProxyMiddleware('/api',{ 
=======
        createProxyMiddleware('/api',{
>>>>>>> board
            target: 'http://localhost:3001',
            changeOrigin: true,
        })
    );
};