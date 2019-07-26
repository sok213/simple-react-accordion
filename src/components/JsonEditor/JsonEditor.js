import React, { Component, Fragment } from 'react';
import s from './JsonEditor.module.scss';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

class JsonEditor extends Component {
  constructor() {
    super();
    this.state = {
      code: '[\n' + 
      ' { \n' +  
        '  "header": "What makes this accordion so special?",' + 
        '\n  "content": "This accordion is special because..." \n ' + 
      '}, \n' +
      ' { \n' +  
        '  "header": "What is love?",' + 
        '\n  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit " \n ' + 
      '}' +
     '\n]',
      options: { lineNumbers: true, json: true, lineWrapping: true }
    }
  }

  updateCode = newCode => {
    this.setState({ code: newCode });
  }

  changeTheme = activeTheme => {
    this.props.changeTheme(activeTheme);
  }

  render() {
    return (
      <div className={s.container}>
        <ThemeSelector 
          changeTheme={this.changeTheme}
        />
        <h3>JSON Data</h3>
        <CodeMirror
          style={{ height: "100%" }}
          value={this.state.code}
          onChange={this.updateCode}
          options={this.state.options}
        />
        <button 
          className={s.submitBtn}
          onClick={this.props.getEditorValue.bind(this, this.state.code)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default JsonEditor;
