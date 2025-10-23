import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.css';

const Input = (props) => {
    const { type, placeholder, className, handleInputChange, value } = props;

    const getInputProps = (e) =>({
            className: getClassName(),
            placeholder,
            type,
            onChange: handleChange,
            value   
        });


    function getClassName() {
        return classNames({
            [styles.input]: true,
            [className]: true
        });
    }

    function handleChange(e) {
        handleInputChange(e);
    }

  return (
    <input  {...getInputProps()}/>
  )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

export default Input
