
'use strict';

import {combineReducers} from 'redux';
import publicReducer from './PublicReducer';
const rootReducer = combineReducers({

    publicReducer: publicReducer,
    
});


export default rootReducer;