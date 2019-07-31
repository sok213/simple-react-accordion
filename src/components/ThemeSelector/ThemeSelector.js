import React, { Component } from 'react';
import s from './ThemeSelector.module.scss';

class ThemeSelector extends Component {
  constructor() {
    super();

    this.state = {
      activeTheme: null,
      themes: [
        "basic",
        "minimal",
        "well",
        "dark",
        "professional",
      ]
    }
  }

  activeTheme = (theme) => {
    console.log("theme: ", theme)
    this.setState({ activeTheme: theme });
  }
  
  applyActiveStyle(theme) {
    if(this.state.activeTheme === theme) {
      return s.activeTheme;
    }
  }

  render() {
    return (
      <div className={s.container}>
        <h3>Select Theme</h3>
        {this.state.themes.map(theme => {
          return (
            <button 
              className={`
                ${s.themeBtn} 
                ${s[`${theme}Btn`]}
                ${this.applyActiveStyle(theme)}
              `}
              key={theme}
              onClick={(this.props.changeTheme.bind(this, theme), this.activeTheme.bind(this, theme))}
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
