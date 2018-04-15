/*
 * @Author: 陈涛 
 * @Date: 2018-04-15 13:14:28 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-15 14:28:50
 */
'use strict';
import React, { Component,PureComponent } from 'react';
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
} from 'react-native';
import { Wheel, Overlay, Label } from 'teaset';
import RouteConfig from "../../configs/RouteConfig";
class WheelViewPage extends PureComponent{

    /**
     * 滚轮数据
     */
    jsonData = [
        { 'name': 'name1' },
        { 'name': 'name2' },
        { 'name': 'name3' },
        { 'name': 'name4' },
        { 'name': 'name5' },
        { 'name': 'name3' },
        { 'name': 'name4' },
        { 'name': 'name5' },
        { 'name': 'name3' },
        { 'name': 'name4' },
        { 'name': 'name5' },
        { 'name': 'name3' },
        { 'name': 'name4' },
        { 'name': 'name5' },
    ]

    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        return (
           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>


                  {/* teaset的滚轮 */}
                  <Wheel
                        style={{ height: 200, width: 100 }}
                        itemStyle={{ textAlign: 'center' }}
                        defaultIndex={this.jsonData.length - 1}
                        items={this.jsonData.map((item, index) => {
                            return (
                                <Text style={{ color: 'red', backgroundColor: 'blue' }}>{item.name}</Text>
                            )
                        })}
                    />
           </View>
        )
    }


    
}
export default WheelViewPage;