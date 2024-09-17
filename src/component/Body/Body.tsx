import { useEffect, useState } from "react";
import CardListGroup from "../CardListGroup";
import "./Body.css";

function Body() {
  const apiKey = "6935dc2241b5a6643ce91a7504316079";
  const url = "https://api.themoviedb.org/3";
  var [latestMovies, setlatestMovies] = useState(Object);
  var [watchedMovies, setwatchedMovies] = useState(Object);

  const headers = {
    "Content-Type": "application/json",
  };

  async function getData() {
    fetch(`${url}/trending/movie/week?api_key=${apiKey}`, {
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
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="body-content">
      <div className="ms-5 starting-content">
        <h3 className="text-light ">Trending Movies</h3>
        <CardListGroup items={latestMovies} />
      </div>
      <div style={{ height: "15vw" }} />
      {/* <div className=" ms-5">
        <h3 className="text-light ">Recently Watched</h3>
        <CardListGroup items={watchedMovies} />
      </div> */}
    </div>
  );
}

export default Body;
