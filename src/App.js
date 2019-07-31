import React, { Component } from 'react';
import s from './App.module.scss';
import JsonEditor from './components/JsonEditor/JsonEditor';
import AccordionView from './components/AccordionView/AccordionView';

// TODO:
// 1) Update theme button styles.
// 2) Create theme css classes.
// 3) Create json invalid value catch message.
// 4) Build NPM package.

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeTheme: "basic",
      items: [
        {
          header: "About this component",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit."
        },
        {
          header: "Documentation",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit."
        },
        {
          header: "Why use this NPM package?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit."
        },
        {
          header: "Can I provide feedback?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit."
        },
        {
          header: "How can I support the developer?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit."
        }
      ]
    }
  }

  getEditorValue = editorValue => {
    this.setState({ items: JSON.parse(editorValue) });
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
