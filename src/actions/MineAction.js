/**
 * Created by gdchent on 2018/1/4.
 */


'use strict';

import {MineType} from "../actiontypes/index";
import {GetUserCenterInfo, passwordLoginApi} from "../server/ServerApi";
import {setUserInfo} from "../utils/CacheUtil";

export function queryDate() {
    return dispatch => {
        GetUserCenterInfo((res) => {
            setUserInfo(res)
            dispatch({
                type: MineType.QUERY_DATA,
                params: res
            })
        })
    }
}

