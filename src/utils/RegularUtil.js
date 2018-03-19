/**
 *  Created by gdchent on 2017/9/23
 */

'use strict';

/**
 *  方法描述: 检验手机号
 *  作    者: gdchent
 *  时    间: 2017-11-24
 *  参    数:
 */
export function checkMobile(mobile) {
    const reg = /^1[3|4|5|7|8][0-9]{9}$$/;
    return mobile.match(reg);
}

/**
 *  方法描述: 检验车牌号格式
 *  作    者: gdchent
 *  时    间: 2017-11-24
 *  参    数:
 */
export function checkCarNum(carNum) {
    const reg = /^[\u4e00-\u9fa5|WJ]{1}[A-Z]{1}[0-9]{5}$/;
    return carNum.match(reg);
}

/**
 *  方法描述: 验证金额的输入是否合法
 *  作    者: gdchent
 *  时    间: 2017-11-24
 *  参    数:
 */
export function checkJinE(amount) {
    amount = amount + ""
    const reg = /(^\d$)|(^\d\.$)|(^\d\.\d{0,2}$)|(^[1-9]\d*$)|(^[1-9]\d*\.$)|(^[1-9]\d*\.\d{0,2}$)/
    return amount.match(reg) || !amount;
}

/**
 *  方法描述: 验证支付密码  六位数字
 *  作    者: gdchent
 *  时    间: 2017-11-24
 *  参    数:
 */
export function checkPayPassword(pwd) {
    const reg = /^\d{0,6}$/
    return pwd.match(reg) || !pwd;
}

/**
 *  方法描述: 验证登录密码
 *   登录密码规则,6-16位  不能纯数字,纯字母,纯符号
 *  作    者: gdchent
 *  时    间: 2017-12-18
 *  参    数:
 */
export function checkLoginPassword(pwd) {
    const reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/
    return pwd.match(reg);
}