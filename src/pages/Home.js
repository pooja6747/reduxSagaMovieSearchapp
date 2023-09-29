import React from 'react'
import Search from '../components/Search'
import MovieList from '../components/MovieList'

const Home = () => {
  return (
    <>
      {/* serch component */}
      <Search />
      <MovieList />
    </>
  )
}

export default Home