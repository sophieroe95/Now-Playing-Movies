import React from "react";
import styles from "./NavBar.module.scss";
import Filter from "../Filter"
import moviedbicon from "../../data/1585407202899.png"

interface NavBarProps {
 getPopularMovies: (event: React.MouseEvent<HTMLInputElement, MouseEvent>)=> void;
 className: string;
  }
const NavBar: React.FC<NavBarProps> = ({getPopularMovies}) => {
  
  return (
    <div className={styles.navbar} >
      <h1> Now Playing Movies 🎞</h1>
      <Filter getPopularMovies={getPopularMovies} />
      <p className={styles.attribution}>Movie data from:
      <img src={moviedbicon} alt="The Movie DB Icon"/>
      </p>
    </div>
  );
};

export default NavBar;
