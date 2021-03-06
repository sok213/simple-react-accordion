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
        '\n  "content": "Simple-react-accordion is a React component that takes in an array of objects as a prop and generates an accordion. It’s very easy to use and offers 5 pre-built in themes. If you need a quick way to implement a simple accordion within your React app, simple-react-accordion is the perfect solution!" \n ' + 
      '},\n ' +
      '{\n' +  
        '  "header": "Documentation",' + 
        '\n  "content": "You can find the documentation at the NPM page here - https://www.npmjs.com/package/simple-react-accordion." \n ' + 
      '}, \n ' +
      '{ \n' +  
        '  "header": "Why use this NPM package?",' + 
        '\n  "content": "simple-react-accordion is a passion project built by Sophanarith Sok and will forever be supported and improved based on feedback. It’s easy to use, lightweight, and can easily be customized when forked." \n ' + 
      '}, \n' +
      '{ \n' +  
        '  "header": "Can I provide feedback?",' + 
        '\n  "content": "Yes! Feedback is very much appreciated and all great ideas will most likely be implemented. Contact the developer through email - sokcodes@gmail.com. Also, feel free to contribute to this project if you’d like on Github - https://github.com/sok213/simple-react-accordion." \n ' + 
      '}, \n' +
      '{ \n' +  
        '  "header": "How can I support the developer?",' + 
        '\n  "content": "You can support me by simply using this component in your app. :)" \n ' + 
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
        <h3>Links</h3>
        <div className={s.links}>
          <a href="https://www.npmjs.com/package/simple-react-accordion" target="_blank"><p>View package on npmjs</p></a>
          <a href="https://github.com/sok213/simple-react-accordion-npm-package" target="_blank"><p>View source code on GitHub</p></a>
        </div>
        <ThemeSelector 
          changeTheme={this.changeTheme}
        />
        <h3 className={s.sectionHeader}>JSON Data</h3>
        {
          this.props.errorMessage && 
          <div className={s.errorMessage}>
            {this.props.errorMessage}
          </div>
        }
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
