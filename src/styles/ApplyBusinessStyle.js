/**
 *  Created by gdchent on 2017/10/9
 */

import { StyleSheet } from 'react-native'
import { width, height, unitWidth } from '../utils/AdapterUtil'
import * as Color from '../configs/Color';

export default ApplyBusinessStyle = StyleSheet.create({


      lineHeadView: {
            height: 150,
            width: width,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

      },
      itemColumnView: {

            paddingLeft: 30,
            justifyContent: 'center',
            alignItems: 'center',
            height: unitWidth * 150,

      },
      imageIcon: {
            width: unitWidth * 100,
            height: unitWidth * 100,
      },
      lineIcon: {
            width: unitWidth * 50,
            height: unitWidth * 1,

      },
      //视图容器
      lineRowViewContainerStyle: {
            backgroundColor: 'white',
            paddingLeft: unitWidth * 30,
            paddingRight: unitWidth * 30,

      },
      //内容区域视图
      rowViewStyle: {
            backgroundColor: 'white',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: unitWidth * 10,

      },
      textBorderStyle: {
            width: unitWidth * 75,
            height: unitWidth * 75,
            borderRadius: unitWidth * 150,
            borderWidth: unitWidth * 5,
            borderColor: Color.themeColor,
            textAlign: 'center',
            color: Color.themeColor,

      },
      itemLineView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: unitWidth * 45,
            paddingRight: unitWidth * 45,
            marginTop: unitWidth * 20,
      },
      itemListLeft: {

      },
      itemListRight: {
            paddingRight: unitWidth * 50,
            justifyContent: 'center',
      },

      textStyle: {

      },
      bottomStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      bottomCenterStyle: {
            flexDirection: 'row',
            alignItems:'center',
      },
      btnSave: {
            color: 'white',
            backgroundColor:'darkgray',
            width:unitWidth*360,
            borderRadius:unitWidth*5,
            height:unitWidth*120,
            textAlign:'center',
            borderRadius:unitWidth*25,
            paddingTop:unitWidth*26,
      },
      btnConfirm: {
            color: 'white',
            backgroundColor:Color.themeColor,
            height:unitWidth*120,
            width:unitWidth*360,
            marginLeft:unitWidth*25,
            borderRadius:unitWidth*15,
            textAlign:'center',
            paddingTop:unitWidth*26,
      }

})

