import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./component/NavBar";
import Header from "./component/Header/Header";
import Body from "./component/Body/Body";
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';

function APP() {
  return (
    <>
      <NavBar />
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}
export default APP;
