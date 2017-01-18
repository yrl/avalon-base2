/**
 * Created by vengean on 15/10/13.
 */
fis.match('::packager', {
    spriter: fis.plugin('csssprites'),
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        useInlineMap: true
    })
});

fis.match('*.{js,css,png,jpg,gif,jpeg,scss}', {
    useHash: true
});
// hash

fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});
// 对css里图片雪碧图

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
    //isMod: true
});
// 内置压缩js文件

fis.match('*.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass')
});
//scss-》css


fis.match('*.{css,node-sass}', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});
// 内置压缩样式

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});
// 内置压缩png图片

fis.media('debug').match('*.{js,css,png,scss}', {
    useHash: false,
    useSprite: false,
    optimizer: null
});

fis.hook('amd', {
    baseUrl:'/',
    paths: {
        jquery: 'statics/lib/jquery-1.11.3',
        avalon: "statics/lib/avalon.shim",
        text: 'statics/lib/text',
        domReady: 'statics/lib/domReady',
        css: 'statics/lib/css'
    },
    shim: {
        jquery: {
            exports: "jQuery"
        },
        avalon: {
            exports: "avalon"
        }
    },
    globalAsyncAsSync: true
});