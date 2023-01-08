import React, { useState,useEffect } from 'react'
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]); // useState is used to save the data from the API in the state

     useEffect(() => {    // useEffect is used to fetch data from the API and now we will save this data in the state above
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b6ae8e682dc29e414a10b8ef7c075acc')
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    },[])
 
  return (
    <>
      <div className='Poster'>
        <Carousel
        showThumbs={false}
        autoPlay={true} 
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >
          {
            popularMovies.map(movie =>(
              <Link style={{textDecoration:'none'}} to={`/movie/${movie.id}`}>
              <div className='posterImage'>
                <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`}/>
              </div>
              <div className='posterImage__overlay'>
                    <div className='posterImage__title'></div>

              </div>
              <Link/>
            ))
          }
        </Carousel>
        </div>
    </>
  )
}

export default Home