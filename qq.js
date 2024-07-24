
        /**适用于PC和任何手机跳转qq添加好友界面的实例**/
        const uag = navigator.userAgent;
        const ipad = uag.match(/(iPad).*OS\s([\d_]+)/),
        isMqVer = !ipad && uag.match(/(iPhone\sOS)\s([\d_]+)/) || uag.match(/(Android)\s+([\d.]+)/);
        if(isMqVer){
            //手机端自动打开弹出 包括苹果ios、安卓等均可弹出
            location.href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=3436505318&card_type=person&source=sharecard";
        }else{
            //pc浏览器默认打开弹出
            location.href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=3436505318";
        }
    