import { useEffect, useState } from "react";
import CardListGroup from "../CardListGroup";
import "./Body.css";
import { Movie } from "../../data/models";
import Constants from "../../data/models";

function Body() {

  var [latestMovies, setlatestMovies] = useState<Movie[]>([]);
  var [latestTV, setlatestTV] = useState([]);

  const headers = {
    "Content-Type": "application/json",
  };

  async function getData() {
    fetch(`${Constants.url}/trending/movie/day?api_key=${Constants.apiKey}`, {
      method: "GET", // or 'POST', 'PUT', etc.
      headers: headers,
    })
      .then((res) => res.json())
      .then((json) => {
        //   console.log("This is reponse");
        //   console.log(json["results"][0]["name"]);
        console.log(json["results"]);
        setlatestMovies(json["results"]); //["backdrop_path"]
      });
    fetch(`${Constants.url}/trending/tv/day?api_key=${Constants.apiKey}`, {
      method: "GET", // or 'POST', 'PUT', etc.
      headers: headers,
    })
      .then((res) => res.json())
      .then((json) => {
        setlatestTV(json["results"]);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="body-content">
      <div className="ms-5 starting-content">
        <h3 className="text-light ">Trending Movie Now</h3>
        <CardListGroup items={latestMovies} />
      </div>
      <div style={{ height: "100px" }} />
      <div className=" ms-5">
        <h3 className="text-light ">Trending TV Now</h3>
        <CardListGroup items={latestTV} />
      </div>
    </div>
  );
}

export default Body;
