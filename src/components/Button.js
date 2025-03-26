"use client";
import styles from "@/styles/Button.module.css";

export default function Button({ name, onClick, variant = "primary" }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {name}
    </button>
  );
}
