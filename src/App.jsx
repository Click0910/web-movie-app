import styles from './App.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";
  

export function App () {
    return (
    <Router>
        <header>
            <nav className='navBar'>
                <div>
                    <Link to='/'> <h1 className={styles.title}>Movies</h1> </Link>
                </div>
                <div>
                    <Link to="/about">About Us</Link>
                </div>               
            </nav>
            
        </header> 
        <main>

            <Switch>
                <Route exact path="/about">About</Route>
                <Route exact path="/movies/:movieId"> <MovieDetails /> </Route> 
                <Route path="/"> <LandingPage /> </Route>
                         
            </Switch>   

        </main>       
                 
    </Router>
    )
}