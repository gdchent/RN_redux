/**
 *  Created by gdchent on 2017/10/13
 *
 * route配置文件,所有页面都必须在这里进行配置,否则无法打开
 * 配置规则如下:
 *
 *  MyExample:{                     //route名称,可自由选取
 *      screen: NewExample,         //对应的页面
 *  }
 */

import SplashPage from '../pages/splash/SplashPage'; //欢迎页
import PasswordLoginPage from '../pages/login/PasswordLoginPage'; //欢迎页
export default RouteConfig = {
    //账号密码登录
    SplashPage: {
        screen: SplashPage,
        name: 'SplashPage',
    },
    PasswordLoginPage:{
        screen:PasswordLoginPage,
        name:'PasswordLoginPage',
    }
 
}