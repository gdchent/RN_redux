/**
 * Created by gdchent on 2018/1/5.
 */

import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, titleHeight, statusBarHeight } from '../utils/AdapterUtil'

//商家中心
export default MerchantCenterStyle = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#ededed'
    },
    //头部布局
    headBody: {
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor:Color.themeColor
    },
    //头部店铺图标
    headerShopImg: {
        width: 70,
        height: 70,
        backgroundColor: 'blue',
        marginRight: 10
    },
    //头部店铺名称
    headText: {
        flex: 1,
        fontSize: 18,
        color: 'white'
    },
    //头部小图标布局
    headIconLayout: {
        flexDirection: 'row',
        flex: 1
    },
    //头部小图标
    headSmallIcon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    centerLayout: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 10
    },
    centerItem: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
    },
    centerText: {
        fontSize: 11,
        textAlign: 'center'
    },
    centerNum: {
        fontSize: 13,
        color: 'black',
        textAlign: 'center'
    },
    divide: {
        width: 1,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#ededed'
    },
    bottomLayout: {
        flexDirection: 'row',
    },

    icon: {
        width: 50,
        height: 50
    }


})