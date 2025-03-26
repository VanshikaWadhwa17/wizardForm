import React, { useState } from "react";
import styles from "@/styles/Step5.module.css";
import { useWizard } from "@/context/WizardContext"; 

const Step5 = ({ nextStep, prevStep }) => {
  const { formData } = useWizard(); 
  const [paymentOption, setPaymentOption] = useState("card");
  const [discountCode, setDiscountCode] = useState("");

  if (!formData) return <p>Loading...</p>; // Avoid undefined errors

  return (
    <div className={styles.container}>
      <h2 className={styles.invoiceNumber}>Invoice #{formData.invoiceNumber}</h2>

      <div className={styles.header}>
        <div className={styles.details}>
          <p className={styles.date}><strong>Date:</strong> {formData.date}</p>
          <p className={styles.name}><strong>{formData.name}</strong></p>
          <p className={styles.email}>{formData.email}</p>
          <p className={styles.org}>{formData.organization}</p>
          
          <p className={styles.address}><strong>Address</strong></p>
          <p>{formData.addressLine1}</p>
          <p>{formData.addressLine2}</p>
          <p>{formData.city}, {formData.state}</p>
        </div>

        <div className={styles.logo}>
          <img src={formData.logoUrl} alt="Company Logo" />
          <p><strong>{formData.companyName}</strong></p>
          <p>{formData.companyAddress}</p>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>DESCRIPTION</th>
            <th className={styles.th}>QUANTITY</th>
            <th className={styles.th}>PRICE</th>
            <th className={styles.th}>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {formData.items.map((item, index) => (
            <tr key={index}>
              <td className={styles.td}>{item.description}</td>
              <td className={styles.td}>{item.quantity}</td>
              <td className={styles.td}>{item.price}</td>
              <td className={styles.td}>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Payment Section */}
      <div className={styles.paymentSection}>
        <h3>Payment Amount</h3>
        <p className={styles.amount}>${formData.totalAmount}</p>

        <div className={styles.paymentOptions}>
          <h4>Payment Options</h4>
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentOption === "card"}
              onChange={() => setPaymentOption("card")}
            />
            Card
          </label>
          <label>
            <input
              type="radio"
              value="check"
              checked={paymentOption === "check"}
              onChange={() => setPaymentOption("check")}
            />
            Check
          </label>
          <label>
            <input
              type="radio"
              value="wire"
              checked={paymentOption === "wire"}
              onChange={() => setPaymentOption("wire")}
            />
            Wire Transfer
          </label>
        </div>

        <div className={styles.discount}>
          <h4>Discount</h4>
          <input
            type="text"
            placeholder="Enter discount code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button className={styles.applyButton}>Apply</button>
        </div>

        <div className={styles.cardDetails}>
          <h4>Card Details</h4>
          <input type="text" placeholder="Card Holder's Name" />
          <input type="text" placeholder="1234 1234 1234 1234" />
          <div className={styles.cardRow}>
            <input type="text" placeholder="MM / YY" />
            <input type="text" placeholder="CVC" />
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.backButton}`} onClick={prevStep}>
          Back
        </button>
        <button className={`${styles.button} ${styles.payLaterButton}`}>
          Pay Later
        </button>
        <button className={`${styles.button} ${styles.nextButton}`} onClick={nextStep}>
          Pay now and Complete enrollment
        </button>
      </div>
    </div>
  );
};

export default Step5;
