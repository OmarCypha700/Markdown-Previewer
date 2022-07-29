import  React, { Component } from "react";
// import Editor from "./EditorComponent";
import Toolbar from "./ToolbarComponent";
// import Preview from "./PreviewComponent";
import './App.css';



const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://github.com/OmarCypha700), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

      ### Developed by [Omar Cypha](https://github.com/OmarCypha700)
      ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

window.marked.setOptions({
  breaks: true
  // highlight: function (code) {
  //   return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  // }
});
// Making links with _target Blank
const renderer = new window.marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends Component {
  
        state = { 
            input: placeholder
       } 

       onChange(newInput) {
        this.setState({input:newInput});
       }


  render() { 

    return (
      <div>
        <h1 id="title">Markdown Previewer</h1>
        <p id="creator">by  
        <a 
        href="https://github.com/OmarCypha700" 
        target='_blank' 
        rel='noreferrer'> OmarCypha</a>
        </p>
      
        <div className="container">
      <div className="editor">
        <Toolbar 
          text = "Editor" />

          <textarea 
              id="editor"
              type="text"
              value={this.state.input}
              onChange={(e)=>{this.onChange(e.target.value)}} />
      </div>  

        <div className="preview">
          <Toolbar
            text="Preview" />
          <article>
            <div
              id="preview"
              dangerouslySetInnerHTML={{
                __html: window.marked(this.state.input, {renderer: renderer})
              }}
            />
          </article>
        </div> 
        </div>
        </div>
      
    );
  }
}
 
export default App;


