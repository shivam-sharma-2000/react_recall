import Card from "./Card";
import Movie from "../Data/models";
import Constants from "../Data/models";

interface Props {
  items: Movie[];
}

function CardListGroup({ items }: Props) {
  var i = Array.from(items);
  return (
    <div className="flex ">
      <div className="d-flex flex-wrap">
        {i.map((item, index, items) => {
          console.log(item);
          return (
            <Card
              key={index}
              title={`Movie Title ${index + 1}`}
              content={`Description for movie ${index + 1}`}
              image={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}?api_key=${Constants.apiKey}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardListGroup;
