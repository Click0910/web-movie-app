import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './MovieCard.module.css'
export function MovieCard({movie}) {
    
    const urlImg = "https://image.tmdb.org/t/p/w300" + movie.poster_path

    return <li className={styles.card}>
                <Link to={"/movies/" + movie.id}>
                    <img 
                        width={230}
                        height={345}
                        className={styles.cardImg} 
                        src={urlImg} 
                        alt={movie.title}>

                    </img>
                    <div>
                        {movie.title}
                    </div>                  
                </Link>            
            </li>
}