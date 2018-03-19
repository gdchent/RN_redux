/**
 * Created by gdchent on 2018/1/2.
 */

import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, unitHeight } from '../utils/AdapterUtil'


/**
 *  千秋币回购详情样式
 */
export default QqReturnDetailStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Color.baseBackground,
        alignItems: 'center'
    },
    lineFirstContainer: {
        flex: 1,
        width: width,
       // borderBottomWidth: unitWidth * 3,
        justifyContent:'center',
        alignItems: "center", //水平居中

        
    },
    //
    lineFirstUserViewStyle: {
        flexDirection: 'row',

    },
    //用户头像 
    lineFirstUserIconStyle: {
        width: unitWidth * 80,
        height: unitWidth * 80,

    },
    lineSecondContainer: {
        flex: 1,
        width: width,
       // borderBottomWidth: unitWidth * 3,
        justifyContent:'center',
        paddingLeft: unitWidth*100,
        paddingRight: unitWidth*100,
    },
    lineSecondUserStateStyle: {
        flexDirection: 'row',
        paddingLeft: unitWidth * 50,
        justifyContent:'space-between',
        alignItems:'center',
        //borderWidth:1,

    },
    //水平方向样式
    lineSecondRowStyle: {
        flexDirection: 'row',
        marginLeft:unitWidth*40,
    },
    rightViewStyle:{
        flex:1,

    },
    //提交状态样式
    submitStateStyle: {
        width: unitWidth * 80,
        height: unitWidth * 80,
    },
    //第三行容器样式
    lineThirdContainer: {
        flex: 2,
        width: width,
        //borderBottomWidth: unitWidth * 3,
        paddingLeft: unitWidth*100,
        paddingRight:unitWidth*200,
    },
    //水平视图
    lineThirdRowView:{
        flexDirection:'row',
        justifyContent:'space-between',

    }

})