import Card from "./Card/Card";
import Movie from "../Data/models";
import Constants from "../Data/models";

interface Props {
  items: Movie[];
}

function CardListGroup({ items }: Props) {
  var i = Array.from(items);
  console.log("I am Items: " + items);
  return (
    <div className="flex ">
      <div className="d-flex ">
        {items.map((item, index) => (
            <Card
              key={index}
              title={`${item.title}`}
              content={`${item.overview}`}
              image={`${Constants.imageUrl}w1280/${item.poster_path}?api_key=${Constants.apiKey}`}
            />
          ))}
      </div>
    </div>
  );
}

export default CardListGroup;
