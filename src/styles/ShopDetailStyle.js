/**
 * Created by gdchent on 2018/1/5.
 */

import {StyleSheet, Platform} from 'react-native';
import * as Color from '../configs/Color';
import {width, height, unitWidth, titleHeight, unitHeight} from '../utils/AdapterUtil'


export default ShopDetailStyle= StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
    
      title: {
        width: width,
        textAlign: 'center',
      },
      // headView: {
    
      // },
      headViewIcon: {
        width: width,
        height: 120,
      },
      lineView: {
        width:width,
       // height: 100,
      //  backgroundColor: 'red',
       //borderWidth:1,
      },
      ratViewStyle: {
        flexDirection: 'row',
        marginLeft: 25,
        marginBottom:unitWidth*10,
      },
      shopNametextStyle: {
        marginLeft: 25,
        marginTop:unitWidth*25,
        color:'black',
      },
      itemRatStyle: {
        width: 16,
        height: 16,
        marginRight:10,
      },
    
      tabView: {
        width: width,
        flex:1,
        backgroundColor:'white',
      },
      itemTab: {
        flex: 1,
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
      },
      headView:{
        width: width,
        alignItems:'center',
      },
      itemListStyle: {
        flexDirection: 'row',
        borderBottomWidth:unitWidth*3,
        borderColor:'#eeeeee',
        width: width-unitWidth*130,

        height:unitWidth*150,
        alignItems:'center',
        paddingLeft:unitWidth*30,
       // marginTop: 10,
      },
      addressTextStyle: {
          flex:1,
      },
      itemRightListDetailView: {
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