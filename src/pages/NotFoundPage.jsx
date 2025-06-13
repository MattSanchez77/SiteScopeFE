import { Link } from 'react-router-dom';
import styles from  './NotFound.module.css';

function NotFound() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.text}>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className={styles.link}>← Back to Home</Link>
      </div>
    );
  }
  
  export default NotFound;