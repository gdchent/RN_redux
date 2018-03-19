/**
 * Created by gdchent on 2018/1/2.
 */

import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, unitHeight } from '../utils/AdapterUtil'

/**
 *  千秋币充值的样式
 */
export default QqReturnStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Color.baseBackground,
        alignItems: 'center'
    },

    LineViewContainerRow: {
        width: width,
        paddingLeft: unitWidth * 50,
        flexDirection: 'row',
        backgroundColor: 'white',

    },

    userViewStyle: {
        width: unitWidth * 230,
        height: unitWidth * 230,
        justifyContent: 'center',
        alignItems: 'center',
        //borderColor: 'blue',
        //borderWidth: unitWidth * 10,
        borderRadius: unitWidth * 115,
    },
    userIcon: {
        width: unitWidth * 200,
        height: unitWidth * 200,
        borderRadius: unitWidth * 100,
        borderWidth: 1,
        borderColor: 'darkgray',
        //backgroundColor:'red',
    },
    rightViewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    lineViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: unitWidth * 45,
        paddingRight: unitWidth * 45,
        marginTop: unitWidth * 20,


    },

    //这个是垂直 摆
    itemViewLeft: {

    },

    //水平反方向摆放
    itemViewRight: {

        flexDirection: 'row',
    },

    textColor: {
        color: 'darkgray',
    },


    //中间视图 部分 容器
    viewCenterContainerStyle: {
        backgroundColor: 'white',
    },
    centerView: {
        paddingLeft: unitWidth * 50,

    },
    centerTitleView: {
        width: width,
        height: unitWidth * 100,
        backgroundColor: 'red',
    },
    centerTitleText: {
        marginLeft: unitWidth * 15,

    },

    //输入内容视图
    inputcontainerViewStyle: {
        width: width,
        //alignItems: 'center',

    },

    /**
     * 输入视图
     */
    inputViewStyle: {
        width: width * 0.79,
        paddingLeft: unitWidth * 100,
        borderWidth: unitWidth * 1,
        borderRadius: unitWidth * 10,
       
    },

    /**
     * 设置左边距
     */
    paddingView: {
        paddingLeft: unitWidth * 60,

    },
    //警告显示
    viewShowStyle: {
        paddingLeft: unitWidth * 50,
    },
    viewBottomStyle: {
        width: width,
        paddingLeft: unitWidth * 60,
        paddingRight: unitWidth * 60,
        justifyContent: 'center',
        alignItems: 'center',
    },


    //文本样式
    bottomTextViewStyle: {
        width: width * 0.8,
        height: unitWidth * 150,
        backgroundColor: '#e60012',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: unitWidth * 15,
    },
    /**
     * 底部文本样式   ===确定回购
     */
    bottomTextStyle: {
        textAlign: 'center',
        color: 'white',
    },


    produceContentStyle: {
        paddingLeft: unitWidth * 30,
    }


})