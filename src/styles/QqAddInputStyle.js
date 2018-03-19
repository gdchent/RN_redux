/**
 * Created by gdchent on 2018/1/2.
 */

import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, unitHeight } from '../utils/AdapterUtil'

export default RegistLoginStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Color.baseBackground,
        alignItems: 'center'
    },
    logo: {
        width: unitWidth * 220,
        height: unitWidth * 220,
        resizeMode: 'stretch'
    },
    function: {
        width: width - unitWidth * 250,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    LineViewInputContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        // borderWidth: 1,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        //paddingLeft: 15,

        backgroundColor: 'white',
    },
    // 项的视图容器
    LineViewContainer: {
        // width:width,
        // height:unitHeight*200,
        justifyContent: 'center',
        borderRadius: 5,
        // borderWidth: 1,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        paddingLeft: 15,

        backgroundColor: 'white',


    },
    photoView: {
        // width: 100,
        // height: 100,
        // borderWidth: 1,
        // borderStyle: 'dashed',
        // borderColor: '#e60012',
    },
    photoIcon: {
        width: 98,
        height: 98,
    },
    // 项的视图容器
    LineViewContainerRow: {
        // width:width,
        // height:unitHeight*200,
        justifyContent: 'center',
        borderRadius: 5,
        // borderWidth: 1,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        paddingLeft: 15,

        backgroundColor: 'white',


    },
    userIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,

    },

    bottomView: {
        width: width,
        paddingLeft: unitWidth * 60,
        paddingRight: unitWidth * 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    payText: {
        color: 'white',
        textAlign: 'center',
    },
    buttonView: {
        width: 100,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#e60012',
        justifyContent: 'center',
        alignItems: 'center',

    }

})