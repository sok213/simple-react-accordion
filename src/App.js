import React, { Component } from 'react';
import s from './App.module.scss';
import JsonEditor from './components/JsonEditor/JsonEditor';
import AccordionView from './components/AccordionView/AccordionView';

// TODO:
// 1) Update content within each section.
// 4) Build NPM package.

class App extends Component {
  constructor() {
    super();

    this.state = {
      validateJson: null,
      activeTheme: "basic",
      items: [
        {
          header: "About this component",
          content: "simple-react-accordion is a React component that takes in JSON data as a prop and generates an accordion. It’s very easy to use and offers 5 pre-built in themes. If you need a quick way to implement a simple accordion within your React app, simple-react-accordion is the perfect solution!"
        },
        {
          header: "Documentation",
          content: "You can find the documentation at the NPM page here - https://www.npmjs.com/package/simple-react-accordion"
        },
        {
          header: "Why use this NPM package?",
          content: "Simple-react-accordion is a passion project built by @just_soak_it_in and will forever be supported and improved based on feedback. It’s easy to use, lightweight, and can easily be customized when forked."
        },
        {
          header: "Can I provide feedback?",
          content: "Yes! Feedback is very much appreciated and all great ideas will most likely be implemented. Contact the developer through email - sokcodes@gmail.com or Instagram - @just_soak_it_in. Also, feel free to contribute to this project if you’d like on Github - https://github.com/sok213/simple-react-accordion"
        },
        {
          header: "How can I support the developer?",
          content: "You can support me by following me on Instagram - @just_soak_it_in to see what cool things (or lame things) that I am doing."
        }
      ]
    }
  }

  getEditorValue = editorValue => {
    try {
      this.setState({ 
        items: JSON.parse(editorValue), 
        validateJson: null 
      });
    } catch(e) {
      this.setState({ 
        validateJson: "JSON data is an invalid format. Please, check your formatting." 
      });
    }
  }

  changeTheme = selectedTheme => {
    this.setState({ activeTheme: selectedTheme });
  }

  render() {
    return (
      <div className={s.container}>
        <JsonEditor 
          changeTheme={this.changeTheme}
          items={this.state.items} 
          getEditorValue={this.getEditorValue}
          errorMessage={this.state.validateJson}
        />
        <AccordionView 
          activeTheme={this.state.activeTheme} 
          items={this.state.items}
          theme={this.state.activeTheme}
        />
      </div>
    );
  }
}

export default App;
