/**
 * Created by gdchent on 2018/1/5.
 */

import {StyleSheet, Platform} from 'react-native';
import * as Color from '../configs/Color';
import {width, height, unitWidth, titleHeight, unitHeight} from '../utils/AdapterUtil'


export default ShopDetailFirstStyle= StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection:'row',
      },
     
      title: {
        width: width,
        textAlign: 'center',
      },
      headView: {
    
      },
      headViewIcon: {
        width: width,
        height: 120,
      },
      lineView: {
        width:width,
        height: 100,
        backgroundColor: 'red',
    
      },
      ratViewStyle: {
        flexDirection: 'row',
        marginLeft: 25,
      },
      shopNametextStyle: {
        marginLeft: 25,
        marginTop: 25,
      },
      itemRatStyle: {
        width: 20,
        height: 20,
        marginRight:10,
      },
    
      tabView: {
        width: width,
        flex:1,
      },
      itemTab: {
        flex: 1,
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
      },
    
      itemListStyle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        width: width,
        marginTop: 10,
      },
      addressTextStyle: {
    
      },
      itemRightListDetailView: {
        flex: 1,
        flexDirection: 'row-reverse',
      },
    
    
      selectBusinessItem: {
        flexDirection: 'row',
        width: width,
        height: unitHeight * 240,
        backgroundColor: 'white',
        borderBottomWidth: 1,
      },
    
      selectBusinessItemIcon: {
        width: unitHeight * 240,
        height: unitHeight * 240,
      },
    
    
      rightView: {
        flex: 1,
        flexDirection: 'column',
        height: unitHeight * 80,
      },
      itemCenterLine: {
        flexDirection: 'row',
        height: unitHeight * 80,
    
      },
      itemCenterTextStyle:{
            marginLeft:10,
            backgroundColor:'#e60012',
            borderRadius:unitHeight * 40,
      },
    
      itemCenterLineRightView: {
        flexDirection: 'row-reverse',
        flex: 1,
        marginRight:30,
        // borderWidth:1,
    
      },
      //每一项的高度
      itemStyle: {
        height: unitHeight * 80,
      }
    
})