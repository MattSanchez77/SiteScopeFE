import styles from "../components/Card.module.css";

const Card = ({ site }) => {
  console.log('SiteCard props:', site); // Check the full site object

  return (
    <div className="card">
      <h3>{site?.name || 'Unnamed Project'}</h3> {/* Prevent crashes */}
      <p>{site?.address || 'No location available'}</p>
    </div>
  );
};
  
  export default Card;