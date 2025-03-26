import { useState } from "react";
import styles from "@/styles/Step3.module.css"; 

export default function Step3({ formData }) {
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const unitPrice = 6000; 
  const totalUnits = formData?.units || 1; 
  const totalPrice = totalUnits * unitPrice;
  const discountAmount = isDiscountApplied ? totalPrice * 0.25 : 0;
  const finalPrice = totalPrice - discountAmount;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Confirm your enrollment fee</h2>

      {/* Pricing Details */}
      <div className={styles.pricingBox}>
        <p className={styles.subheading}>Multiple units</p>
        <p className={styles.unitInfo}>{totalUnits} units, ${unitPrice.toFixed(2)} USD per unit</p>
        <p className={styles.totalAmount}>Up to 50 units, ${totalPrice.toLocaleString()} USD</p>

        <h3 className={styles.includesHeading}>Includes:</h3>
        <ul className={styles.includedList}>
          <li>Program enrollment</li>
          <li>Two documentation reviews per year (may include dwelling units pursuing up to five different WELL strategies)</li>
          <li>Interim precertification reviews (an incremental design milestone)</li>
          <li>Dedicated coaching support</li>
          <li>Digital marketing materials and guidelines</li>
          <li>One printed seal per unit, up to 1,600 seals per subscription year (shipping and custom fees are not included)</li>
        </ul>
      </div>

      
      <div className={styles.discountSection}>
        <h3 className={styles.discountHeading}>*Eligible discounts</h3>
        <p className={styles.discountDescription}>
          We detected you may be eligible for the following discounts. Please confirm you meet the criteria by checking the box below.
        </p>

        <div className={styles.discountOption}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={isDiscountApplied}
              onChange={() => setIsDiscountApplied(!isDiscountApplied)}
              className={styles.checkbox}
            />
            <span className={styles.discountTitle}>25% - Healthcare Facilities discount</span>
          </label>
          <p className={styles.discountDetails}>25% reduction in enrollment fees.</p>
          {isDiscountApplied && <p className={styles.discountAmount}>- ${discountAmount.toLocaleString()}</p>}
        </div>
      </div>

      <div className={styles.totalBox}>
        <p className={styles.totalLabel}>Enrollment Total</p>
        <p className={styles.finalAmount}>${finalPrice.toLocaleString()}</p>
      </div>
    </div>
  );
}
