/**
 * Created by gdchent on 2017/5/18.
 */

import {StyleSheet} from 'react-native'
import * as Color from '../configs/Color'
import {width, height, unitWidth, unitHeight} from '../utils/AdapterUtil'


export default ApplyStateStyle = StyleSheet.create({


    //标题样式
    titleBarStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
    //容器区域====
    container: {
        flex: 1,

    },
    //上面的图片样式
    imageIconStyle: {
        width: width,
        flex: 1,
    },
    bottomViewStyle: {
        width: width,
        flex: 1,  //屏幕高度占一半
        alignItems: 'center', //次轴居中
        backgroundColor: 'white',
    },
    //按钮视图样式
    buttonViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textReturnStyle:{
        color: 'white',
        backgroundColor:'darkgray',
        width:unitWidth*360,
        borderRadius:unitWidth*5,
        height:unitWidth*120,
        textAlign:'center',
        borderRadius:unitWidth*25,
        paddingTop:unitWidth*26,
    },
    textUpdateStyle:{
        color: 'white',
        backgroundColor:Color.themeColor,
        height:unitWidth*120,
        width:unitWidth*360,
        marginLeft:unitWidth*25,
        borderRadius:unitWidth*15,
        textAlign:'center',
        paddingTop:unitWidth*26,
    },
    bottomCenterStyle:{
        flexDirection: 'row',
        alignItems:'center',
    },
    

});