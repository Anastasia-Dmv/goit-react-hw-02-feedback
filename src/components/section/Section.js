import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export default class Section extends Component {
    render() {
const {title, children} = this.props
        return (
            <>
                 <h2>{title}</h2>
                 {children}

            </>
        )
    }
}
Section.propTypes={
    title: PropTypes.string,
   // children: PropTypes.element,//? ошибка в консоли
}