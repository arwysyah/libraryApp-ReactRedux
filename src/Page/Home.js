import React, { Component } from "react";
import Navbar from "../Components/NavBar";
import { connect } from "react-redux";
// import M from "materialize-css";
import Carousel from "../Components/Carousel";
import SideNav from "../Components/SideNav";
import ListCards from "../Components/ListCards";
import { getBook } from "../Components/Redux/Actions/books";
import { postBook } from "../Components/Redux/Actions/books";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      tempBooks: {
        tittle: "",
        author: "",
        image_url: "",
        description: "",
        status: "",
        genre: ""
      },
      data: [],
      show: false
    };
  }
  async componentDidMount() {
    console.log("didmount");

    // const elems = document.querySelectorAll(".carousel");
    // const options = {
    //   shift: 130,
    //   duration: 100
    // };
    // M.Carousel.init(elems, options);

    await this.props.dispatch(getBook());
    this.setState({
      data: this.props.data.bookData, // bookData dari reducer
    });
    // M.AutoInit();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      tempBooks: { ...this.state.tempBooks, [name]: value }
    });
  };

  handleonSubmit = event => {
    event.preventDefault();
    console.log("ini handle on Submit");

    const {
      tittle, // karena sudah di declare disini jadi this.state.tempbooksnya berubah menjadi title doang
      author,
      image_url,
      description,
      status,
      genre
    } = this.state.tempBooks;

    const newBook = { 
      tittle:tittle,  // ini yang bakal di post ke database, jadi namanya harus dissesuain
      author, 
      image_url, 
      description, 
      status, 
      genre 
    };
    console.log({ hasilsubmit: newBook });// parameternya dalah new book (bagian terakhhir dari add book)
    this.props.dispatch(postBook(newBook)).then(()=>{
      window.location.href="/"
    })
  };

  render() {
    const {
      tittle, // karena sudah di declare disini jadi this.state.tempbooksnya berubah menjadi title doang
      author,
      image_url,
      description,
      status,
      genre
    } = this.state.tempBooks;
    console.log(this.state.data);
    return (
      <div className="home">
        <Navbar />
        <SideNav
          tittle={tittle} // disini berubah namanya disederhanakan
          author={author} //namaprops = nilai props
          image_url={image_url}
          description={description}
          status={status}
          genre={genre}
          onChange={this.handleChange.bind(this)}
          onSubmit ={this.handleonSubmit.bind(this)}
        />
        <Carousel />

        <div className="container">
          <h4
            style={{
              marginBottom: "30px",
              paddingLeft: "5px"
            }}
          >
            List Novels
          </h4>
          <div className="row">
            {this.state.data.map((book, index) => {
              return (
                <ListCards
                
                  alt={book.tittle.trim()}
                  to={`/Sinopsis/${book.id}`}
                  id={index}
                  key={index}
                  title={book.tittle}
                  img={book.image_url}
                  description={book.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.getBooks,
    datapost : state.postBook //namaProps (terserah): state.nama file di reducer folder yang di import dari index.js
  };
};
export default connect(mapStateToProps)(Home); // menggabungin redux
