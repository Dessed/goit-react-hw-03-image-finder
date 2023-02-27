import React, { Component } from "react";
import { SearchbarHeader } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    name: '',
  };
  
  handleChange = name => {
    this.setState({name});
  }; 
  
  render () {
    const handleChange = this.handleChange;
    const { name } = this.state;

    return (
      <div>
          <SearchbarHeader dataName={handleChange}/>
          <ImageGallery nameImg={name}/>
      </div>
    )
  }
};

