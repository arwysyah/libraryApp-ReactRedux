import React, { Component } from "react";
import "./Sinopsis.css";
import { Link } from "react-router-dom";
import EditModal from "../Components/editModal";
import M from "materialize-css";
import { connect } from "react-redux";
import { getBookbyId } from "../Components/Redux/Actions/books";
import { putBook } from "../Components/Redux/Actions/books";
import { deleteBook } from "../Components/Redux/Actions/books";
import swal from 'sweetalert'

class Sinopsis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tempbooks: {
        tittle: "",
        author: "",
        image_url: "",
        description: "",
        status: "",
        genre: ""
      }
    };
  }
  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.dispatch(getBookbyId(id)); // id dari variabel dimasukanna

    this.setState({
      data: this.props.data.bookData,
      tempbooks: this.props.data.bookData //tempbook agar data yang ditampilin tidak nerubah
    });
    M.AutoInit();
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      tempbooks: { ...this.state.tempbooks, [name]: value }
    });
  };

  handleDelete = event => {
    const { id } = this.props.match.params;
    event.preventDefault()

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (klikOk) => {
      if (klikOk) {
        await this.props.dispatch(deleteBook(id)).then(() => 
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        }).then(() => window.location.href = '/')
        )

      } else {
        swal("Your imaginary file is safe!");
      }
    });

    console.log('Ini Delete')
  }

  handleonSubmit = event => {
    const { id } = this.props.match.params;

    event.preventDefault();
    console.log("ini handle on Submit");
    const {
      tittle,
      author,
      image_url,
      description,
      genre,
      status
    } = this.state.tempbooks;

    const newEdit = { 
      tittle:tittle,  // ini yang bakal di post ke database, jadi namanya harus dissesuain
      author, 
      image_url, 
      description, 
      status, 
      genre 
      }
      console.log({ hasilsubmit: newEdit });// parameternya dalah new book (bagian terakhhir dari add book)
      this.props.dispatch(putBook(newEdit, id)).then(()=> window.location.href="/")
  };
  

  render() {
    const {
      // untuk mempersingkat penamaan
      tittle, // karena sudah di declare disini jadi this.state.tempbooksnya berubah menjadi title doang
      author,
      image_url,
      description,
      status,
      genre
    } = this.state.tempbooks;

    // const {img,  btitle, description,author }= this.state.boo
    console.log(this.state.data);

    return (
      <div>
        <div
          className="background"
          style={{ backgroundImage: `url(${this.state.data.image_url})` }}
        >
          {/* <p>
           < a className="waves-effect waves-light btn" style= {{marginLeft:"1200px"}}>BUTTON</a>
          
           </p> */}
          <div class="row">
            <Link to={"/"}>
              <div class="col s12">
                {" "}
                <a href
                  className="button_back black-text btn "
                  style={{
                    width: "80px",

                    fontSize: "10px",
                    borderRadius: "10px",
                    height: "30px"
                  }}
                >
                  BACK
                </a>
              </div>
            </Link>
            <div class="col s6">
              <div id="button bold" style={{ marginTop: "10px" }}>
                <button
                  className="waves-effect waves-light black-text btn modal-trigger "
                  data-target="editmodal1"
                  style={{ marginRight: "10px",
                    width: "80px",

                    fontSize: "10px",
                    borderRadius: "10px",
                    height: "30px"
                  }}
                >
                  EDIT
                </button>
                <button
                onClick={this.handleDelete.bind(this)}
                  className="waves-effect waves-light black-text btn modal-trigger "
                  style={{ 
                    width: "80px",
                    fontSize: "10px",
                    borderRadius: "10px",
                    height: "30px"
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
        {
          <div className="smallcard">
            <img src={this.state.data.image_url} />
          </div>
        }

        <a href
          className="left waves-effect waves-light btn "
          style={{
            width: "80px",
            margin: "20px",
            fontSize: "10px",
            borderRadius: "10px",
            height: "30px"
          }}
        >
          Novel
        </a>
        <div className="card-content1">
        <h2  style={{ marginTop: "10px", fontSize: `20px`, textAlign: "right" , color: "green"}}> Available </h2>
          <h1
            style={{ marginTop: "30px", fontSize: `25px`, textAlign: "center" }}
          >
            {this.state.data.tittle}
          </h1>
          
          <p style={{ width: "auto", textAlign: "justifyContent" , fontfamily: 'Source Sans Pro'}}>
            {this.state.data.description}
          </p>
        </div>
        <EditModal
          tittle={tittle} // disini berubah namanya disederhanakan
          author={author} //namaprops = nilai props
          image_url={image_url}
          description={description}
          status={status}
          genre={genre}
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleonSubmit.bind(this)}
          // image_url={this.state.tempbooks.image_url}
          // title={this.state.data.tittle}
          // description={this.state.data.description}
          // onSubmit={this.handleonSubmit}
          // onChange={this.handleChange}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.getByID,
    editBooks: state.putBook,
    deleteBooks: state.deleteBook //namaProps : state.nama file di reducer folder yang di import dari index.js
  };
};
export default connect(mapStateToProps)(Sinopsis); // menggabungin redux
