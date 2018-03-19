/**
 *  Created by gdchent on 2017/10/9
 */

'use strict';

export const PublicTypes = {
    CHANGE_CITY: "change_city",     //切换城市
    LOGOUT: 'logout',                     //退出登录
    INIT: 'init'                           //初始化数据
}
export const ModifyLoginPwdType={
    INPUT_PSW:"input_psw_modify_login_pwd",
    INPUT_COM_PSW:"input_com_psw_modify_login_pwd",
    INPUT_USER_NAME:"input_user_name_modify_login_pwd",
    INPUT_SMS:"input_sms_modify_login_pwd"
}

export const ModifyPayPwdType={
    INPUT_PSW:"input_psw_modify_pay_pwd",
    INPUT_COM_PSW:"input_com_psw_modify_paygin_pwd",
    INPUT_USER_NAME:"input_user_name_modify_pay_pwd",
    INPUT_SMS:"input_sms_modify_pay_pwd"
}

export const ShareRecordType = {
    QUERY_RECOMMEND_LIST: 'query_recommend_list',
    QUERY_INDIRECT_RECOMMEND_LIST:'QUERY_INDIRECT_RECOMMEND_LIST',
    CHANGE_TAB:'change_tab_recommend_list'
}

export const InputOrderType = {
    INPUT_BUYER_ACCOUNT: 'input_buyer_account_input_order',
    INPUT_ORDER_AMOUNT: 'input_order_amount_input_order',
    SELECT_VOUCHER_IMG: 'select_voucher_img_input_order',
    SELECT_CONTRACT_IMG: 'select_contract_img_input_order',
    SELECT_PAYMENT: 'select_payment_input_order',
    QUERY_PROMPT: "query_prompt_input_order",
    CLEAR_DATA:'clear_data',
}

export const LoginTypes = {
    INPUT_USER_NAME: 'input_user_name_login',  //   输入用户名
    INPUT_PASSWORD: 'input_password_login',   //  输入密码
    LOGIN: "login"
}

export const RegistTypes = {
    INPUT_USERNAME: 'regist_inputUserName',   //   输入用户名
    INPUT_PASSWORD: 'regist_inputPassword',   //   输入密码
    INPUT_CONFIRM_PASSWORD: 'regist_inputConfirmPassword',   //  确认密码
    INPUT_CODE: 'regist_inputSmsCode',   //  输入验证码
    // 输入推荐人
    INPUT_RECOMMAND: "input_recommand",

    ON_CHECK_CHNAGE: 'on_check_change',
}

export const MineType = {
    QUERY_DATA: "query_data_mine"
}

export const UserCenterType = {
    GET_USER_SET_INFO: "GET_USER_SET_INFO"
}

export const MerchantCentertype = {
    QUERY_DATA: "query_data_merchant_center"
}

export const RealNameVerifyType = {
    SET_FROMKEY: "set_fromkey_real_name_verify",
    QUERY_BANK_LIST: 'query_bank_card_list_real_name_verify',
    QUERY_PROVICE: "query_provice_real_name_verify",
    QUERY_CITY: 'query_city_real_name_verify',
    QUERY_AREA: 'query_area_real_name_verify',
    SET_ID_CARD_PIC: "select_id_card_pic_real_name_verify",
    SET_ID_CARD_REVERSE_PIC: "set_id_card_reverse_pic_real_name_verify",
    SET_BANK_CARD_PIC: "set_bank_card_pic_real_name_verify",
    SELECT_PROVICE: "select_provice_real_name_verify",
    SELECT_CITY: "select_city_real_name_verify",
    SELECT_AREA: "select_area_real_name_verify",
    SELECT_BANK: 'select_bank_real_name_verify',
    INPUT_NAME: 'input_name_real_name_verify',
    INPUT_ID: 'input_id_real_name_verify',
    INPUT_BANK_NO: 'input_bank_no_real_name_verify',
    INPUT_PWD: "input_pwd_real_name_verify"
}


/**
 * 审批失败的type
 */
export const GetFailureApproveOrderType = {
    QUERY_DATA: 'query_data_getFailureApproveOrder'
}


export const MineBankListType = {
    QUERY_DATA: 'query_data_minebanklist'
}
