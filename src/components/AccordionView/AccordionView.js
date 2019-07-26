import React, { Component } from 'react';
import s from './AccordionView.module.scss';

class AccordionView extends Component {
  applyTheme = () => {
    if(this.props.theme === "basic") {
      return s.basic;
    } else if(this.props.theme === "transparent") {
      return s.transparent
    } else if(this.props.theme === "thick") {
      return s.thick;
    } else if(this.props.theme === "dark") {
      return s.dark;
    } else if(this.props.theme === "professional") {
      return s.professional;
    } else if(this.props.theme === "minimal") {
      return s.minimal;
    }
  }

  applySizeClass({ content }) {
    if(content.length <= 284) {
      return s.accordion__contentSmall;
    } else if(content.length <= 484) {
      return s.accordion__contentMedium;
    } else {
      return s.accordion__contentLarge;
    }
  }

  generateAccordion = () => {
    return this.props.items.map((item, key) => {
      return (
        <div key={key}>
          <input type="radio" name="panel" id={`panel-${key}`} />
          <label htmlFor={`panel-${key}`}>{item.header}</label>
          <div 
            className={`
              ${s.accordion__content} 
              ${this.applySizeClass(item)}
            `}
          >
            <p className={s.accordion__body}>
              {item.content.length < 756 ? item.content : "ERROR: content must not exceed 756 characters." }
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={s.container}>
        <div className={`
          ${s.accordion} 
          ${this.applyTheme()}
        `}>
          {this.generateAccordion()}
        </div>
      </div>
    );
  }
}

export default AccordionView;
