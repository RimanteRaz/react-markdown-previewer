import React, { Component } from "react";
const DOMPurify = require("dompurify");
const marked = require("marked");

marked.setOptions({
  gfm: true,
  breaks: true,
});

class Preview extends Component {
  render() {
    const markdown = this.props.markdown;
    return (
      <div className="preview-box">
        <div className="box-head">
          <h5 className="box-title">Preview</h5>
        </div>
        <div className="box-body">
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(marked(markdown)),
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Preview;
