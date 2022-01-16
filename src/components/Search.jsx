import styles from './Search.modules.css'
import {BiSearchAlt} from 'react-icons/fa'
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '../hooks/useQuery';

export function Search() {

    const query = useQuery()
    const search = query.get('search')

  

    // const [searchText, setsearchText] = useState('');
    const history = useHistory();

    useEffect(() => {
        setsearchText(search || '')
    }, [search]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // history.push('/?search=' + searchText)
    }

    return (
        <form className={styles.containerSearch} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.inputSearch} 
                    type='text' 
                    value={search} 
                    onChange={(e) => {
                        const value = e.target.value
                        setsearchText(value);
                        history.push('/?search=' + value)

                    }}
                        
                />
                <button className={styles.buttonSearch} type='submit'>
                    <BiSearchAlt size={20}/>
                </button>
            </div>
        </form> 
    )
}
