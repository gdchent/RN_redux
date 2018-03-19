/**
 * Created by gdchent on 2018/1/16.
 */


'use strict'
import {GetUserSetInfo} from "../server/ServerApi";
import {UserCenterType} from "../actiontypes/index";

export function getUserSetInfo() {
    return dispatch => {
        GetUserSetInfo((res) => {

            console.log('res='+JSON.stringify(res));
            dispatch({
                type: UserCenterType.GET_USER_SET_INFO,
                params: res
            })
        })
    }
}