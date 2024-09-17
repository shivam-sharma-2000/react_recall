import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io"; // For Material Design icons

function NavBar() {
    return <nav
        className="ps-5 pe-5 navbar navbar-expand-lg navbar-dark bg-dark opacity-75" style={{
            backdropFilter: 'blur(10px)', 
            WebkitBackdropFilter: 'blur(10px)', 
        }}>
        <div className="container-fluid">
            <a
                className=" display-4 fw-bold navbar-brand text-white"
                href="/"
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
                            href="/"
                        >
                            Home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            className="nav-link text-white active"
                            aria-current="page"
                            href="/movies"
                        >
                            Movies
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            className="nav-link text-white active"
                            aria-current="page"
                            href="/series"
                        >
                            Series
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            className="nav-link text-white active"
                            aria-current="page"
                            href="kids"
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
    </nav>;
}

export default NavBar;