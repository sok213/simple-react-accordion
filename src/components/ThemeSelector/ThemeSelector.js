import React, { Component } from 'react';
import s from './ThemeSelector.module.scss';

class ThemeSelector extends Component {
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
      ]
    }
  }
  render() {
    return (
      <div>
        <h3>Select Theme</h3>
        {this.state.themes.map((theme) => {
          return (
            <button>{theme}</button>
          );
        })}
      </div>
    );
  }
}

export default ThemeSelector;
