import React, { Component } from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  // async onSearchSubmit(entry) => {
  onSearchSubmit = async (entry) => {
    const rs = await axios.get(
      `https://pixabay.com/api/?key=26857599-45327b06200514a0bb29fd5ff&q=${entry}&image_type=photo`
    );
    // .then((r) => console.log(r)); // dung aync ko can dung then
    this.setState({
      images: rs.data.hits,
    });
    // console.log(rs.data.hits);
    // console.log(rs);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <div>We have {this.state.images.length} images</div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
