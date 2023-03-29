import React, { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import Style from './style.css';



const App = () =>{
    const [movies, setMoives] = useState([]);
    const [searchValue, setSearchValue] = useState('James Bond');


    const getMovieRequest = async () => {


      const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=220d463c`;

      const response = await fetch(url);
      const responseJson = await response.json();

      if(responseJson.Search ){
        setMoives(responseJson.Search);
      }
    };

    useEffect(() => {
      getMovieRequest(searchValue);
    }, [searchValue]);

    return(
      <div className='container-fluid movie-app' >
        <div className='row d-flex' >
            <MovieListHeading heading='Movies' />
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='row'>
          <MovieList movies={movies} />
        </div>
        
      </div>
    );
};

export default App;