/**
 * Created by gdchent on 2018/1/5.
 */

import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, titleHeight, statusBarHeight } from '../utils/AdapterUtil'




//商家中心
export default MineFeedBackListStyle = StyleSheet.create({

    
      itemContainer:{
          width:width,
          flex:1,
        
          backgroundColor:'white',
      },
      titleView:{
          flexDirection:'row',
      },

      titleBarViewStyle:{
          flex:1,
         
      }
  
})