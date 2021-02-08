import React, {useState} from "react";
import styles from "./Filter.module.scss";

interface FilterProps {
  getPopularMovies: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
   }
const Filter: React.FC<FilterProps> = ({getPopularMovies}) => {

const [isClicked,setIsClicked] = useState(false)
const handleChange = (e: any) => {
  setIsClicked(!isClicked);
  isClicked ? window.location.reload(false) : getPopularMovies(e);
}

  return (
    <div className={styles.filter}>
      <h2>Filter by:</h2>
      <div>
      <label htmlFor="popularMovies">Get Popular Movies</label><br></br>
      <input id ="popularMovies"type="checkbox" onChange={handleChange}/>
      </div>
    </div>
  );
};

export default Filter;
