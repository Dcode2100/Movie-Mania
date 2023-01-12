
import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';

function App () {
  return(
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<h1>Movie detail page</h1>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          {/* The /: is used to activate the path when path + id is provided */}
          <Route path='/*' element={<h1>Error Page</h1>}></Route> 
          {/* Path '/*' means that if there is other else path then write the following error message*/}
        </Routes>
      </Router>
      </div>
  )
}
export default App