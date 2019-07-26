import React, { Component } from 'react';
import s from './App.module.scss';
import JsonEditor from './components/JsonEditor/JsonEditor';
import AccordionView from './components/AccordionView/AccordionView';

// TODO:
// 1) Update theme button styles.
// 2) Create theme css classes.
// 3) Create editor panel on mobile.
// 4) Update dimensions to accomodate accordion text length sizes.

class App extends Component {
  constructor() {
    super();

    this.state = {
      themes: [
        "basic",
        "minimal",
        "transparent",
        "thick",
        "dark",
        "professional",
      ],
      activeTheme: "basic",
      items: [
        {
          header: "What makes this accordion so special?",
          content: "This accordian is special because..."
        },
        {
          header: "What is love?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit "
        }
      ]
    }
  }

  componentDidMount() {
    console.log(this.state.items[1].content.length);
  }

  getEditorValue = editorValue => {
    this.setState({ items: JSON.parse(editorValue) });
  }

  changeTheme = (selectedTheme) => {
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
