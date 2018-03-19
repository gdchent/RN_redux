/**
 * Created by gdchent on 2018/1/20.
 */

import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as Color from '../configs/Color'
import {width, height, unitWidth, titleHeight, statusBarHeight, unitHeight} from '../utils/AdapterUtil'

export default MerchantCodeStyle = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    top: {
        width: width,
        height: width * 0.19,
        resizeMode: 'stretch'
    },
    scan: {
        position: 'absolute',
        width: unitWidth * 700,
        height: unitWidth * 450,
        top: statusBarHeight + titleHeight + width * 0.12,
        resizeMode: 'contain',
    },
    bottom: {
        width: width,
        height: width * 0.33,
        resizeMode: 'stretch'
    },
    codeBlock: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    codeBg: {
        width: unitWidth * 700,
        height: unitWidth * 700,
        resizeMode: 'stretch'
    },
    code: {
        position: 'absolute',
        width: unitWidth * 640,
        height: unitWidth * 640,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    codeLogoBlock: {
        position: 'absolute',
        width: unitWidth * 100,
        height: unitWidth * 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    codeLogo: {
        width: unitWidth * 90,
        height: unitWidth * 90,
    },
    title: {
        color: 'black',
        fontSize: unitWidth * 50
    }
})
 
 