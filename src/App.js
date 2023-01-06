
import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route index element={<h1> helloworld</h1>}></Route>
          <Route path='movie/:id' element={<h1>Movie detail page</h1>}></Route>
          <Route path='movies/:type' element={<h1> Movies list page</h1>}></Route>
          {/* The /: is used to activate the path when path + id is provided */}
          <Route path='/*' element={<h1>Error Page</h1>}></Route> 
          {/* Path '/*' means that if there is other else path then write the following error message*/}
        </Routes>
      </Router>
      </div>
  )
}
export default App