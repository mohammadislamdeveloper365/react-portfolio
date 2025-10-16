import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './SearchInput.module.css'
import Button from '../Button/Button';

export default function SearchInput(props) {
  const [searchItem, setSearchItem] = useState("");
  const { className, placeholder, name, handleSearchClick } = props;

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
      handleClick: handleSearchItem
    }
  }

  function getSearchInputProps(){
    return {
      className: classNames(className),
    }
  }
  
   function handleSearchItem(){
        handleSearchClick(searchItem);
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
