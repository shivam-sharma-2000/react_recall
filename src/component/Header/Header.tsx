import { useEffect, useState } from "react";
import "./Header.css";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Constants from "../../Data/models";
import Movie from "../../Data/models";

function Header() {
  var [movieHeader, setMovieHeader] = useState(Object);

  const headers = {
    "Content-Type": "application/json",
  };

  async function getData() {
    fetch(`${Constants.url}/trending/movie/week?api_key=${Constants.apiKey}`, {
      method: "GET", // or 'POST', 'PUT', etc.
      headers: headers,
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
  const image: string = `https://image.tmdb.org/t/p/w1280/${movieHeader["backdrop_path"]}?api_key=${Constants.apiKey}`;
  return (
    <div className="header">
      <div
        className="header-hero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 1), rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 1)), url(${image})`,
          backgroundRepeat: `no-repeat`,
          width: `100%`,
          height: `100vh`,
          backgroundSize: `cover`,
        }}
      ></div>
      <div className="ps-5 header-content">
        <p className="fs-2 fs-sm-6 fw-bold text-light">
          {movieHeader["original_title"]}
        </p>
        <p className="fs-6 fs-md-6 fs-sm-6 text-light w-50">
          {movieHeader["overview"]}
        </p>
        <button
          type="button"
          className=" btn-sm mt-3 me-3 btn btn-light btn-cylindrical"
        >
          Watch Now
          <FaPlay className="ms-2" />
        </button>

        <button
          type="button"
          className="btn-sm mt-3 btn btn-dark btn-cylindrical"
        >
          Details
          <IoIosArrowForward className="ms-2" />
        </button>
      </div>
    </div>
  );
}
export default Header;
