/**
 * Created by gdchent on 2018/1/4.
 */

'use strict';

import {NavigationActions} from 'react-navigation';
import {LoginTypes, PublicTypes} from "../actiontypes/index";
import {passwordLoginApi} from "../server/ServerApi";

import {setToken, setTabShow} from "../utils/CacheUtil";
import RouteConfig from "../configs/RouteConfig";
import {queryDate} from './MineAction'

/**
 *  方法描述: 处理用户输入用户名的操作
 *  作    者: gdchent
 *  时    间: 2017-11-28
 *  参    数: 用户名
 */
export function inputUserName(userName) {
    console.log("111--" + userName)
    return {
        type: LoginTypes.INPUT_USER_NAME,
        params: userName
    }
}

/**
 *  方法描述: 处理用户输入密码的操作
 *  作    者: gdchent
 *  时    间: 2017-11-28
 *  参    数: 密码
 */
export function inputPsw(psw) {
    return {
        type: LoginTypes.INPUT_PASSWORD,
        params: psw,
    }
}

/**
 *  方法描述: 调用密码登录接口,并处理返回的数据
 *  作    者: gdchent
 *  时    间: 2017-11-28
 *  参    数:
 *      user:{
 *          "":""
 *          "":""
 *      }
 *      navigation 用于登录成功后跳转页面
 */
export function passwordLogin(params, navigation) {
    console.log('params=' + JSON.stringify(params));
    return dispatch => {
        //    调用密码登录接口  ===success
        passwordLoginApi(params, (res) => {
            //保存token
            setToken(res.Ticket)
            //下面这一步
            dispatch({
                type: LoginTypes.LOGIN,
                params: res
            })
            dispatch(queryDate())
            navigation.dispatch(loginSucess())
        })
    }
}


export function logout(navigation) {
    return dispatch => {
        setToken(null)
        setTabShow(null);
        dispatch({
            type: PublicTypes.LOGOUT,
        })
        navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: RouteConfig.PasswordLoginPage.name})
            ]
        }))
    }
}

/**
 *  方法描述: 登录成功重置路由栈,根据角色跳转页面
 *  作    者: gdchent
 *  时    间: 2017-11-28
 *  参    数:
 */
function loginSucess(res) {
    return getResetAction(RouteConfig.HomeTab.name)
}


function getResetAction(routeName) {
    return NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: routeName})
        ]
    })
    
}