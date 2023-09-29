import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import movieReducer from "../store/feature/movieSlice";
import rootSaga from '../store/rootSaga'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movie: movieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;