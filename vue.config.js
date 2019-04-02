// vue.config.js
module.exports = {
    // 选项...
    publicPath:'/', // 根路径
    outputDir:'dist', // 构建输出目录
    assetsDir:'asserts', // 静态资源目录（js css img）
    lintOnSave:false, // 是否开启eslint保存检测，有效值 true || false || error
    devServer: {
        open: false, // 启动项目是否自动弹出页面
        host: 'localhost', // 主机名
        port: 8280, // 端口号
        https: false, //https
        hotOnly:false, // 热更新 默认关闭
        // 设置代理
        proxy: {
            '/api': {
                target: 'http://shandongbi.wancaitong.com',
                changeOrigin: true,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                ws: true,// 是否启用websockets
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}