import Header from "../../component/Header/Header";
import Body from "../../component/Body/Body";
import { useEffect, useState } from "react";
import Constants from "../../data/models";
import { Movie } from "../../data/models";

function Home() {
  var [movieHeader, setMovieHeader] = useState<Movie | null>(null);
  async function getData() {
    fetch(`${Constants.url}/trending/movie/day?api_key=${Constants.apiKey}`, {
      method: "GET", // or 'POST', 'PUT', etc.
      headers: Constants.headers,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("This is reponse");
        console.log(json["results"][0]["name"]);
        console.log(json);
        setMovieHeader(json["results"][0]); //["backdrop_path"]
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header img={movieHeader} />
      <Body />
    </>
  );
}
export default Home;
