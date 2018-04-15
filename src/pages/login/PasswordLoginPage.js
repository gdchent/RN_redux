/*
 * @Author: 陈涛 
 * @Date: 2018-04-15 13:08:00 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-15 17:51:52
 */
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
import { width } from '../../utils/AdapterUtil'
import { Wheel, Overlay, Label } from 'teaset';
export default class PasswordLoginPage extends Component {

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

                <View>
                    <TouchableOpacity
                        onPress={
                            () => {
                                this.setState({
                                    modalVisible: true,
                                    transparent: true,
                                });
                            }
                        }
                    >
                        <Text>显示弹窗</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>显示布局区域</Text>
                </View>

                <Modal

                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({
                            modalVisible: false,
                        })
                    }
                    }
                >
                    <View
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'darkgray' }}
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 150, backgroundColor: 'green', position: 'absolute', bottom: 0, width: width }}>
                            <TouchableOpacity

                                onPress={
                                    () => {
                                        this.setState({
                                            modalVisible: false,
                                        })
                                    }
                                }
                            >

                                <Text>关闭弹窗</Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                </Modal>

            </View>
        )
    }

    /**
     *左边打开弹窗
     */
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
     * 左边弹窗
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