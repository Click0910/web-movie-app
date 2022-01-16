import { MovieCard } from './MovieCard'
import styles from './MoviesComponent.module.css'
import { useEffect, useState } from 'react'
import { get } from "../tools/httpServer";
import { Spinner } from './Spinner';
import { useLocation } from 'react-router';
import { useQuery } from '../hooks/useQuery';
import InfiniteScroll from 'react-infinite-scroll-component'



export function MoviesComponent({search}) {
    const [movies, setMovies] = useState([]);
    const [loadind, setLoading] = useState(true);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    
  
    useEffect(() => {
      setLoading(true)
      const searchUrl = search 
      ? "/search/movie?query=" + search + "&page=" + page 
      : "/discover/movie?page=" + page
      get(searchUrl).then((data) => {
        
        setMovies((prevMovies) => prevMovies.concat(data.results));
        sethasMore(data.page < data.total_pages);
        setLoading(false)
      });
    }, [search, page]);

    return (
      <InfiniteScroll 
        dataLength={movies.length} 
        hasMore={hasMore} 
        next={() => setpage((prevPage) => prevPage + 1)}
        loader={ <Spinner /> }
        >
        <ul className={styles.grid}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>

      </InfiniteScroll>

    );
  }