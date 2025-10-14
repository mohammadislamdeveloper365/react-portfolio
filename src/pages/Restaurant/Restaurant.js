import React from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './Restaurant.module.css';

export default function Restaurant() {
    function getSearchInputProps(){
        return {
            className: {
              [styles.searchInput]: true
            },
            name: "search-menu",
            placeholder: "Search for your menu"
        }
    }

  return (
    <div>
      <SearchInput {...getSearchInputProps()}/>
      <div className={styles.restaurantPageContainer}></div>
    </div>
  )
}
