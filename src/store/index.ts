import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootWatcher from "../saga";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootWatcher)

export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch