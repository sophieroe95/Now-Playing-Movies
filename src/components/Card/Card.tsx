import React from "react";
import styles from "./Card.module.scss";

type Props = {
  movie: {
    poster_path: string, original_title: string, overview: string, release_date: string, popularity: number, vote_average: number
  }
}

const Card: React.FC<Props> = ({movie: {poster_path, original_title, overview, release_date, popularity, vote_average}}) => {
 
  const rating:(popularity:number)=>string = (popularity) => popularity > 0 ? '⭐'.repeat(Math.floor(popularity/500)) : '';

  const formatDate: (input: string | null | undefined) =>string = input => {
    if (!input) return "No date available from database sorry!";
    else {let datePart: RegExpMatchArray | null = input.match(/\d+/g);
    if (!datePart) return "no data";
    let year: string | null = datePart[0].substring(2);
    if (typeof year !== "string") {return "no year"};
    let month: string | null = datePart[1];
    if (month === null) {return "no month"}
    let day: string | null = datePart[2];
    if (day === null) {return "no day"}
    else {
    return day+'/'+month+'/'+year;}
  }
}

  return (
    <>
    <div className={styles.card}>
      <img src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt={original_title} />
      <section className={styles.movieDetails}>
        <h2>{original_title}</h2>
        <p>
          <span></span>
        </p>
        <p>{overview}</p>
        <p><b>Release Date: </b>{formatDate(release_date)}</p>
        <p><b>The Movie DB Popularity Rating:</b> {popularity} {rating(popularity)}</p>
        <p><b>Voter Average:</b> {vote_average}</p>
      </section>
    </div>
    </>
  );
};

export default Card;
