import React, {useState} from "react";
import styles from "./Filter.module.scss";

const Filter = (props) => {
  const {getPopularMovies} = props;

const refresh = () => {window.location.reload(false);}

  return (
    <div className={styles.filter}>
      <h2>Filter by:</h2>
      <div>
      <label for="popularMovies">Get Popular Movies</label><br></br>
      <input id ="popularMovies"type="checkbox" onClick={getPopularMovies}/>
      <div>
      <button onClick={refresh}>Clear filter</button>
      </div>
      </div>
    </div>
  );
};

export default Filter;
