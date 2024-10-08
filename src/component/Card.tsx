// src/components/Card.js
import { useState } from "react";
import "../Card.css"; // Import the CSS file for styling
import { IoIosAdd  } from "react-icons/io";
import {IoIosCheckmark } from "react-icons/io";

interface Props {
  title: String;
  content: String;
  image: string;
}
const Card = ({ title, content, image }: Props) => {
  var [isHover, setHover] = useState(false);
  var [isLike, setLike] = useState(false);
  return (<div
    className="movie-card"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => {
      if (!isLike) setHover(false)
    }}
  // style={{ background: `url(${image})` }}
  >
    {(
      <div className="card-container">
        <img src={image} alt="new" className="card-image" />
        {
          isLike
            ? <IoIosCheckmark  
              style={{ color: 'red' }} className="card-like-button"
              onClick={() => {
                setLike(false);
              }}
            />
            :
            isHover
              ?
              <IoIosAdd 
                style={{ color: 'white' }} className="card-like-button"
                onClick={() => {
                  setLike(true);
                }}
              />
              : ""

        }
      </div>
    )}
  </div>
  );
};

export default Card;
