import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './SearchInput.module.css'
import Button from '../Button/Button';

export default function SearchInput(props) {
  const [searchItem, setSearchItem] = useState("");
  const { className, placeholder, name } = props;

  function getInputProps(){
    return {
      className: styles.searchInput,
      name,
      onChange: handleInputChange,
      placeholder,
      type: "text",
      value: searchItem
    }
  }
  
  function getButtonProps(){
    return {
      className: classNames(styles.searchButton),
      type: "button",
      handleClick: handleClick
    }
  }

  function getSearchInputProps(){
    return {
      className: classNames(className),
    }
  }
  
   function handleClick(){
        if(searchItem !== '') {
          console.log(searchItem)
        }
    }

  function handleInputChange(e) {
    setSearchItem(e.target.value)
  }

  return (
    <div {...getSearchInputProps()}>
      <input {...getInputProps()}/>
      <Button {...getButtonProps()}/>
    </div>
  )
}
