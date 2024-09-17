import { useEffect, useState } from "react";
import CardListGroup from "../CardListGroup";
import "./Body.css";
import { Movie } from "../../Data/models";
import Constants from "../../Data/models";

function Body() {

  var [latestMovies, setlatestMovies] = useState<Movie[]>([]);
  var [watchedMovies, setwatchedMovies] = useState([]);

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
    fetch(`${Constants.url}/trending/movie/week?api_key=${Constants.apiKey}`, {
      method: "GET", // or 'POST', 'PUT', etc.
      headers: headers,
    })
      .then((res) => res.json())
      .then((json) => {
        setwatchedMovies(json["results"]);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="body-content">
      <div className="ms-5 starting-content">
        <h3 className="text-light ">Trending Now</h3>
        <CardListGroup items={latestMovies} />
      </div>
      <div style={{ height: "100px" }} />
      <div className=" ms-5">
        <h3 className="text-light ">Weekly Trending</h3>
        <CardListGroup items={watchedMovies} />
      </div>
    </div>
  );
}

export default Body;
