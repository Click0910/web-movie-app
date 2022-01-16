import { ImSpinner6 } from 'react-icons/fa';
import styles from './Spinner.module.css'

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <ImSpinner6  size={55} className = {styles.spinning}/>
        </div>
    )
}
