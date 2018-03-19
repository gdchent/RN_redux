/**
 * Created by gdchent on 2018/1/29.
 */

import {StyleSheet} from 'react-native'
import * as Color from '../configs/Color'
import {width, height, unitWidth} from '../utils/AdapterUtil'

export default ModalStyle = StyleSheet.create({
    selectPicModal: {
        width: width - unitWidth * 100,
        height: unitWidth * 515,
        backgroundColor: '#00000000',
        justifyContent: 'flex-end'
    },
    changePhotoModal: {
        width: width - unitWidth * 100,
        backgroundColor: 'white',
        borderRadius: unitWidth * 30
    },
    selectPicModalItem: {
        width: width - unitWidth * 100,
        height: unitWidth * 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectPicModalLine: {
        height: unitWidth * 2,
        backgroundColor: Color.listItemBorder
    },
    selectPicModalItemText: {
        color: "#007aff",
        fontSize: unitWidth * 52,
    },
    selectPicModalModalCancle: {
        width: width - unitWidth * 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: unitWidth * 150,
        backgroundColor: 'white',
        borderRadius: unitWidth * 30,
        marginTop: unitWidth * 30,
        marginBottom: unitWidth * 30
    },

//////////////////////////////////////////////////////////////////////////////////////////////////////
    selectPicWithTemplateModal: {
        width: width,
        height: height,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: unitWidth * 100
    },
    templateBlock: {
        width: unitWidth * 1100,
        borderWidth: unitWidth * 5,
        borderColor: Color.themeColor,
        borderRadius: unitWidth * 20,
        alignItems: 'center',
    },
    templateImage: {
        width: unitWidth * 1100,
        height: unitWidth * 886,
        borderRadius: unitWidth * 25,
        resizeMode: 'cover',
        borderWidth: unitWidth * 5,
        borderColor: Color.themeColor,
        borderRadius: unitWidth * 20,
    },
    templateBt: {
        width: unitWidth * 800,
        height: unitWidth * 150,
        backgroundColor: Color.themeColor,
        color: 'white',
        marginBottom: unitWidth * 100,
        borderRadius: unitWidth * 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: unitWidth * 60
    },

//////////////////////////////////////////////////////////////////////////////////////////////////////
    share: {
        width: width,
        height: unitWidth * 600,
        backgroundColor: '#00000000'
    },
    shareBg: {
        width: width,
        height: unitWidth * 600,
        backgroundColor: 'transparent',
        alignItems: 'center',
        flexDirection: 'row'
    },
    shareIconBlock: {
        backgroundColor: 'white',
        width: width - unitWidth * 100,
        height: unitWidth * 320,
        borderRadius: unitWidth * 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shareItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shareIcon: {
        width: unitWidth * 150,
        height: unitWidth * 150,
        resizeMode: 'contain'
    },
    shareText: {
        color: 'black',
        marginTop: unitWidth * 10
    },
    shareBt: {
        backgroundColor: 'white',
        width: width - unitWidth * 100,
        height: unitWidth * 160,
        borderRadius: unitWidth * 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: unitWidth * 50
    },
    shareBtText: {
        fontSize: unitWidth * 60,
        color: '#027aff'
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    savePic: {
        width: width,
        height: unitWidth * 480,
        backgroundColor: 'transparent'
    },
    savePicBg: {
        width: width,
        height: unitWidth * 480,
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    savePicBtBg: {
        width: width - unitWidth * 100,
        backgroundColor: 'white',
        borderRadius: unitWidth * 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: unitWidth * 160,
    },
    savePicBtText: {
        fontSize: unitWidth * 60,
        color: '#027aff'
    },
    ////////////////////////////////////////////////////////////////////////
    dazong: {
        width: unitWidth * 850,
        height: unitWidth * 1000,
        borderRadius: unitWidth * 15,
        backgroundColor: 'white',
    },
    dazongBg: {
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    dazongTitle: {
        color: 'black',
        fontSize: unitWidth * 65,
        marginTop: unitWidth * 30,
        marginBottom: unitWidth * 30
    },
    dazongTishi: {
        color: 'red',
        fontSize: unitWidth * 40,
        // marginTop: unitWidth * 30,
        // marginBottom: unitWidth * 30
    },
    scroll: {
        height: unitWidth * 750,
        // marginBottom: unitWidth * 10
    },
    dazongItem: {
        width: unitWidth * 600,
        height: unitWidth * 110,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderBottomWidth: unitWidth * 2,
        borderBottomColor: Color.listItemBorder
    },
    //////////////////////////////////////////////////////

});