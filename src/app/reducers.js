/* Combine all reducers in this file and export the combined reducers  */

import { combineReducers } from "@reduxjs/toolkit";


/* Merges the main reducer with the router stte and dynamically injected reducers */

export function createReducer(injectedReducers = {}) {
    if (Object.keys(injectedReducers).length === 0) {
        return (state) => state
    } else {
        return combineReducers({
            ...injectedReducers
        })
    }

    // const rootReducer = combineReducers({...injectedReducers})
    // return rootReducer
}