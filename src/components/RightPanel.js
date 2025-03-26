"use client";

import styles from "@/styles/RightPanel.module.css"; // Import CSS module

export default function RightPanel({ formData }) {
  const recommendedPlan = formData?.units > 1 ? "Annual Subscription" : "Single Enrollment";

  return (
    <div className={styles.rightPanel}>
      {/* Dynamic Recommendation Banner */}
      <div className={`${styles.recommendation} ${recommendedPlan === "Annual Subscription" ? styles.blue : styles.green}`}>
        <strong>Recommended: {recommendedPlan}</strong>
        <p>Based on your selections, we will recommend a program for you</p>
      </div>

      {/* Content Based on Recommendation */}
      {recommendedPlan === "Annual Subscription" ? (
        <>
          <h3 className={styles.subheading}>Annual subscription includes...</h3>
          <ul className={styles.list}>
            <li>✔ Program enrollment</li>
            <li>✔ Two documentation reviews per year (may include dwelling units that are pursuing up to five different sets of WELL strategies)</li>
            <li>✔ Interim precertification reviews (an incremental design milestone)</li>
            <li>✔ Dedicated coaching support</li>
            <li>✔ Digital marketing materials and guidelines</li>
            <li>✔ One printed seal per unit, up to 1,600 seals per subscription year (shipping and custom fees are not included)</li>
          </ul>
          <h3 className={styles.subheading}>Or</h3>
          <h3 className={styles.subheading}>Single enrollment includes...</h3>
          <ul className={styles.list}>
            <li> Program enrollment</li>
            <li> One documentation review</li>
            <li> Dedicated coaching support</li>
            <li> Digital marketing materials and guidelines</li>
          </ul>
        </>
      ) : (
        <>
          <h3 className={styles.subheading}>Single enrollment includes...</h3>
          <ul className={styles.list}>
            <li> Program enrollment</li>
            <li> One documentation review</li>
            <li> Dedicated coaching support</li>
            <li> Digital marketing materials and guidelines</li>
          </ul>
        </>
      )}
      <h3 className={styles.subheading}>Price $4000</h3>
    </div>
  );
}
