import Card from "./Card/Card";
import Movie from "../data/models";
import Constants from "../data/models";

interface Props {
  items: Movie[];
}

function CardListGroup({ items }: Props) {
  var i = Array.from(items);
  console.log("I am Items: " + items);
  return (
    <div className="flex ">
      <div className="d-flex flex-wrap">
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
