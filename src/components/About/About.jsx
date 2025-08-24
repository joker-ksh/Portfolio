import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3 style={{color : '#90EE90'}}>MERN stack developer</h3>
              <p>
              I am full stack developer with knowledge of MERN stack and speciallized in backend development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3 style={{color : '#90EE90'}}>Clouds and DevOps</h3>
              <p>
              I have a strong grasp of cloud technologies and DevOps practices, enabling efficient deployment and scaling of applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 style={{color : '#90EE90'}}>Generative AI and Machine Learning</h3>
              <p>
              I'm passionate about machine learning and generative AI, staying updated with the latest trends.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
