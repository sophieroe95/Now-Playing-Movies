import React from "react";
import styles from "./FeedbackPanel.module.scss";
type Props = {
  header: string,
  text: string,
  }
const FeedbackPanel: React.FC<Props> = ({header, text}) => {

  return (
    <section className={styles.background}>
      <div className={styles.feedback}>
        <h2>{header}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default FeedbackPanel;
