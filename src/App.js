import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/Nav';


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <a className="menu-toggle rounded" href="#">
            <i className="fa fa-bars"></i>
          </a>
        </div>
        <div className="masthead">
          <div className="container">
            <h1 className="heading">Stylish Portfolio</h1>
            <h3 className="subHeading">
              <em>A Free Bootstrap Theme by Start Bootstrap</em>
            </h3>
            <a className="btn-xl" href="#about">Find Out More</a>
          </div>
          <div className="overlay"></div>
        </div>
        

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="">
                <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                <p className="lead">This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
                <a href="https://unsplash.com/">Unsplash</a>!</p>
                <a className="btn" href="#services">What We Offer</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
