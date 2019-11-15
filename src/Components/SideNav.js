import React from "react";
import {connect} from 'react-redux'

const SideNav = props => {
  return (
    <div>
      <ul id="slide-out" className="sidenav  lighten-3">
        <li>
          <div class="user-view">
            <div class="background  "></div>
            <a href="#user">
              <img
                className="circle"
                src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                alt=""
              />
            </a>
            <a href="#name">
              <span className="black-text name ">Kenzo Ymc</span>
            </a>
            <a href="#email">
              <span className="black-text email">kenzoymc5@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <a href="#!">Explore</a>
        </li>
        <li>
          <a href="#!">History</a>
        </li>

        <li>
          <a className="modal-trigger" data-target="modal1">
            Add Books
          </a>
        </li>
      </ul>
      <div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4
              style={{
                color: "black"
              }}
            >
              Add an Book
            </h4>
            <div className="row">
              <form className="col s12" onSubmit={props.onSubmit}>
                <div className="row modal-form-row">
                  <div className="input-field col s12">
                    <input
                      name="tittle"
                      id="tittle"
                      type="text"
                      className="validate"
                      value={props.title}
                      onChange={props.onChange}
                    />
                    <label htmlFor="tittle">Title</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="author"
                      id="author"
                      type="text"
                      className="validate"
                      value={props.author}
                      onChange={props.onChange}
                    />
                    <label htmlFor="author">Author</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="image_url"
                      id="image_url"
                      type="text"
                      className="validate"
                      value={props.image_url}
                      onChange={props.onChange}
                    />
                    <label htmlFor="author">Image_url</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="description"
                      id="description"
                      type="text"
                      className="validate"
                      value={props.description}
                      onChange={props.onChange}
                    />
                    <label htmlFor="description">Description</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <select
                      name="status"
                      id="status"
                      type="text"
                      className="validate"
                      value={props.status}
                      onChange={props.onChange}
                    >
                      {props.statusDropDown}>
                                     
                    </select>
                    <label htmlFor="genre">Status</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <select
                      name="genre"
                      id="genre"
                      type="text"
                      className="validate"
                      value={props.genre}
                      onChange={props.onChange}
                    >

                      {props.genreDropDown}
                    </select>
                    <label htmlFor="genre">Genre</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className=" modal-action modal-close waves-effect waves-green btn green top z-depth-5"
                    style={{ marginBottom: "20px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
