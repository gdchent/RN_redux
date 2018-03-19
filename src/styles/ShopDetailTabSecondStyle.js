/**
 * Created by gdchent on 2018/1/5.
 */

import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, titleHeight, unitHeight } from '../utils/AdapterUtil'


export default shopDetailSecondStyle = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
    },
    itemLeftStyle: {

        backgroundColor: 'darkgray',
        borderWidth: unitWidth * 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    itemRightStyle: {
        height: unitWidth * 220,

    }


})