import React, { Component } from 'react';
import s from './ThemeSelector.module.scss';

class ThemeSelector extends Component {
  constructor() {
    super();

    this.state = {
      themes: [
        "basic",
        "minimal",
        "well",
        "dark",
        "professional",
      ]
    }
  }
  
  render() {
    return (
      <div className={s.container}>
        <h3>Select Theme</h3>
        {this.state.themes.map(theme => {
          return (
            <button 
              className={`${s.themeBtn} ${s[`${theme}Btn`]}`}
              key={theme}
              onClick={this.props.changeTheme.bind(this, theme)}
            >
              {theme}
            </button>
          );
        })}
      </div>
    );
  }
}

export default ThemeSelector;
