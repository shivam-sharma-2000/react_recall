import Header from "../../component/Header/Header";
import Body from "../../component/Body/Body";
import { Movie } from "../../data/models";

interface Props{
    img: Movie
}

function Details({img}: Props) {
  return (
    <>
      <Header img={img} />
    </>
  );
}
export default Details;
