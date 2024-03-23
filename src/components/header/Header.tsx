import { BsFire } from "react-icons/bs";
import styles from "./Header.module.scss";
import React from "react";
import { useFavorites } from "../../hooks/useFavorites";

const Header = () => {
  const favorites = useFavorites();
  return (
    <header className={styles.header}>
      <BsFire />
      <span className={styles.number}>{favorites.length}</span>
    </header>
  );
};

export default Header;
