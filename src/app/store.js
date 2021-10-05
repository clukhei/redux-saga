import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors'

import { createReducer } from './reducers'

export function configureAppStore()  {
    const reduxSagaMonitorOptions = {}
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
    const { run: runSaga } = sagaMiddleware

    // Create the store with saga middleware 
    const middlewares = [sagaMiddleware]
    
    const enhancers = [
        createInjectorsEnhancer({
            createReducer,
            runSaga
        })
    ]
    const store = configureStore({
        reducer: createReducer(),
        middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middlewares],
        devTools:
            process.env.NODE_ENV !== 'production' ||
            process.env.PUBLIC_URL.length > 0,
        enhancers
    })

    if (module.hot){
        module.hot.accept('./reducers', () => {
            forceReducerReload(store)
        })
    }
    return store
}

export const store = configureStore({
    reducer: {}
})