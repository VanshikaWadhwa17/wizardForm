"use client";

import { useWizard } from "@/context/WizardContext";
import RightPanel from "@/components/RightPanel";
import styles from "@/styles/Step2.module.css"; 

export default function Step2() {
  const { formData, setFormData } = useWizard();

  return (
    <div className={styles.container}>
      {/* Left Side Form */}
      <div className={styles.leftPanel}>
        <h2 className={styles.heading}>Tell us about your residences</h2>

        <label className={styles.label}>How many dwelling units are included in the enrollment?*</label>
        <input
          type="number"
          className={styles.input}
          value={formData.units || ""}
          onChange={(e) => setFormData({ ...formData, units: e.target.value })}
        />

        <label className={styles.label}>What is the project area? (in square footage)*</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter project area"
          value={formData.projectArea || ""}
          onChange={(e) => setFormData({ ...formData, projectArea: e.target.value })}
        />

        <label className={styles.label}>Are all of the units pursuing the same set of features?*</label>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="sameFeatures"
              value="yes"
              checked={formData.sameFeatures === "yes"}
              onChange={(e) => setFormData({ ...formData, sameFeatures: e.target.value })}
            />
            Yes, same features
          </label>
          <label>
            <input
              type="radio"
              name="sameFeatures"
              value="no"
              checked={formData.sameFeatures === "no"}
              onChange={(e) => setFormData({ ...formData, sameFeatures: e.target.value })}
            />
            No, different features
          </label>
        </div>

        <label className={styles.label}>Are all of the units submitting for review at the same time?*</label>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="sameReviewTime"
              value="yes"
              checked={formData.sameReviewTime === "yes"}
              onChange={(e) => setFormData({ ...formData, sameReviewTime: e.target.value })}
            />
            Yes, same time
          </label>
          <label>
            <input
              type="radio"
              name="sameReviewTime"
              value="no"
              checked={formData.sameReviewTime === "no"}
              onChange={(e) => setFormData({ ...formData, sameReviewTime: e.target.value })}
            />
            No, different times
          </label>
        </div>

        <label className={styles.label}>Which of these space types best describe your dwelling units?*</label>
<div className={styles.checkboxGroup}>
  <label>
    <input
      type="checkbox"
      checked={(formData.spaceType || []).includes("single")}
      onChange={() => {
        const updatedTypes = (formData.spaceType || []).includes("single")
          ? formData.spaceType.filter((type) => type !== "single")
          : [...(formData.spaceType || []), "single"];
        setFormData({ ...formData, spaceType: updatedTypes });
      }}
    />
    Single family
  </label>
  <label>
    <input
      type="checkbox"
      checked={(formData.spaceType || []).includes("multi")}
      onChange={() => {
        const updatedTypes = (formData.spaceType || []).includes("multi")
          ? formData.spaceType.filter((type) => type !== "multi")
          : [...(formData.spaceType || []), "multi"];
        setFormData({ ...formData, spaceType: updatedTypes });
      }}
    />
    Multifamily
  </label>
</div>

      </div>

      {/* Right Side Panel */}
      <RightPanel formData={formData} />
    </div>
  );
}
