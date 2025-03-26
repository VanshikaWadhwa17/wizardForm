"use client";

import styles from "@/styles/Step4.module.css";

const Step4 = () => {
  return (
    <div className={styles.container}>
      
      {/* PDF Viewer */}
      <div className={styles.viewer}>
        <iframe 
          src="https://cdn.wellcertified.com/static/residential/residential_agreement.pdf?_gl=1*fuwsqm*_gcl_au*MTgxODEyMDQzLjE3NDEzNDIwMjUuMTA2NzU4NTc5OS4xNzQyODc5NDk2LjE3NDI4Nzk1MjA." 
          className={styles.iframe} 
          title="Embedded PDF"
        ></iframe>
      </div>

      {/* Information Section */}
      <div className={styles.infoCard}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod turpis at nisi commodo, at tincidunt eros bibendum. Nulla facilisi. Morbi euismod justo eget nunc tincidunt, nec tincidunt magna mollis. Vestibulum tincidunt orci vel mi vehicula, in sodales nulla vehicula. Fusce sit amet erat auctor, sagittis turpis eu, tristique ligula. Cras scelerisque vehicula ligula, eu malesuada felis sollicitudin in.
        </p>
      </div>

      {/* Left-aligned Controls */}
      <div className={styles.controls}>
        {/* Radio Buttons */}
        <label className={styles.label}>
          Is this participation considered  
          <span className={styles.publicText}>
            Public
            <span className={styles.tooltip}>
            Public vs Private Projects: Please confirm your project may appear in the public project directory identifying your project as pursuing a WELL designation and as such will be deemed a "Public Project." All such Public Projects may also accurately promote and publicize their current status on their WELL journey such as pursuing a WELL rating or certification and once achieved, that such project is rated or certified. If you wish for your project to remain private, please designate your project as "Private" in which case it will not appear in the public directory and you will not be permitted to market or publicize its status of pursuing a WELL designation. You may change your project's status from "private" to "public" at any time. Please note, if the project's status becomes published or made public in IWBI's reasonable discretion or if you achieve the rating or certification, then the project will be deemed a Public Project upon such publication or achievement.
            </span>
          </span> *?
        </label>

        <div className={styles.radioGroup}>
          <label>
            <input type="radio" name="agree" value="yes" className={styles.radio} /> Yes
          </label>
          <label>
            <input type="radio" name="agree" value="no" className={styles.radio} /> No
          </label>
        </div>

        {/* Checkbox */}
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="tnc" />
          <label htmlFor="tnc">By checking this box, you acknowledge that you have read the Terms & Conditions and agree to be bound by these Terms.*</label>
        </div>
      </div>
      
    </div>
  );
};

export default Step4;
