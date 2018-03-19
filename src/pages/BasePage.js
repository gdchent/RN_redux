/**
 * Created by gdchent on 2018/1/28.
 */

/**
 * 所有的页面继承BasePage.对navigation做全局保存.
 * 以便进行全局页面操作
 */

'use strict';

import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {logout} from "../utils/CacheUtil";
import {toast} from "../utils/LogUtil";
import RouteConfig from "../configs/RouteConfig";

/** 
 * 
 *  基本页面  
*/
export default class BasePage extends Component {
    constructor(props) {
        super(props)
        global.reLogin = this.reLogin.bind(this)
    }

    /**
     * 重新登录,用于服务器返回该账号没有登录时进入登录页面
     */
    reLogin() {
        logout()
        toast("当前用户未登录")
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: RouteConfig.PasswordLoginPage.name})
            ]
        }))
    }
}
 