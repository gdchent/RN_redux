/**
 * Created by gdchent on 2018/1/5.
 */

import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, titleHeight } from '../utils/AdapterUtil'

/**
 *  我的千秋豆样式
 */
export default MineQqDouStyle = StyleSheet.create({

    //容器
    container: {},
    //水平两边摆动
    headLineView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: unitWidth * 45,
        paddingRight: unitWidth * 45,
        //marginTop: unitWidth * 20,
        borderBottomWidth: unitWidth * 1,
        borderColor:'#eeeeee',
        height:unitWidth*200,
        alignItems:'center',
        backgroundColor:Color.themeColor,
        
    },
    //这个是垂直 摆
    headViewLeft: {
        justifyContent:'center',
        paddingLeft: unitWidth * 50,
    },

    //水平反方向摆放
    headViewRight: {
        justifyContent:'center',
        paddingRight: unitWidth * 50,
        paddingLeft:unitWidth*15,
    },
    //
    rowRightView:{
        flexDirection:'row-reverse',

    },
    itemLineView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: unitWidth * 45,
        paddingRight: unitWidth * 45,
        //marginTop: unitWidth * 20,
        borderWidth: unitWidth * 1,
        borderColor:'#eeeeee',
        height:unitWidth*200,
        alignItems:'center',
        backgroundColor:'white',
    },
    itemListLeft: {
        paddingLeft: unitWidth * 50,
    },
    itemListRight: {
        paddingRight: unitWidth * 50,
        justifyContent: 'center',
    },

    textSize:{
        fontSize:18,
        color:'black',
    },

    textColor:{
        color:'white',
    }

    
})