module.exports = function baiduAnalytics(context, options) {
    return {
        name: 'baiduAnalytics',
        async loadContent(){
            var _hmt = _hmt || [];
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?<my code>";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        },
    };
};
