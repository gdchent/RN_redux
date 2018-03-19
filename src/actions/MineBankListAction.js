'use strict';




import {MineBankListType} from '../actiontypes/index'
import { getBankListInfo } from "../server/ServerApi";

//查询数据
export function getBankList() {
    console.log('action==========')
    return dispatch => {
        getBankListInfo({},(res) => {
            dispatch({
                type: MineBankListType.QUERY_DATA,
                params: res
            })
        })
    }

}

