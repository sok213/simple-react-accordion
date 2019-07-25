import React, { Component } from 'react';
import s from './JsonEditor.module.scss';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

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
        '\n  "content": "This accordion is special because..." \n ' + 
      '}' +
     '\n]',
      options: { lineNumbers: true, json: true, lineWrapping: true}
    }
  }

  updateCode = (newCode) => {
    this.setState({ code: newCode });
  }

  render() {
    return (
      <div className={s.container}>
        JSON DATA
        <CodeMirror 
          style={{height: "100%"}}
          value={this.state.code} 
          onChange={this.updateCode} 
          options={this.state.options} 
        />
        <button onClick={this.props.getEditorValue.bind(this, this.state.code)}>Submit</button>
      </div>
    );
  }
}

export default JsonEditor;
