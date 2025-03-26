"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Dropdown.module.css";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownButton} onClick={() => setOpen(!open)}>
        Start a New Project
      </button>

      {open && (
        <div className={styles.dropdownMenu}>
          <button
            className={styles.dropdownItem}
            onClick={() => router.push("/new-project")}
          >
            Enroll Now
          </button>
        </div>
      )}
    </div>
  );
}
