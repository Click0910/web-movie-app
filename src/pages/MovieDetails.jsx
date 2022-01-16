import { useEffect, useState } from 'react'
import styles from './MovieDetails.module.css'
import { get } from '../tools/httpServer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { Spinner } from '../components/Spinner'

export function MovieDetails() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        get('/movie/' + movieId).then((data) => {
            setMovie(data)
            setLoading(false)
            
        })

    }, [movieId])

    if (loading) {
        return <Spinner />
    }


    const urlImg = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    
    return <div className={styles.containerDetails}>
                <img className={`${styles.column}${styles.imageMovie}`} src={urlImg} alt={movie.title}></img>
                <div className={`${styles.column} ${styles.movieInfo}`}>
                    <p> <strong> Title: </strong>  {movie.title} </p>
                    <p> <strong> Genre: </strong> {movie.genres.map(genre => genre.name).join(', ')} </p>
                    <p> <strong> Description: </strong> {movie.overview} </p>
                </div>
            </div>
}