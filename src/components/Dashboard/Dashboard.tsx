import React from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../CardList";
import FeedbackPanel from "../FeedbackPanel";
import Imovie from "../../data/IMovie";

type Props = {
  movieList: Imovie[];
  className: string,
  }
  
const Dashboard: React.FC<Props> = ({movieList}) => {

  const contentJsx = movieList.length ? (
    <CardList movieList={movieList}/>
  ) : (
    <FeedbackPanel
      header="No matches"
      text="None of our movies matched that search"
    />
  );
  
  return <section className={styles.dashboard}>{contentJsx}</section>
};
export default Dashboard;
