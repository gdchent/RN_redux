/*
 * @Author: 陈涛 
 * @Date: 2018-04-15 13:17:58 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-15 13:42:55
 */
import React, { Component, PureComponent } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
    Button,
    ToastAndroid,
    Modal,
    Dimensions,
} from 'react-native';
import { Wheel, Overlay, Label } from 'teaset';
import RouteConfig from "../../configs/RouteConfig";

export const width = Dimensions.get('window').width;
class TestDemo extends PureComponent {


    /**
     * 渲染视图
     */
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>

                <View style={{flex:1,width:width}}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                navigation.navigate(RouteConfig.PasswordLoginPage.name)
                            }
                        }
                    >
                        <Text>去登录页</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:3,width:width,backgroundColor:'red'}}></View>
                <View style={{flex:1,width:width}}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                navigation.navigate(RouteConfig.WheelViewPage.name)
                            }
                        }
                    >
                        <Text>去滚轮页</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

export default TestDemo;