import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";
 
const CardList = (props) => {
  const {movieList} = props;
  
  const getCardJsx = (movie) => (
    <div data-cy="card" className={styles.card} key={movie.id}>
      <Card movie={movie} />
    </div>
  );


  return <section data-cy="cardList" className={styles.cardList}>{movieList.map(getCardJsx)}</section>;
};

export default CardList;
