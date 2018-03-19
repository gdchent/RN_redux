/**
 * Created by gdchent on 2018/1/5.
 */

import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, titleHeight } from '../utils/AdapterUtil'

/**
 *  我的营业额  
 */
export default MineTurnoverStyle = StyleSheet.create({

    //容器
    container: {
       backgroundColor:'darkgray',
       flex:1,
    },
    //水平两边摆动
    headLineView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: unitWidth * 45,
        paddingRight: unitWidth * 45,
        marginTop: unitWidth * 20,
        borderWidth: unitWidth * 1,
        backgroundColor: 'darkgray',
    },
    //这个是垂直 摆
    headViewLeft: {
        paddingLeft: unitWidth * 50,
    },

    //水平反方向摆放
    headViewRight: {
        paddingRight: unitWidth * 50,
    },
    //水平的每一项 
    itemLineView: {
        width:width-unitWidth*80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: unitWidth * 45,
        paddingRight: unitWidth * 45,
        marginTop: unitWidth * 20,
        //borderWidth: unitWidth * 1,
        borderRadius:unitWidth*30,
        backgroundColor:'white',
    },
    //左边 
    itemListLeft: {
        paddingLeft: unitWidth * 50,
    },
    //项的右边 
    itemListRight: {
        paddingRight: unitWidth * 50,
        justifyContent: 'center',
    },

    //字体白色
    textColor: {
        color: 'white',
    },


})