import styles from "./preloader.module.css";

export const Preloader = () => {
  return (
    <div className={`${styles.preloader}`}>
      <svg className={`${styles.svg} ${styles.blue}`}>
        <circle />
      </svg>
      <svg className={`${styles.svg} ${styles.purple}`}>
        <circle />
      </svg>
      <svg className={`${styles.svg} ${styles.mixColor}`}>
        <circle />
      </svg>
    </div>
  );
}; 
