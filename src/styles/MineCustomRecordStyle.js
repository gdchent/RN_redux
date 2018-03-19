import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, titleHeight } from '../utils/AdapterUtil'





/**
 * 我的qq币样式  
 */
export default MineCustomRecordStyle = StyleSheet.create({

    //头部视图
    headLineView: {
        width:width,
        height: unitWidth * 250,
        backgroundColor: '#e60012',
        alignItems: 'center',
        justifyContent:'center',
    },

    itemLineView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: unitWidth * 45,
        paddingRight: unitWidth * 45,
        marginTop: unitWidth * 20,
        borderWidth: unitWidth * 1,
    },
    itemListLeft: {
        paddingLeft: unitWidth * 50,
    },
    itemListRight: {
        paddingRight: unitWidth * 50,
        justifyContent: 'center',
    },

    //字体白色
    textColor: {
        color: 'white',
    }
})