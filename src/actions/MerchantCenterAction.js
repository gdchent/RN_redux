/**
 * Created by gdchent on 2018/1/16.
 */


'use strict'
import {GetMerchantCenterInfo, GetUserSetInfo} from "../server/ServerApi";
import {MerchantCentertype} from "../actiontypes/index";

export function getMerchantCenterInfo() {
    return dispatch => {
        GetMerchantCenterInfo((res) => {
            dispatch({
                type: MerchantCentertype.QUERY_DATA,
                params: res
            })
        })
    }
}