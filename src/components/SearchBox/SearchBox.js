import React from 'react'
import { FaSearch } from "react-icons/fa";
import styles from './SearchBox.module.css'

const SearchBox = ({ children, className, handleSearchClick }) => {
    function getSearchIconProps() {
        return {
            className: styles.searchIcon,
            onClick: handleSearchClick
        }
    }

  return (
    <div className={className}>
      { children }
      <FaSearch {...getSearchIconProps()} />
    </div>
  )
}

export default SearchBox
