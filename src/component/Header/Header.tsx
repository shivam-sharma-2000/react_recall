import './Header.css'
import { FaPlay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Header() {
    const image: string = "https://images5.alphacoders.com/136/1364024.jpeg";
    return <div className="header">
        <div
            className="header-hero"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 1), rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 1)), url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
            }}>
        </div>
        <div className='ps-5 header-content'>
            <p className="fs-2 fs-sm-6 fw-bold text-light" >Deadpool & Wolverine</p>
            <p className="fs-6 fs-md-6 fs-sm-6 text-light w-50">
                Deadpool's peaceful existence comes crashing down when the Time
                Variance Authority recruits him to help safeguard the
                multiverse.
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
    </div>;
}
export default Header