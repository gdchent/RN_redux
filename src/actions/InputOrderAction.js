/**
 * Created by gdchent on 2018/1/4.
 */


'use strict';

import { InputOrderType } from "../actiontypes/index";
import { CheckMobile, GetReportOrderPrompt } from "../server/ServerApi";

export function inputBuyerAccount(phone) {
    if (phone.length < 11) {
        return ({
            type: InputOrderType.INPUT_BUYER_ACCOUNT,
            params: {
                BuyerAccount: phone,
                buyer: false
            }
        })
    } else {
        return dispatch => {
            //    查询消费者姓名
            CheckMobile(phone, (res) => {
                dispatch({
                    type: InputOrderType.INPUT_BUYER_ACCOUNT,
                    params: {
                        BuyerAccount: phone,
                        BuyerName: res.RealName,
                        fee: res.fee,
                        buyer: true
                    }
                })
            })
        }
    }
}

export function inputOrderAmount(amount) {
    return {
        type: InputOrderType.INPUT_ORDER_AMOUNT,
        params: amount
    }
}

export function selectVoucherImg(url) {
    return {
        type: InputOrderType.SELECT_VOUCHER_IMG,
        params: url
    }
}

export function selectContractImg(url) {
    return {
        type: InputOrderType.SELECT_CONTRACT_IMG,
        params: url
    }
}

export function selectPayment(payment) {
    return {
        type: InputOrderType.SELECT_PAYMENT,
        params: payment
    }
}

export function getReportOrderPrompt() {
    return dispatch => {
        GetReportOrderPrompt((res) => {
            dispatch({
                type: InputOrderType.QUERY_PROMPT,
                params: res
            })
        })
    } 
}


/**
 * 清空数据
 */
export function clearData(res) {
    return{
        type: InputOrderType.CLEAR_DATA,
        params:{
            VoucherImg:'',
            ContractImg:'',
            BuyerName:'',
            rlamount:'',
            OrderAmount:0,
            inputBuyerAccount:'',
            buyer:'',
        },
    }
}