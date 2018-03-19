/**
 * Created by gdchent on 2018/1/30.
 */
import {StyleSheet} from 'react-native'
import * as Color from '../configs/Color'
import {width, height, unitWidth} from '../utils/AdapterUtil'


export default ShareStyle = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    touch: {
        flex: 1,
    },
    toptop: {
        width: width,
        height: unitWidth * 160,
        backgroundColor: Color.themeColor
    },

    top: {
        width: width,
        height: width * 231 / 1242,
        resizeMode: 'stretch',
    },

    headBlock: {
        width: unitWidth * 300,
        height: unitWidth * 300,
        marginTop: -unitWidth * 240,
        borderRadius: unitWidth * 200,
        alignItems: 'center',
        justifyContent: 'center'
    },

    head: {
        width: unitWidth * 240,
        height: unitWidth * 240,
        borderRadius: unitWidth * 550,
        resizeMode: 'cover',
    },

    logo: {
        width: width - unitWidth * 400,
        height: unitWidth * 100,
        resizeMode: 'contain',
        // backgroundColor:'red',
        marginTop: unitWidth * 20
    },

    code: {
        width: unitWidth * 550,
        height: unitWidth * 550,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: unitWidth * 10,
        borderColor: '#fbbcbc',
        marginTop: unitWidth * 165
    },
    qcCodeLogo: {
        width: unitWidth * 80,
        height: unitWidth * 80,
        position: 'absolute',
        resizeMode: 'stretch'
        // backgroundColor: 'red'
    },

    left: {
        position: 'absolute',
        left: 0,
        top: unitWidth * 1575,
        width: (width - (unitWidth * 550)) / 2,
        height: unitWidth * 200,
        resizeMode: 'stretch'
    },
    right: {
        position: 'absolute',
        right: 0,
        top: unitWidth * 830,
        width: unitWidth * 540,
        height: unitWidth * 300,
        resizeMode: 'stretch'
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: unitWidth * 220,
        resizeMode: 'stretch'
    },

    clickLine: {
        position: 'absolute',
        bottom: unitWidth * 220,
        width: width - (unitWidth * 300),
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    clickLineLeft: {
        flex: 1,
        height: unitWidth * 10,
        backgroundColor: Color.themeColor
    },

    text: {
        color: Color.themeColor
    },
    name: {
        fontSize: unitWidth * 45
    },

    phone: {
        fontSize: unitWidth * 40
    },

});