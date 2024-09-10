import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io"; // For Material Design icons
import { FaPlay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./component/Card";

function APP() {
  const image: String = "https://images5.alphacoders.com/136/1364024.jpeg";
  const latestMovies: string[] = [
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjcsIFNlcCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00310216-pxzjbvewvz-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTAsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00357490-jjwckjgkqp-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjUsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383474-zvygtyjgnp-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTAsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379391-ezhhvjsnsa-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
  ];
  return (
    <>
      <div
        className="fullscreen-background bg-bark"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="p-5 overlay">
          <nav className="p-4 navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container-fluid">
              <a
                className=" display-4 fw-bold navbar-brand text-white"
                href="#"
              >
                Moobie
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link text-white active"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-white active"
                      aria-current="page"
                      href="#"
                    >
                      Movies
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-white active"
                      aria-current="page"
                      href="#"
                    >
                      Series
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-white active"
                      aria-current="page"
                      href="#"
                    >
                      Kids
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <CiSearch className="m-2" size={20} color="white" />
                  <IoMdNotificationsOutline
                    className="m-2"
                    size={20}
                    color="white"
                  />
                </form>
              </div>
            </div>
          </nav>
          <div>
            <div>
              <h1 className="display-5 fw-bold">Deadpool & Wolverine</h1>
              <p className="w-50">
                Deadpool's peaceful existence comes crashing down when the Time
                Variance Authority recruits him to help safeguard the
                multiverse. He soon unites with his would-be pal, Wolverine, to
                complete the mission and save his world from an existential
                threat.
              </p>

              <button
                type="button"
                className="h6 mt-3 me-3 btn btn-light btn-cylindrical"
              >
                Watch Now
                <FaPlay className="ms-2" />
              </button>

              <button
                type="button"
                className="h6 mt-3 btn btn-dark btn-cylindrical"
              >
                Details
                <IoIosArrowForward className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="movie-card-cover absolute ms-5">
          <h3 className="text-light ">Trending Movies</h3>
          <div className="flex ">
            <div className="d-flex card-list">
              {latestMovies.map((imageUrl, index) => (
                <Card
                  key={index}
                  title={`Movie Title ${index + 1}`}
                  content={`Description for movie ${index + 1}`}
                  image={imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default APP;
