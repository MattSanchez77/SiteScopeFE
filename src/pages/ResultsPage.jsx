import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SiteCard from '../components/SiteCard';
import './ResultsPage.module.css';

function Results() {
    const [searchParams] = useSearchParams();
    const zip = searchParams.get('zip');
    const [sites, setSites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      if (!zip) return;
  
      setLoading(true);
      setError('');
  
      fetch(`/api/sites?zip=${zip}`)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch sites');
          return res.json();
        })
        .then((data) => {
          setSites(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [zip]);
  
    return (
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>← Back to Search</Link>
  
        {zip && <h2 className={styles.title}>Results for ZIP {zip}</h2>}
  
        {loading && <p className={styles.message}>Loading results...</p>}
        {error && <p className={`${styles.message} ${styles.error}`}>Error: {error}</p>}
        {!loading && !error && sites.length === 0 && (
          <p className={styles.message}>No sites found for ZIP {zip}.</p>
        )}
  
        <div className={styles.siteList}>
          {sites.map((site) => (
            <SiteCard key={site._id} site={site} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Results;
