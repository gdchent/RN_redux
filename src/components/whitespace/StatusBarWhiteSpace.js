/**
 * Created by gdchent on 2018/1/2.
 */

'use strict';

import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import {statusBarHeight, width} from "../../utils/AdapterUtil";

/**
 * 状态栏占位组件,
 */
export default class StatusBarWhiteSpace extends Component {

    render() {
        return (
            <View style={{width: width, height: statusBarHeight, backgroundColor: 'transparent'}}/>
        )
    }
}