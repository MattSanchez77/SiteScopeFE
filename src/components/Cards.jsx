import styles from "../components/Card.module.css";

const Card = ({ image, title, location, completion }) => {
    return (
      <div className={styles.card}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>Location: {location}</p>
        <p>Estimated Completion: {completion}</p>
        <button className={styles.detailsBtn}>View Details</button>
      </div>
    );
  };
  
  export default Card;