import React, { Component } from 'react';
import s from './AccordionView.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

class AccordionView extends Component {
  constructor() {
    super();

    this.state = {
      activeBar: null
    }
  }

  applyTheme = () => {
    if(this.props.theme === "basic") {
      return s.basic;
    } else if(this.props.theme === "minimal") {
      return s.minimal;
    } else if(this.props.theme === "well") {
      return s.well;
    } else if(this.props.theme === "dark") {
      return s.dark;
    } else if(this.props.theme === "professional") {
      return s.professional;
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

  minimalIcons(key) {
    if(this.props.theme === "minimal") {
      if(this.state.activeBar === key) {
        return (
          <FontAwesomeIcon 
            icon={faAngleUp} 
            className={s.upArrow} 
          />
        );
      }
      return <FontAwesomeIcon icon={faAngleDown} />
    }
  }

  activateBar = (key) => {
    this.setState({ activeBar: key });
  }

  generateAccordion = () => {
    return this.props.items.map((item, key) => {
      return (
        <div key={key} className={s.accordionBar}>
          <input 
            type="radio" 
            name="panel" 
            id={`panel-${key}`} 
            onClick={this.activateBar.bind(this, key)}
          />
            <label 
              htmlFor={`panel-${key}`} 
              className={s.accordion__header}
            >
              {item.header} 
              <span className={s.minimalIcons}>
                {this.minimalIcons(key)}
              </span>
            </label>
          <div 
            className={`
              ${s.accordion__content} 
              ${this.applySizeClass(item)}
            `}
          >
            <p className={s.accordion__body}>
              {
                item.content.length < 756 ?
                  item.content :
                    "ERROR: content must not exceed 756 characters." 
              }
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={s.container}>
        <h3 className={s.sectionHeader}>simple-react-accordion</h3>
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
