import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  return (
    <nav id="Navbar" className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container px-lg-5">
        <Link href="/">
          <a className="navbar-brand">
            <img height="50" width="auto" src="/assets/img/codepolitan-logo.png" alt="Codepolitan" />
          </a>
        </Link>
        <button
          onClick={() => setIcon((icon) => !icon)}
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {icon ? icon && <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-lg-start">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                PROGRAM BELAJAR
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                ARTICLES
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                FORUM
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                MEMBERSHIP
              </a>
            </li>
          </ul>
          <div className="d-grid d-lg-block">
            <a className="btn btn-primary m-2 m-lg-1" href="">SIGN IN</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
