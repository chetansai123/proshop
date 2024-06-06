import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const Rating = ({ value, text }) => {
  const renderStars = (value) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (value >= i) {
        stars.push(<FaStar key={i} className="star" />);
      } else if (value >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="star" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }
    return stars;
  };
  return (
    <>
      {renderStars(value)}
      <span className="rating">{text && `${text} reviews`}</span>
    </>
  );
};

export default Rating;
