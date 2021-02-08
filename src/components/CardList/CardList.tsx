import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";
import Imovie from "../../data/IMovie";

interface CardListProps {
 movieList: Imovie[],
  }
const CardList: React.FC<CardListProps>= ({movieList}) => {

  const getCardJsx = (movie: Imovie) => (
    <div data-cy="card" className={styles.card} key={movie.id}>
      <Card movie={movie} />
    </div>
  );


  return <section data-cy="cardList" className={styles.cardList}>{movieList.map(getCardJsx)}</section>;
};

export default CardList;
