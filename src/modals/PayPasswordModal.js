/**
 *  Created by majunhui on 2017/12/9
 */


'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import Modal from 'react-native-modalbox'
import {width, height, unitWidth, textSizeNormal, textSizebig} from "../utils/AdapterUtil";


import {BaseStyle, HomeStyle, NearStyle, CustomModalViewStyle} from '../styles'
import WhiteSpace from "../components/whitespace/WhiteSpace";
import * as Color from '../configs/Color'
import {selectPhoto, takePhoto} from "../utils/SelectPicUtil";

import Images from '../images';

import PasswordInput from "../components/input/PasswordInput";

export default class PayPasswordModal extends Component {
    constructor(props) {
        super(props)
    }

    open() {
        this.refs.SelectPicModal.open()
    }

    close() {
        this.refs.SelectPicModal.close()
    }

    render() {
        return (
            <Modal
                style={styles.background}
                ref={"SelectPicModal"}
                backdropPressToClose={false}
                backButtonClose={true}
                position={'center'}
                swipeToClose={false}>
                <View style={styles.block}>
                    <Text>{this.props.text || "请输入支付密码"}</Text>
                    <WhiteSpace size={30}/>
                    <PasswordInput
                        maxLength={6}
                        onChange={this.props.onChange}
                        onEnd={(text) => {
                            this.props.onEnd && this.props.onEnd(text)
                            this.props.payPasswordModalValue(text)
                            this.close()
                        }}/>
                </View>
                <TouchableOpacity
                    style={styles.close}
                    onPress={() => {
                        this.close()
                    }}>
                    <Image
                        source={Images.public.close}
                        style={{width: unitWidth * 100, height: unitWidth * 100}}
                    />
                </TouchableOpacity>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        width: unitWidth * 892,
        height: unitWidth * 492,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    block: {
        width: unitWidth * 750,
        height: unitWidth * 350,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        position: 'absolute',
        top: 0,
        right: 0,
    }
})