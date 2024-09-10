// src/components/Card.js
import "../Card.css"; // Import the CSS file for styling

interface Props {
  title: String;
  content: String;
  image: string;
}
const Card = ({ title, content, image }: Props) => {
  return (
    <div className="movie-card">
      <img src={image} alt="new" className="card-image" />
    </div>
  );
};

export default Card;
