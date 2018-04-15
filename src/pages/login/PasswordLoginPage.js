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
    Button,
    ToastAndroid,
    Modal,
} from 'react-native';
import { Wheel, Overlay, Label } from 'teaset';
export default class PasswordLoginPage extends Component {


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

    /**
     * 构造函数
     * @param {} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            animationType: 'slide',
            modalVisible: false,
            transparent: false,
        }
    }
    
    /**
     * 渲染视图
     */
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={
                        () => {
                            this.setState({ 
                                modalVisible: visible, 
                                transparent: true,
                             });
                        }
                    }
                >
                    <Text>显示弹窗</Text>
                </TouchableOpacity>
                <Modal
                    style={{ width: 200, height: 200, backgroundColor: 'red' }}
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this._setModalVisible(false) }}
                >
                    {/* <Wheel
                        style={{ height: 200, width: 100 }}
                        itemStyle={{ textAlign: 'center' }}
                        defaultIndex={this.jsonData.length - 1}
                        items={this.jsonData.map((item, index) => {
                            return (
                                <Text style={{ color: 'red', backgroundColor: 'blue' }}>{item.name}</Text>
                            )
                        })}

                    /> */}

                    <Text>哥是弹窗</Text>
                </Modal>



            </View>
        )
    }





    _onPressOpen = () => {

        //console.log(overlayView);
        let overlayView = (
            <Overlay.View
                style={{ alignItems: 'center', justifyContent: 'center' }}
                modal={true}
                overlayOpacity={0}
                ref={v => this.overlayView = v}
            >
                <View style={{ backgroundColor: '#333', padding: 40, borderRadius: 15, alignItems: 'center' }}>
                    <Label style={{ color: '#eee' }} size='xl' text='Overlay' />
                    <View style={{ height: 20 }} />

                    <TouchableOpacity
                        onPress={
                            () => {
                                this.overlayView && this.overlayView.close()
                            }
                        }
                    >
                        <Text>
                            close
                       </Text>
                    </TouchableOpacity>


                </View>
            </Overlay.View>
        );
        Overlay.show(overlayView)
    }

    /**
     * 
     */
    _onPressLeft = () => {

        let overlayView = (
            <Overlay.PullView side='left' modal={false}>
                <View style={{ backgroundColor: '#fff', minWidth: 300, minHeight: 260, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>左边弹窗</Text>
                </View>
            </Overlay.PullView>
        );
        Overlay.show(overlayView);
    }
}