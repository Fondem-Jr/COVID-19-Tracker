import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <header>
    <Navbar className="px-4 text-white bg-pink-dark d-flex justify-content-between">
      <Link to="/" className="text-decoration-none text-white fw-bold">
        &#60; HOME
      </Link>
      <h3 className="m-0">COVID-19 CASE STATISTICS</h3>
      <span>
        <FontAwesomeIcon icon={faMicrophone} className="me-4" />
        <FontAwesomeIcon icon={faCog} />
      </span>
    </Navbar>
  </header>
);

export default Header;
