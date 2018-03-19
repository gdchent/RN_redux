import { StyleSheet } from 'react-native'
import { width, height, unitWidth } from '../utils/AdapterUtil'
import * as Color from '../configs/Color';



/**
 * 申请商家信息样式
 */
export default ApplyBusinessMessageStyle = StyleSheet.create({

    container: {
        flex: 1,
    },

    longButtonViewStyle: {
        width: width,
        alignItems: 'center',

    },
    itemEditViewStyle: {
        flexDirection:'row',
        width: width,
        marginLeft:unitWidth*30,
        alignItems: 'center',

    },
    textCorlor: {
        color: Color.themeColor,

    },
    lineViewStyle: {
        width: width,
        height: unitWidth * 5,

    }

})