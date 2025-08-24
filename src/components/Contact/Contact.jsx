import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Email icon"
            width="30"
            height="30"
          />
          <a href="mailto:amanmaurya3721@gmail.com">
            amanmaurya3721@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn icon"
            width="30"
            height="30"
          />
          <a href="https://www.linkedin.com/in/aman-maurya-8941b926b/">
            linkedin.com/aman
          </a>
        </li>
        <li className={styles.link}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Github icon"
            width="30"
            height="30"
          />
          <a href="https://github.com/joker-ksh">github.com/aman</a>
        </li>
        <li className={styles.link}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode icon"
            width="30"
            height="30"
          />
          <a href="https://leetcode.com/u/joker-ksh/">leetcode/aman</a>
        </li>
      </ul>
    </footer>
  );
};
