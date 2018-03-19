/**
 * Created by gdchent on 2017/5/18.
 */

import { StyleSheet, Dimensions, Platform } from 'react-native';
import * as Color from '../configs/Color'
import { width, height, unitWidth, titleHeight, statusBarHeight, unitHeight } from '../utils/AdapterUtil'

export default HomeStyle = StyleSheet.create({



    bannerCenterImage:{
        width: width,
        height: width /5.38,
        resizeMode: 'stretch',
        backgroundColor:Color.home_hLine_background,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 15,
        color: 'blue',
    },
    content: {
        fontSize: 15,
        color: 'black',
    },

    titleBar: {
        flexDirection: 'row',   // 水平排布
        height: titleHeight,
        backgroundColor: Color.titleBarBackground,
        alignItems: 'center',  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
        width: width,
        justifyContent: 'space-between'
    },
    cityText: {
        marginLeft: unitWidth * 20,
        color: 'white',
    },

    titleView: {
        flexDirection: 'row',
        width: width,
        height: unitWidth * 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.themeColor,
    },
    TitleBarArrow: {
        width: unitWidth * 90,
        height: unitWidth * 35,
        resizeMode: 'contain',
        marginRight: unitWidth * 100,
        marginTop: unitWidth * 10
    },
    searchBlock: {
        flexDirection: 'row',
        width: unitWidth * 700,
        height: unitWidth * 100,
        backgroundColor: 'white',
        borderRadius: unitWidth * 50,
        alignItems: 'center',
        paddingLeft: unitWidth * 10,
        backgroundColor:Color.home_hLine_background,
    },
    searchIcon: {
        width: unitWidth * 60,
        height: unitWidth * 60,
        marginLeft: unitWidth * 20,
        marginRight: unitWidth * 20
    },
    searchInput: {
        marginTop: 0,
        paddingTop: 0,
        paddingBottom: 0,
        height: unitWidth * 100,
        width: unitWidth * 500
    },
    bannerSwiper: {
        // backgroundColor:'red'
    },
    bannerImage: {
        width: width,
        height: width /3,
        resizeMode: 'stretch',
        backgroundColor:Color.home_hLine_background,
    },
    functionLine: {
        flexDirection: 'row',
        width: width,
        height: unitWidth * 320,
        backgroundColor: 'white',
        paddingTop: unitWidth * 30,
        //borderWidth:1,
        backgroundColor: Color.home_hLine_background,
        // marginBottom: unitWidth * 20
    },
    functionItem: {
        flex: 1,
        width:width,
        height: unitWidth * 270,
        alignItems: 'center',
        justifyContent: 'center',
    },
    functionIcon: {
        width: unitWidth *312,
        height: unitWidth * 242,
        // resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius:10,
        // borderWidth:2 ,
    },
    functionText: {
        textAlign: 'center',
        color: 'white',
        backgroundColor:'transparent'
    },
    able: {
        width: unitWidth * 180,
        height: unitWidth * 180,
        borderRadius: unitWidth * 180,
        backgroundColor: '#88888888',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ableText: {
        color: 'white',
        fontSize: unitWidth * 30
    },
 
    News: {
        width: width-unitWidth*40,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        marginLeft: unitWidth * 20,
        marginRight: unitWidth *20,
        paddingTop:unitWidth*20,
        paddingBottom:unitWidth*20,
        paddingRight:unitWidth*30,
        borderWidth:1,
        borderColor:'#eeeeee',
        
    },
    newsIcon: {
       
    },
    NewsImage: {
        width: unitWidth * 145,
        height: unitWidth * 140,
        marginLeft:unitWidth*50,
        marginRight:unitWidth*50,
        resizeMode: 'contain',
    },
    newsContent: {
        color: '#333333',
        fontSize: unitWidth * 45
    },
    //
    moreViewStyle: {
        width: unitWidth * 220,
        height:unitWidth*90,
        justifyContent: 'center',
        borderRadius: unitWidth * 90,
        backgroundColor: Color.home_more,


    },
    newsMore: {
       
        color: 'white',
        textAlign:'center',
    },
    lucky: {
        width: width,
        height: unitWidth * 200,
        resizeMode: 'stretch'
    },

    picker: {
        width: unitWidth * 270,
        position: 'absolute',
        backgroundColor: '#00000000'
    },
    noNet: {
        height: unitWidth * 120,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black'
    },


    selectBusinessItem: {
        flexDirection: 'row',
        width: width,
        height: unitWidth * 300,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        // borderWidth:1,
        borderColor: Color.regLoginBackground,
        alignItems: 'center',
    },

    itemLeftViewStyle: {
        width: unitWidth * 250,
        height: unitWidth * 250,
        paddingLeft:unitWidth*30,
        justifyContent:'center',
        alignItems:'center',
    },

    homeItemListIconStyle: {
        width: unitWidth * 200,
        height: unitWidth * 200,
        
    },
    selectBusinessItemIcon: {
        width: unitHeight * 240,
        height: unitHeight * 240,
    },


    rightView: {
        flex: 1,
        flexDirection: 'column',
        height: unitWidth * 250,
        paddingLeft: unitWidth * 50,
        justifyContent: 'center',
    },
    itemCenterLine: {

        height: unitHeight * 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      
    },

    itemCenterLineTextViewOneStyle: {
        flexDirection: 'row',
        //    backgroundColor:'yellow',
        borderRadius: unitWidth * 30,

    },
    itemCenterLineTextViewStyle: {
        marginLeft: unitWidth * 15,
        backgroundColor: 'green',
        borderRadius: unitWidth * 30,
    },


    itemCenterLineImgStyle: {
        width: unitWidth * 60,
        height: unitWidth * 60,
        marginLeft: unitWidth * 15,
    },


    itemCenterLineRightView: {
        flexDirection: 'row',
        paddingRight: unitWidth * 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapStyle: {
        width: unitWidth * 64,
        height: unitWidth * 80,
    },
    //每一项的高度
    itemStyle: {
        height: unitHeight * 80,
        color:'black',
        fontSize:14,
    },
    itemBottomStyle:{
        height: unitHeight * 80,
        color:'#555555',
        fontSize:12,

    },

    ListViewStyle: {
        marginTop: 20,
        backgroundColor: 'white',
    },


    headView: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },

    footView: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headText: {
        fontSize: 20,
        fontWeight: '800',
    },
    footText: {
        fontSize: 20,
        fontWeight: '800',
    },

    itemView: {
        marginTop: 2,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'red',
        height: 60,
    },
    itemLeftImgView: {
        width: 50,
        height: 50,
        borderColor: 'red',
        borderWidth: 1,
    },
    itemLeftImg: {
        width: 50,
        height: 50,
    },
    itemRightView: {
        height: 60,
        flex: 1,
        alignItems: 'center',

    },
    //每一项的右边的标题栏
    itemRightTitle: {
        textAlign: 'center',

    },






    // tuijian: {
    //     flexDirection: 'row',
    //     width: width,
    //     backgroundColor: 'white',
    //     alignItems: 'center',
    //     justifyContent: 'space-around',
    //     paddingTop: unitWidth * 30,
    //     paddingBottom: unitWidth * 30
    // },
    // tuijianItem: {
    //     width: unitWidth * 520,
    //     height: unitWidth * 200,
    //     borderRadius: unitWidth * 20,
    //     flexDirection: 'row',
    //     padding: unitWidth * 5,
    //     alignItems: 'center'
    // },
    // tuijianItemicon: {
    //     width: unitWidth * 110,
    //     height: unitWidth * 150,
    //     resizeMode: 'stretch',
    //     marginLeft: unitWidth * 30,
    //     marginRight: unitWidth * 30
    // },
    // tuijianItemText: {
    //     flex: 1,
    //     height: unitWidth * 193,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'white',
    //     borderBottomRightRadius: unitWidth * 15,
    //     borderTopRightRadius: unitWidth * 15
    // },
    // tuijianTitle: {
    //     fontSize: unitWidth * 40
    // },
    // tuijianTitleLeft: {
    //     color: '#fbae3f'
    // },
    // tuijianTitleRight: {
    //     color: '#fa5957'
    // },
    // tuijianContent: {
    //     color: 'black',
    //     fontSize: unitWidth * 35
    // },
    // tuijianItemLeft: {
    //     backgroundColor: '#fbae3f'
    // },
    // tuijianItemRight: {
    //     backgroundColor: '#fa5957'
    // },
    // like: {
    //     backgroundColor: 'white',
    //     marginTop: unitWidth * 30,
    //     padding: unitWidth * 30
    // },
    // likeItem: {
    //     width: unitWidth * 370,
    //     height: unitWidth * 400,
    // },
    // likeImg: {
    //     width: unitWidth * 370,
    //     height: unitWidth * 250,
    //     resizeMode: 'contain',
    //     // backgroundColor: 'blue'
    // },
    // likeBottom: {
    //     flex: 1,
    //     borderWidth: unitWidth * 5,
    //     borderColor: '#888',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    //
    // likeLocation: {
    //     width: unitWidth * 40,
    //     height: unitWidth * 60,
    //     resizeMode: 'contain'
    // }
});