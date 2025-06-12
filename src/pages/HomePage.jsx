import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Home.css';

function Home() {
  const [zip, setZip] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (zip.trim().length === 5) {
      navigate(`/results?zip=${zip}`);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Stay ahead of the build</h1>
      <p className="home-description">
        Find out what’s being built in your neighborhood — search by ZIP code to view nearby construction projects.
      </p>

      <form onSubmit={handleSearch} className="home-form">
        <input
          type="text"
          placeholder="Enter ZIP code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="home-input"
          maxLength={5}
        />
        <button type="submit" className="home-button">Search</button>
      </form>
    </div>
  );
}

export default Home;