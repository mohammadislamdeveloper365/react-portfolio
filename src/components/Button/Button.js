import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

export default function Button(props) {
    const { className, handleClick, type } = props;

    function getButtonProps(){
    return {
      className: classNames(styles.searchButton, className),
      type,
      onClick: handleClick
    }
  }

  return <button {...getButtonProps()}>Search</button>;
}
