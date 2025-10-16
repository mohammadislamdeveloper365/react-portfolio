import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import SearchInput from "../../components/SearchInput/SearchInput";
import styles from "./Restaurant.module.css";

export default function Restaurant() {
  const [menus, setMenus] = useState([]);
  const [searchMenu, setSearchMenu] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    if (searchMenu) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMenu}`
      )
        .then((res) => res.json())
        .then((res) => {
          setIsSelected(true);
          setMenus(res);
        })
        .catch(error => setError(error));
    } else {
       fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((res) => {
        setMenus(res);
        setSearchMenu('');
        setIsSelected(false);
    })
      .catch((error) => setError(error));
    }
  }, [searchMenu]);

  function getSearchInputProps() {
    return {
      className: {
        [styles.searchInput]: true,
      },
      name: "search-menu",
      handleSearchClick: findMenuItem,
      placeholder: "Search for your menu",
    };
  }

  function getCardProps(menu) {
    return {
      menu,
      className: {
        [styles.card]: true,
      },
    };
  }

  function getImageProps(menu) {
    return {
      src: menu.strCategoryThumb,
      className: styles.menuImage,
    };
  }

  function getMealImageProps(menu) {
    return {
      src: menu.strMealThumb,
      className: styles.menuImage,
    };
  }

  function findMenuItem(menu) {
    setSearchMenu(menu);
  }

  function renderMenuCard(menu) {
    let content = null;
    console.log(menu)
    if (!isSelected) {
      content = (
        <Card key={menu.idCategory} {...getCardProps(menu)}>
          <div>
            <img {...getImageProps(menu)} alt={menu.strCategoryThumb} />
            <h2 className={styles.menuHeader}>{menu.strMeal}</h2>
            <p className={styles.menuDescription}>
              {truncateWords(menu.strCategoryDescription)}
            </p>
          </div>
        </Card>
      );
    } else {
      console.log()
      content = (
        <Card key={menu.idMeal} {...getCardProps(menu)}>
          <div>
            <img {...getMealImageProps(menu)} alt={menu.strMealThumb} />
            <h2 className={styles.menuHeader}>{menu.strMeal}</h2>
            <p className={styles.menuDescription}>{truncateWords(menu.strInstructions)}</p>
          </div>
        </Card>
      );
    }

    return content;
  }

  function truncateWords(paragraph) {
    const words = paragraph.split(" ");
    return words.length > 80 
      ? words.slice(0, 80).join(" ") + "."
      : paragraph + (paragraph.endsWith(".") ? "" : ".");
  }
  return (
    <div>
      <SearchInput {...getSearchInputProps()} />
      <div className={styles.restaurantPageContainer}>
        {!isSelected
          ? menus?.categories?.map((menu) => renderMenuCard(menu))
          : menus?.meals?.map((menu) => renderMenuCard(menu))}

        {error && <p className={styles.errorMsg}>{"Something Went Wrong"}</p>}
      </div>
    </div>
  );
}
