import { StyleSheet } from 'react-native'
import { width, height, unitWidth } from '../utils/AdapterUtil'
import * as Color from '../configs/Color';


//样式
export default AboutStyle = StyleSheet.create({



    userContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    userIcon: {
        width: unitWidth * 100,
        height: unitWidth * 100,

    },
    aboutItem: {
        flex:1,
        flexDirection: 'row',
        borderWidth: unitWidth * 2,
        borderColor: '#eeeeee',
        height: unitWidth * 150,
        justifyContent: 'space-between',
        paddingLeft: unitWidth * 50,
        paddingRight: unitWidth * 50,
        alignItems:'center'
        
    }

})