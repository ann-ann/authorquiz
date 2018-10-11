import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';

const books = [
]

const author = {
  imageUrl: "https://static.gazeta.ua/img/cache/gallery/554/554199_1_w_300.jpg?v=0"
}

function Hero(){
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Turn({author, books}){
  return(
    <div className="row turn" style={{backgroundColor: "white"}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author"/>
      </div>
      <div className="col-6">
        {books.map((title) => <p>{title}</p>)}
      </div>
    </div>
  );
}

function Continue(){
  return null;

}
function Footer(){
  return(
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">All images are from
          <a href="https://commons.wikimedia.org/wiki/Main_Page">Wicipedia Commons </a>
              and are in the public domain
        </p>
      </div>
    </div>
 );
}

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn author = {author} books = {books} />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default AuthorQuiz;
