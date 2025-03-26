import Link from "next/link";
import styles from "@/styles/NewProjectPage.module.css";

export default function NewProjectPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>WELL For Residential</h1>
      <p className={styles.description}>
        The WELL for residential certification program is a verified framework to create healthier, more resilient homes.
      </p>

      {/* Stepwise UI */}
      <div className={styles.stepContainer}>
        <div className="flex flex-col gap-3">
          <div className={styles.step}>
            <span className={styles.completed}>✔</span>
            <p>LEARN</p>
          </div>
          <div className={styles.step}>
            <span className={styles.active}>+</span>
            <p>ENROLL</p>
          </div>
          <div className={styles.step}>
            <span className={styles.pending}>○</span>
            <p>DOCUMENT</p>
          </div>
          <div className={styles.step}>
            <span className={styles.pending}>○</span>
            <p>ACHIEVE</p>
          </div>
          <div className={styles.step}>
            <span className={styles.pending}>○</span>
            <p>MAINTAIN</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttons}>
        <Link href="/enroll/1">
          <button className={styles.primaryButton}>Enroll Now</button>
        </Link>
        <Link href="/">
          <button className={styles.secondaryButton}>Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
}

