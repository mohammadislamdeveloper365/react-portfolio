import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './Restaurant.module.css';

export default function Restaurant() {
  const [ menus, setMenus ] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(res=>res.json()).then(res=>setMenus(res)
  ).catch(error=> console.log(error));
  }, []);

    function getSearchInputProps(){
        return {
            className: {
              [styles.searchInput]: true
            },
            name: "search-menu",
            placeholder: "Search for your menu"
        }
    }

    function getCardProps(menu){
        return {
            menu,
            className: {
                [styles.card]: true
            }
        }
    }
    
    function getImageProps(menu){
        return {
            src: menu.strCategoryThumb,
            className: styles.menuImage
        }
    }

    function renderMenuCard(menu){
        return (
        <Card  key={menu.idCategory} {...getCardProps(menu)}>
          <div>
            <img  {...getImageProps(menu)} alt={menu.strCategoryThumb}/>
            <h2 className={styles.menuHeader}>
              Item category: {menu.strCategory}
            </h2>
            <p className={styles.menuDescription}>{menu.strCategoryDescription}</p>
          </div>
        </Card>
        );
    }
  return (
    <div>
      <SearchInput {...getSearchInputProps()}/>
      <div className={styles.restaurantPageContainer}>
        {menus?.categories?.map(menu => renderMenuCard(menu))}
      </div>
    </div>
  )
}
