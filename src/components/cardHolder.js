import Card from "./Card";
import "./cardHolder.css";

const CardHolder = ({ data }) => {
  return (
    <div className="cardHolderWrapper">
      <Card data={data} />
    </div>
  );
};

export default CardHolder;
