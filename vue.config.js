// vue.config.js
// 文档：https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
    // 部署应用包时的基本 URL
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/dev/',
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',
    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
    filenameHashing: true,
    // 在 multi-page 模式下构建应用。
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Vue Demo',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
    },
    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
    lintOnSave: process.env.NODE_ENV !== 'production',
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: true,
    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
    crossorigin: undefined,
    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
    integrity: false,
    // 调整 webpack 配置
    // eslint-disable-next-line no-unused-vars
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    css: {
        // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
        requireModuleExtension: true,
        // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。
        // 当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS。提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取。
        extract: process.env.NODE_ENV === 'production',
        // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
        sourceMap: false,
        // 向 CSS 相关的 loader 传递选项。
        loaderOptions: {}
    },
    //
    devServer: {
        open: true,
        port: 8811,
        https: false,
        // 让浏览器 overlay 同时显示警告和错误
        overlay: {
            warnings: false,
            errors: true
        },
        //
        proxy: {
            "/api": {
                target: "http://localhost:8118",
                pathRewrite: {"^/api" : "/api"},
                changeOrigin: true,
                secure: false
            }
        }
    }
}
