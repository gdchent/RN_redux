/**
 * Created by gdchent on 2018/1/16.
 */

'use strict'
import {GetFailureApproveOrderInfo} from "../server/ServerApi";
import {GetFailureApproveOrderType} from "../actiontypes/index";

export function getFailureApproveOrderInfo(params) {
    
    console.log('params'+JSON.stringify(params));
    return dispatch => {
        GetFailureApproveOrderInfo(params,(res) => {
            dispatch({
                type: GetFailureApproveOrderType.QUERY_DATA,
                params: res
            })
        })
    }
}