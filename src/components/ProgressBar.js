"use client";

import { useRouter } from "next/navigation";
import styles from "@/styles/ProgressBar.module.css";

export default function ProgressBar({ currentStep }) {
  const router = useRouter();
  const steps = [
    "ORGANIZATION INFORMATION",
    "UNIT INFORMATION",
    "FEES + DISCOUNTS",
    "TERMS + CONDITIONS",
    "PAYMENT",
  ];

  const handleStepClick = (stepNumber) => {
    if (stepNumber < currentStep) {
      router.push(`/enroll/${stepNumber}`); // Navigate back to previous steps
    }
  };

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar}>
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={index} className={styles.stepContainer}>
              {/* Clickable Step Circle */}
              <button
                className={`${styles.stepCircle} ${isActive ? styles.activeStep : ""}`}
                onClick={() => handleStepClick(stepNumber)}
                disabled={!isActive} // Disable future steps
              >
                {isActive ? (isCurrent ? "+" : stepNumber) : `0${stepNumber}`}
              </button>

              {/* Step Label */}
              <p className={`${styles.stepLabel} ${isActive ? styles.activeLabel : ""}`}>
                {step}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className={`${styles.connector} ${isActive ? styles.activeConnector : ""}`}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
