/**
 * Created by gdchent on 2018/1/5.
 */

import {StyleSheet, Platform} from 'react-native';
import * as Color from '../configs/Color';
import {width, height, unitWidth, titleHeight, statusBarHeight} from '../utils/AdapterUtil'

export default RealNameVerifyStyle = StyleSheet.create({
    passBlock: {
        width: width,
        padding: unitWidth * 50,
        backgroundColor: 'white',
        alignItems:'center',
        
    },
    picBlock: {
        width: width,
        paddingLeft: unitWidth * 50,
        paddingRight: unitWidth * 50,
        backgroundColor: 'white'
    },
    selectBlock: {
        flexDirection: 'row',
        height: unitWidth * 100,
        width: unitWidth * 250,
        borderColor: Color.gray,
        borderWidth: StyleSheet.hairlineWidth * 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectItem: {
        width: unitWidth * 250,
        height: unitWidth * 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaDrowdowmStyle: {
        width: unitWidth * 250,
        height: unitWidth * 120,
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
        // justifyContent: 'center',
        // backgroundColor: 'red'
    },
    areaDrowdowmView: {
        width: unitWidth * 250,
        height: unitWidth * 120,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red'
    },
    areaDowmText: {
        backgroundColor: 'transparent',
        // backgroundColor: 'blue'
    },
    areaDrowDownImage: {
        width: unitWidth * 50,
        height: unitWidth * 50,
        resizeMode: 'contain',
        // backgroundColor: 'red'
    },
    line: {
        marginLeft: unitWidth * 50,
        width: width - unitWidth * 50,
        backgroundColor: Color.gray,
        height: StyleSheet.hairlineWidth
    },

    bankDrowdowmBlock:{
        flexDirection: 'row',
        height: unitWidth * 100,
        width: unitWidth * 700,
        borderColor: Color.gray,
        borderWidth: StyleSheet.hairlineWidth * 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bankDrowdowmView: {
        width: unitWidth * 700,
        height: unitWidth * 120,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red'
    },
    bankSelectItem: {
        width: unitWidth * 700,
        height: unitWidth * 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bankDrowdowmStyle:{
        width: unitWidth * 700,
        height: unitWidth * 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
})