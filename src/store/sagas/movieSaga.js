import { takeLatest, put, fork, call } from "redux-saga/effects"
import { getMovies, setMovies } from "../feature/movieSlice"
import { api_fetchMovies } from "../services/call";

function* onLoadMoviesAsync({ payload }) {
    try {
        const movieName = payload;
        const response = yield call(api_fetchMovies, movieName)
        if (response.status === 200) {
            yield put(setMovies({ ...response.data }))
        }
    } catch (error) {
        console.log(error)
    }
}

function* onLoadMovies() {
    yield takeLatest(getMovies.type, onLoadMoviesAsync)
}

export const movieSagas = [fork(onLoadMovies)]

