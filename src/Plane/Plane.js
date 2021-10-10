import styles from "./my-style.module.css";
import "./my-sass.scss";

const Plane = () => {
  return (
    <>
      <h1 className={styles.bigblue}>It's a plane!</h1>;
      <p>Not a bird!</p>
    </>
  );
};

export default Plane;
