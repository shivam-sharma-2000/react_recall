import "./Header.css";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Constants, { Movie } from "../../data/models";

interface Props{
  img: Movie | null
}

function Header({ img }: Props) {

  const image: string = img == null ? "data:image/jpeg;base64,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" :`${Constants.imageUrl}w1280/${img?.backdrop_path}?api_key=${Constants.apiKey}`;
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
          {img == null ? "": img.original_title}
        </p>
        <p className="fs-6 fs-md-6 fs-sm-6 text-light w-50">
          {img == null ? "": img.overview}
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
