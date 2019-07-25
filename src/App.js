import React, { Component } from 'react';
import s from './App.module.scss';
import JsonEditor from './components/JsonEditor/JsonEditor';
import AccordionView from './components/AccordionView/AccordionView';

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
          content: "This accordian is special because..."
        }
      ]
    }
  }

  getEditorValue = editorValue => {
    this.setState({ items: JSON.parse(editorValue) });
  }

  changeTheme = (selectedTheme) => {
    console.log('hi.')
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
