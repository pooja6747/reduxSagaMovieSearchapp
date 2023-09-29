import {API_ENDPOINT} from '../api/routes'
import axios from 'axios'

export const api_fetchMovies = async(movieName)=> axios.get(`${API_ENDPOINT}&s=${movieName}`)