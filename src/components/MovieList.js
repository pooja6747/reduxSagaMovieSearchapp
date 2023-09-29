import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const MovieList = () => {
    const { moviesList } = useSelector((state) => (state.movie))

    return (
        <>
            <div className='row'>
                {moviesList.Search?.map(el=> (
                    <div className='col-md-4'key={el.imdbID}>
                        <div className='Card' key={el.imdbID}>

                            <img src={el.Poster} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieList