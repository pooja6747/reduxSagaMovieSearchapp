import {all} from "redux-saga/effects"

import { movieSagas } from "./sagas/movieSaga"


export default function* rootSaga(){
    yield all([...movieSagas])
}