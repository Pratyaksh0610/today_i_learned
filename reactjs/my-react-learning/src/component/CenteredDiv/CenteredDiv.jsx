import styles from "./CenteredDiv.module.css";

export default function CenteredDiv() {
  return (
    <>
      <div className={styles.outerDiv}>
        <div className={styles.middleDiv}>
          <div className={styles.innerDiv}></div>
        </div>
      </div>
    </>
  );
}
