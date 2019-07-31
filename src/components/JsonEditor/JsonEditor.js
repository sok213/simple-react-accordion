import React, { Component } from 'react';
import s from './JsonEditor.module.scss';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

class JsonEditor extends Component {
  constructor() {
    super();
    this.state = {
      code: '[\n' + 
      ' { \n' +  
        '  "header": "About this component",' + 
        '\n  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit." \n ' + 
      '},\n ' +
      '{\n' +  
        '  "header": "Documentation",' + 
        '\n  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit." \n ' + 
      '}, \n ' +
      '{ \n' +  
        '  "header": "What is the purpose?",' + 
        '\n  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit." \n ' + 
      '}, \n' +
      ' { \n' +  
      '  "header": "How do I use it?",' + 
      '\n  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit." \n ' + 
    '}, \n' +
    ' { \n' +  
    '  "header": "Can I provide feedback?",' + 
    '\n  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit." \n ' + 
  '}, \n' +
  ' { \n' +  
    '  "header": "How can I support the developer?",' + 
    '\n  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit." \n ' + 
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
        <h3 className={s.sectionHeader}>JSON Data</h3>
        <div className={s.codeMirrorContainer}>
          <CodeMirror
            value={this.state.code}
            onChange={this.updateCode}
            options={this.state.options}
          />
        </div>
        <div className={s.buttonContainer}>
          <button 
            className={s.submitBtn}
            onClick={this.props.getEditorValue.bind(this, this.state.code)}
          >
            Submit <FontAwesomeIcon icon={faCode} />
          </button>
        </div>
      </div>
    );
  }
}

export default JsonEditor;
