"use strict"

import React, { Component } from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
import BaseNavigator from './pages/BaseNavigator';
import { getToken, getUserInfo } from "./utils/CacheUtil";
import PayPasswordModal from "./modals/PayPasswordModal";
//import {GetVersionsInfo} from "./server/ServerApi";

//注册store
const store = configureStore();

//根组件类型
export default class Root extends Component {

    //构造器
    constructor(props) {
        super(props);
        global.userInfo = {} ; //用户类型
        //获取token 
        getToken(() => {
            this.setState({
                readToken: true
            })
        });
        getUserInfo(); //获取用户信息数据
        
    }


    /** 
     * 挂载组件
    */
    componentDidMount() {
        // GetVersionsInfo((res) => {
        //     console.log("GetVersionsInfo===============================")
        //     global.versionInfo = res
        // });

    }

    /**
     * 状态
     */
    state = {
        readToken: false,
    }

    /**
     * 渲染视图
     */
    render() {
        return (
            <Provider store={store}>
                {this.state.readToken ? (
                    <BaseNavigator />
                ) : (<View></View>)}

            </Provider>
        )
    }

}