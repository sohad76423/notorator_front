import React, { Component } from "react";

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      snippetType: "",
      content: "",
      author: "",
      url: "",
      tags: "",
    };
  }

  //Creating personal change function
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //Adding Submit button
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form>
        <input
          name="Title"
          placeholder="Title"
          value={this.state.Title}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="snippetType"
          placeholder="snippetType"
          value={this.state.snippetType}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="author"
          placeholder="author"
          value={this.state.author}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="url"
          placeholder="url"
          value={this.state.url}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="tags"
          placeholder="Tags"
          value={this.state.tags}
          onChange={(e) => this.change(e)}
        />
        <br />
        <button onClick={(e) => this.onSubmit()}>Submit</button>
      </form>
    );
  }
}
export default Assets;
