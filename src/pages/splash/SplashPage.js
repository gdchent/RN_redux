'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
} from 'react-native';

import Images from '../../images'
import { width, height, unitWidth, unitHeight } from '../../utils/AdapterUtil';


import { BaseStyle, HomeStyle, NearStyle, ShopDetailStyle } from '../../styles'  //样式
import RouteConfig from "../../configs/RouteConfig";
import WhiteSpace from "../../components/whitespace/WhiteSpace"; 

import { Carousel } from 'antd-mobile'; 
import BasePage from "../BasePage";  
import {NavigationActions} from 'react-navigation';


/**
 * 商家信息页面
 */

export default class SplashPage extends BasePage {

    //构造器
    constructor(props) {
        //调用父类方法 
        super(props);
        //刷新状态
        this.state = {

        }
    }

    //必须实现render
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#e60012' }}>

                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

                    <Image source={Images.splash.logo_start} style={{ width: width * 0.5, height: width * 0.5, backgroundColor: '#e60012' }} />
                  
                    <Image  source={Images.splash.splash_text} style={{width:width*0.5,height:width*0.1}}/>
                    <WhiteSpace  size={30}/>
                    <Text style={{ color: 'white' }}>互联网时代消费模式重新定义者</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>一省钱云购</Text>
                    <WhiteSpace size={150}  horizontal={true}/>
                    <Text style={{ color: 'white' }}>尽在千秋一</Text>
                </View>
                <WhiteSpace size={100} /> */}
               
                <Image  source={Images.splash.splash_start_page} style={{flex:1,width:width,height:height}}/>

            </View>
        )
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => { 
                console.log('把一个定时器的引用挂在this上');
                // this.props.navigation.navigate(RouteConfig.PasswordLoginPage.name,{});
                // 重置路由栈
                this.props. navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: RouteConfig.PasswordLoginPage.name})
                    ]
                }))
             },
            3000
        );
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
