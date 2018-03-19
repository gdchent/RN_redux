/**
 *  Created by majunhui on 2017/9/25
 *
 *  图片管理类
 */

'use strict';

export default {

    update:{
        update:require('./update/update.png'),
        update2:require('./update/update2.png'),
        close:require('./update/close.png'),
    },
  
    //splash_text.png
    splash:{
        logo_start: require('./splash/logo_start.png'),
        splash_text: require('./splash/splash_text.png'),
        splash_start_page:require('./splash/splash_start_page.png'),
    },


    mine: {
        setting: require('./mine/setting.png'),
        mine_xiaofei: require('./mine/mine_xiaofei.png'),
        mine_share: require('./mine/mine_share.png'),
        mine_huigou: require('./mine/mine_huigou.png'),
        item_shangjia: require('./mine/item_shangjia.png'),
        item_shouyi: require('./mine/item_shouyi.png'),
        item_yingyee: require('./mine/item_yingyee.png'),
        item_apply: require('./mine/item_apply.png'),
        item_daili: require('./mine/item_daili.png'),
        item_help: require('./mine/item_help.png'),
        user_bank_card: require('./mine/user_bank_card.png'),
        user_id_card: require('./mine/user_id_card.png'),
        user_modify_login_pwd: require('./mine/user_modify_login_pwd.png'),
        user_modify_pay_pwd: require('./mine/user_modify_pay_pwd.png'),
        user_nikename: require('./mine/user_nikename.png'),
        user_phone: require('./mine/user_phone.png'),
        user_real_name: require('./mine/user_real_name.png'),
        user_reset_pay_pwd: require('./mine/user_reset_pay_pwd.png'),
        user_verify: require('./mine/user_verify.png'),

    },
    public: {
        arrow_dowm_white: require('./public/arrow_dowm_white.png'),
        arrow_left: require('./public/arrow_left.png'),
        arrow_right_white: require('./public/arrow_right_white.png'),
        arrow_right_grey: require('./public/arrow_right_grey.png'),
        default_head: require('./public/default_head.png'),
        ic_delete: require('./public/ic_delete.png'),
        close:require('./public/close.png'),
        search: require('./public/search.png'),
        selectBussinessItemIcon: require('./public/homeListIcon.png'), //商家店铺图标
        selectBussinessItemMapIcon: require('./public/mapAddress.png'),
        nearTabIcon: require('./public/top_tab_icon.png'),
        logo: require('./public/logo.png'),
        radius_logo:require('./public/radius_logo.png'),

        username: require('./public/username.png'),
        password: require('./public/password.png'),
        sms_code: require('./public/sms_code.png'),
        good_ratting: require('./public/good_ratting.png'),
        choose: require('./public/choose.png'),
        unchoose: require('./public/unchoose.png'),
        recommand: require('./public/recommand.png'),
        no_data: require('./public/no_data.png'),
        applyStateCenter:require('./public/applyStateCenter.png'), //审核中
        applyStateFaired:require('./public/applyStateFaired.png'),  //审核失败


    },
    home: {
        home_share: require('./home/home_share.png'),
        home_saler: require('./home/saler.png'),
        home_yesterdayValue: require('./home/yesterdayValue.png'),
        home_telphone: require('./home/clientTelphone.png'),

        home_bottom_list_c: require('./home/cheng.png'),
        home_bottom_list_j: require('./home/ji.png'),
        home_bottom_list_you: require('./home/you.png'),
        home_map_address: require('./home/home_map_address.png'),
        home_center_img: require('./home/home_center_img.png'),

    },
    detail: {
        deail_map: require('./detail/nav_icon.png'),
        call_phone: require('./detail/call_phone.png'),
        map_no_color: require('./detail/map_no_color.png'),
        map_detail_left:require('./detail/map_detail_left.png'),
    },

    tab: {
        home: require('./tab/home.png'),
        home_active: require('./tab/home_active.png'),
        mall: require('./tab/mall.png'),
        mall_active: require('./tab/mall_active.png'),
        mime: require('./tab/mine_default.png'),
        mine_active: require('./tab/mine_active.png'),
        near: require('./tab/near.png'),
        near_active: require('./tab/near_active.png')
    },
    merchant: {
        code_top: require('./merchant/code_top.png'),
        code_bg: require('./merchant/code_bg.png'),
        code_bottom: require('./merchant/code_bottom.png'),
        bg: require('./merchant/bg.png'),
        scan: require('./merchant/scan.png'),
        alipay: require('./merchant/alipay.png'),
        wechat: require('./merchant/wechat.png'),
        qianqb: require('./merchant/qianqb.png'),
        inputcode:require('./merchant/inputcode.png'), //报单
        qqReturn:require('./merchant/qqReturn.png'),  //千秋币回购
        qqAddInput:require('./merchant/qqAddInput.png'), //千秋币充值
        orderReturn:require('./merchant/orderReturn.png'),//报单驳回

        turnover:require('./merchant/turnover.png'), //营业额
        receiverMoneyCode:require('./merchant/receiverMoneyCode.png'), //收款码
        userHelp:require('./merchant/userHelp.png'), //用户帮助


        merchant_introduce:require('./merchant/merchant_introduce.png'),  //商家入驻

        merchant_you:require('./merchant/you.png')
        
    },

    //支付
    pay:{
        wxPay:require('./pay/wxPay.png'),
        aliPay:require('./pay/aliPay.png'),
        qqMoneyPay:require('./pay/qqMoneyPay.png'),
    },

    share: {
        bottom: require('./share/bottom.png'),
        head_block: require('./share/head_block.png'),
        left: require('./share/left.png'),
        qq: require('./share/qq.png'),
        qzone: require('./share/qzone.png'),
        right: require('./share/right.png'),
        text: require('./share/text.png'),
        time_line: require('./share/time_line.png'),
        top: require('./share/top.png'),
        wx: require('./share/wx.png'),
    },
    appstate:{
        appstate_bg:require('./appstate/appstate_bg.png'),
    },
    login:{
        check_agree:require('./login/check_agree.png'),
        check_unagree:require('./login/check_unagree.png'),
    }
    
}