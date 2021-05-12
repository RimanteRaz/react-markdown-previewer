// import logo from "./logo.svg";
import React, { Component } from "react";
import Intro from "./components/intro";
import Editor from "./components/editor";
import Preview from "./components/preview";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { markdown: "" };
  }
  handleInputChange(input) {
    this.setState({ markdown: input });
  }
  componentDidMount() {
    this.setState({ markdown: initialMarkdown });
  }
  render() {
    return (
      <div className="App">
        <Intro />
        <Editor
          onInputChange={this.handleInputChange}
          markdown={this.state.markdown}
        />
        <Preview markdown={this.state.markdown} />
      </div>
    );
  }
}

const initialMarkdown = `# Preview Markdown

This preview text will display a few simple things you can do with Markdown. 
Learn more in this [Markdown guide](https://www.markdownguide.org/basic-syntax/).

## So what can I do?

#### Make lists

- Like this one.
- And while we're here...
- Let's format our text:
  - We can make it **bold**.
  - Change it to _italic_.
  - Maybe even ~~cross it out~~.

#### Display code

For inline code use single backticks: \`<div></div>\`

For code blocks use three:
\`\`\`
// this is multi-line code:

function example(firstLine, lastLine) {
  if (firstLine == '\`\`\`' 
      && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

#### Decorate

> Add a block quote!

###### Insert a table:

Column 1 | Column 2 | Column 3
-------- | -------- | --------
Item 1 | Item 2 | Item 3
Item 4 | Item 5 | Item 6

###### Embed an image:

![React Logo w/ Text](https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png)

`;

export default App;
