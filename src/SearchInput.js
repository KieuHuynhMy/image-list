import React, { Component } from "react";

export default class SearchInput extends Component {
  //   onInputChange(e) {
  //     console.log(e.target.value);
  //   }
  constructor(props) {
    super(props);
    this.state = { entry: "" };

    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // onFormSubmit(e) {
  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.entry);
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                // onChange={this.onInputChange}
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                }
                value={this.state.entry}
              />
              <i className="icon search"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
