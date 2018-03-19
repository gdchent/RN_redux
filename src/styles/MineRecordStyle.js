/**
 * Created by gdchent on 2017/5/18.
 */

import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as Color from '../configs/Color'
import {width, height, unitWidth, titleHeight, statusBarHeight, unitHeight} from '../utils/AdapterUtil'




//回购记录样式=======跟  我的消费 样式一样
export default MineRecordStyle = StyleSheet.create({
   

    container:{
        flex:1,
    },

    //样式视图
    itemView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: unitWidth * 45,
        paddingRight: unitWidth * 45,
        //marginTop: unitWidth * 20,
        borderWidth: unitWidth * 1,
        borderColor:'darkgray',
        height:unitWidth*200,
        alignItems:'center',

    },
    
     //这个是垂直 摆 
    itemViewLeft:{
        paddingLeft: unitWidth * 50,
    },

    //水平反方向摆放
    itemViewRight: {
        flexDirection:'row',
        paddingRight: unitWidth * 50,
        justifyContent: 'center',
    },

    textSize:{
        fontSize:18,
    }

    
});