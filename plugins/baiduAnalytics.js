module.exports = function baiduAnalytics(context, options) {
    var _hmt = _hmt || [];
    return {
        name: 'baiduAnalytics',
        async loadContent(){
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?<my code>";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        }
    }
}