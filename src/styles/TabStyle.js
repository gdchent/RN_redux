/**
 *  Created by gdchent on 2017/10/9
 */

import {StyleSheet} from 'react-native'
import {width, height, unitWidth} from '../utils/AdapterUtil'
import * as Color from '../configs/Color'

export default TabStyle = StyleSheet.create({
    background: {
        height: unitWidth * 170,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    icon: {
        width: unitWidth * 60,
        height: unitWidth * 60,
        resizeMode: 'contain',
    },
    titleStyle: {
        color: '#494949',
        fontSize: unitWidth * 35
    },
    titleSelectStyle: {
        color: Color.themeColor,
        fontSize: unitWidth * 35
    },
})

