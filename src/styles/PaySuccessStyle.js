/**
 *  Created by gdchent on 2017/10/9
 */


import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, titleHeight, unitHeight } from '../utils/AdapterUtil'

export default PaySuccessStyle = StyleSheet.create({



      container: {
            flex: 1,
            backgroundColor: 'white',
            alignItems:'center',
      },
      lineHeadView: {
            justifyContent: 'center',
            alignItems: 'center',

      },

      lineHeadIcon: {
            height: unitWidth * 150,
            width: unitWidth * 150,


      },

      contentViewStyle: {
            width: width - unitWidth * 100,
            height: unitWidth * 300,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: unitWidth * 5,
      },

      contentItemViewStyle: {
            flexDirection: 'row',
            width: width - unitWidth * 100,
           
            justifyContent: 'space-between',
            paddingLeft: unitWidth * 45,
            paddingRight: unitWidth * 45,
            marginTop: unitWidth * 20,
      }

})

