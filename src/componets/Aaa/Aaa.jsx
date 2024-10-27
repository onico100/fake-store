import styles from "./Aaa.module.css";

const Aaa = (props) => {
  return (
    <div className={styles.sidebar}>
      <p>counter: {props.counter}</p>
    </div>
  );
};

export default Aaa;
