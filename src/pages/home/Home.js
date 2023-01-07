import React, { useState,useEffect } from 'react'
import './Home.css';


const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]); // useState is used to save the data from the API in the state

     useEffect(() => {    // useEffect is used to fetch data from the API and now we will save this data in the state above
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b6ae8e682dc29e414a10b8ef7c075acc')
        .then(res => res.json())
        .then(data => console.log(data.results))
    },[])
 
  return (
    <div>HomePage</div>
  )
}

export default Home