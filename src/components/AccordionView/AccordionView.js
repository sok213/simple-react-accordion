import React, { Component } from 'react';
import s from './AccordionView.module.scss';

class AccordionView extends Component {
  
  generateAccordion = () => {
    return this.props.items.map((item, key) => {
      return (
        <div key={key}>
          <input type="radio" name="panel" id={`panel-${key}`} />
          <label htmlFor={`panel-${key}`}>{item.header}</label>
          <div className={`${s.accordion__content} ${s.accordion__contentSmall}`}>
            <p className={s.accordion__body}>{item.content}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={s.accordion}>
        {this.generateAccordion()}
      </div>
    );
  }
}

export default AccordionView;
