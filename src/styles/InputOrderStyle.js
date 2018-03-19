/**
 *  Created by gdchent on 2017/10/9
 */

import { StyleSheet } from 'react-native'
import { width, height, unitWidth } from '../utils/AdapterUtil'
import * as Color from '../configs/Color'

export default InputOrderStyle = StyleSheet.create({
    userName: {
        width: width,
        height: unitWidth * 100,
        alignItems: 'flex-end',
        paddingRight: unitWidth * 60,
        justifyContent: 'center',
        backgroundColor: Color.gray
    },
    hintText: {
        width: width,
        height: unitWidth * 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderBottomColor: Color.gray,
        borderBottomWidth: StyleSheet.hairlineWidth * 2
    },
    picBlock: {
        width: width,
        backgroundColor: 'white',
        height: unitWidth * 400,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: unitWidth * 50
    },
    shuoming: {
        flexDirection: 'row',
        width: width,
        height:unitWidth*150,
        // backgroundColor: 'white',
        // paddingLeft: unitWidth * 40,
        // paddingRight: unitWidth * 40,
        paddingTop: unitWidth * 20,
        paddingBottom: unitWidth * 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'white',
    },
    pay: {
        width: width * 0.9,
        backgroundColor: 'white',
        marginLeft: unitWidth * 40,
        //alignItems:'center'
    },

    successBg: {
        flex: 1,
        backgroundColor:'red',
        alignItems: 'center'
    },

    image: {
        width: unitWidth * 300,
        height: unitWidth * 400,
        // backgroundColor:'blue',
        resizeMode: 'contain'
    },

    code: {
        width: unitWidth * 720,
        height: unitWidth * 720,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    largeText: {
        color: 'white',
        fontSize: unitWidth * 100
    },
    smallText: {
        color: 'white',
        fontSize: unitWidth * 50
    },
})

