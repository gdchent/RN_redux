/**
 * Created by gdchent on 2017/8/04.
 */

import * as WeChat from 'react-native-wechat';
import * as QQAPI from 'react-native-qq';
import { WxAppId } from '../configs/Config'
import { logoUrl } from "../server/ApiUrl";
import { toast } from './LogUtil';

export const shareType = {
    shareWx: 'wx',
    shareQQ: 'qq',
    shareQzone: 'qzone',
    shareTimeLine: 'timeLine',
    shareTimeLine: 'timeLine'
}

const shareTitle = '千秋云购'
const shareDescription = '互联时代消费模式重新定义者'
var isWXAppInstalled = false;
export async function registWx() {
    try {
        await WeChat.registerApp(WxAppId);
        isWXAppInstalled = await WeChat.isWXAppInstalled()

    } catch (e) {
        console.log('error=');
        console.error(e);

        
    }
}

/**
 * 微信分享
 * @param {*} url 
 */
export function shareToTimeline(url) {
    // console.log(url);
    if (isWXAppInstalled) {
        console.log('installed')
        WeChat.shareToTimeline({
            type: 'news',
            title: shareTitle,
            description: shareDescription,
            mediaTagName: 'email signature',
            messageAction: undefined,
            messageExt: undefined,
            //thumbImage: logoUrl,
            webpageUrl: url
        }).then((success) => {
            console.log('success=============')
            console.log(success)
        }).then((error) => {
            console.log('error=============')
            console.log(error)
        });
    } else {
        toast('请先安装微信')
    }

    console.log(url);
}

export function shareToWx(url) {

    console.log("分享地址" + url);
    WeChat.shareToSession({
        type: 'news',
        title: shareTitle,
        description: shareDescription,
        // mediaTagName: 'email signature',
        // messageAction: undefined,
        // messageExt: undefined,
        //thumbImage: logoUrl,
        webpageUrl: url
    });

}

export function shareToQQ(url) {
    console.log('shareToQQ222')
    QQAPI.shareToQQ({
        type: 'news',
        title: shareTitle,
        description: shareDescription,
        webpageUrl: url,
        imageUrl: logoUrl
    });

}

export function shareToQzone(url) {
    QQAPI.shareToQzone({
        type: 'news',
        title: shareTitle,
        description: shareDescription,
        webpageUrl: url,
        imageUrl: logoUrl
    });

}




