import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';
class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h1 className={s.title}>{title}</h1>
        {children}
      </section>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
