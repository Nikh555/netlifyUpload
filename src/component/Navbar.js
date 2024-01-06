import React, { useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {

  const setOffcanvasWidth = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    let screenWidth = window.innerWidth;
    if(screenWidth<"600" && screenWidth>"320"){
        let ratio = 0.7;
        let offCanvasWidth = screenWidth * ratio;
        offcanvas.style.width = offCanvasWidth + "px";
    }
  };

  useEffect(() => {
    setOffcanvasWidth();
    window.addEventListener('resize',()=>{setOffcanvasWidth()})
  }, []);

  return (
    <>
      <nav className="navbar navbar-dark fixed-top" id="lap">
        <div className="container-fluid">
          <ScrollLink className="navbar-brand" to="home" smooth={true} duration={50}>
            Medico-Mentarc
          </ScrollLink>
          <button
            id="offcanvasButton"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Medico-Mentarc
              </h5>
              <button id="close-btn" type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item ">
                  <ScrollLink className="nav-link active" aria-current="page" to="home" smooth={true} duration={50}>
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="notes" aria-disabled="true" smooth={true} duration={100}>
                    Notes
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="about" aria-disabled="true" smooth={true} duration={100}>
                    About
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
