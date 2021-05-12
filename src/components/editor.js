import React, { Component } from "react";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onInputChange(event.target.value);
  }
  render() {
    const markdown = this.props.markdown;
    return (
      <div className="editor-box">
        <div className="box-head">
          <h5 className="box-title">Editor</h5>
        </div>
        <div className="box-body">
          <textarea
            id="editor"
            placeholder="Enter your text here..."
            value={markdown}
            onChange={this.handleChange}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Editor;
