import React,{useEffect,useState} from 'react'
import './MovieList.css'    
import Card from '../card/Card'
import { useParams } from 'react-router-dom'


const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()
    
    useEffect(() => {
       getData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
       getData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[type])

    const getData = () =>{
      fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=b6ae8e682dc29e414a10b8ef7c075acc`)
         .then((res) => res.json())
         .then((data) => setMovieList(data.results));
    }

    return (
      <div className='movie__list'>
        <h2 className='list__title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
        <div className='list__cards'>
          {
          movieList.map(movie => (
            <Card movie={movie}/>
            ))
          }
        </div>

      </div>
    )
    
}

export default MovieList;