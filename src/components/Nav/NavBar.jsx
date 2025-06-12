import { Link } from "react-router-dom";
import styles from './NavBar.module.css';


function Navbar() {
    return (
      <nav className={styles.navbar}>
        <div className={styles['navbar-logo']}>SiteScope</div>
        <ul className={styles['navbar-links']}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;