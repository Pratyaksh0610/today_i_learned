import styles from './FlexBox.module.css'
 
export default function FlexBox(){
    return (
        <>
        <div className={styles.parentContainer}>
            <div className={styles.item}>1</div>
            <div className={styles.item2}>2</div>
            <div className={styles.item}>3</div>
            <div className={styles.item}>4</div>
            <div className={`${styles.item} ${styles.grow}`}>5</div>
            {/* <div className={styles.item}>6</div>
            <div className={styles.item}>7</div>
            <div className={styles.item}>8</div>
            <div className={styles.item}>9</div>
            <div className={styles.item}>10</div>
            <div className={styles.item}>11</div>
            <div className={styles.item}>12</div>
            <div className={styles.item}>13</div>
            <div className={styles.item}>14</div>
            <div className={styles.item}>15</div>
            <div className={styles.item}>16</div>
            <div className={styles.item}>17</div> */}
        </div>
        </>
    )
}