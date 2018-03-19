/**
 * Created by gdchent on 2018/1/5.
 */

import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, titleHeight, statusBarHeight } from '../utils/AdapterUtil'

export default MineStyle = StyleSheet.create({
    top: {
        width: width,
        height: unitWidth * 500,
        backgroundColor: Color.themeColor,
        justifyContent: 'flex-end'
    },
    userCenter: {
        flexDirection: 'row',
        width: width,
        height: unitWidth * 300,
        backgroundColor: Color.themeColor,
        alignItems: 'center',
        paddingLeft: unitWidth * 40
    },
    setting: {
        position: 'absolute',
        top: statusBarHeight + unitWidth * 40,
        right: unitWidth * 40,
    },
    settingIcon: {
        width: unitWidth * 80,
        height: unitWidth * 80,
        resizeMode: 'stretch'
    },
    headbg: {
        width: unitWidth * 200,
        height: unitWidth * 200,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#95fbc1',
        borderRadius: unitWidth * 30,
        marginRight: unitWidth * 40
    },
    headPic: {
        width: unitWidth * 180,
        height: unitWidth * 180,
        // borderRadius: unitWidth * 50,
        marginLeft: unitWidth * 25,
        marginRight: unitWidth * 25,
        // backgroundColor: Color.listItemBorder,
        resizeMode: 'cover',
        // borderWidth: unitWidth * 3,  #f9a2a2
         borderColor: '#f9a2a2',
         borderWidth:unitWidth*10,
        borderRadius: unitWidth * 20,
        // backgroundColor: 'blue'
    },
    infoBlock: {
        flexDirection: 'column',
        flex: 1
    },
    listItemArrow: {
        width: unitWidth * 28,
        height: unitWidth * 40,
        marginRight: unitWidth * 30,

    },
    functionBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: unitWidth * 40,
        width: width,
        height: unitWidth * 200,
        backgroundColor: 'white',
    },
    functionIcon: {
        width: unitWidth * 100,
        height: unitWidth * 100,
        resizeMode: 'contain'
    },
    functionTitle: {
        color: 'black',
        fontSize: unitWidth * 40
    },
    itemLine: {
        width: width,
        height: StyleSheet.hairlineWidth * 2,
        backgroundColor: Color.gray,
        marginLeft: unitWidth * 120
    },
    qqinfo: {
        flexDirection: 'row',
        width: width,
        height: unitWidth * 200,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    qqinfoLine: {
        width: StyleSheet.hairlineWidth * 2,
        height: unitWidth * 100,
        backgroundColor: 'gray'
    },
    qqInfoItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    myShopInfo: {
        width: width,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: unitWidth * 30,
        paddingBottom: unitWidth * 60
    },
    myShopInfoManage: {
        position: 'absolute',
        bottom: unitWidth * 10,
        right: unitWidth * 100,
        backgroundColor: 'transparent'
    },

    //设置字体颜色 
    infoText: {
        color: 'white',
    }
})