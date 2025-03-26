"use client";
import { useRouter } from "next/navigation";
import ProjectTable from "@/components/ProjectTable";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>WELL Residential</h1>
        <button 
          className={styles.startButton}
          onClick={() => router.push("/new-project")}
        >
          + Start a New Project
        </button>
      </div>

      {/* Search Filters */}
      <div className={styles.filters}>
        <input className={styles.input} placeholder="ID" />
        <input className={styles.input} placeholder="Name" />
        <select className={styles.select}>
          <option>Type</option>
        </select>
        <button className={styles.applyButton}>Apply</button>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.activeTab}`}>Active Projects</button>
        <button className={styles.tab}>Archived Projects</button>
      </div>

      {/* Projects Table */}
      <ProjectTable />
    </div>
  );
}
