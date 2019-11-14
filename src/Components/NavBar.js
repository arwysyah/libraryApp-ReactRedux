import React from "react";
import "./NavBar.css";
import AllCategories from "./Data/AllCategories";
import AllTimes from "./Data/Alltimes";
const NavBar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper grey lighten-5">
        <a href="slide" data-target="slide-out" className="sidenav-trigger ">
          <i className="material-icons black-text">menu</i>
        </a>

        <ul>
          <img
            className="image-thumbn right height = 30px"
            src="https://image.flaticon.com/icons/svg/2169/2169566.svg"
            alt=""
          />
        </ul>

        <ul className="left hide-on-med-and-down">
          <li>
            <a href="sl">
              <i
                data-target="slide-out"
                className="material-icons sidenav-trigger left black-text"
              >
                menu
              </i>
            </a>
          </li>
          <li>
            <a
              href="waktu"
              className="dropdown-trigger black-text "
              data-target="AllCategories"
            >
              All Categories
              <i className="material-icons black-text right">arrow_drop_down</i>
              <ul id="AllCategories" className="dropdown-content black-text">
                {AllCategories.map((categorie, indexs) => {
                  return (
                    <li key={indexs}>
                      <a href="#">{categorie}</a>
                    </li>
                  );
                })}
              </ul>
            </a>
          </li>

          <li>
            <a
              href="waktu"
              className="dropdown-trigger black-text "
              data-target="AllTimes"
            >
              All Times
              <i className="material-icons black-text right">arrow_drop_down</i>
              <ul id="AllTimes" className="dropdown-content black-text">
                {AllTimes.map((year, index) => {
                  return (
                    <li key={index}>
                      <a href="#">{year}</a>
                    </li>
                  );
                })}
              </ul>
            </a>
          </li>
          <li>
                {props.children}

                
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
