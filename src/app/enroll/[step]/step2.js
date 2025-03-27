"use client";

import { useSelector, useDispatch } from "react-redux";
import { updateFormData } from "@/store/wizardSlice";
import RightPanel from "@/components/RightPanel";
import styles from "@/styles/Step2.module.css";
import { useRouter } from "next/router";

export default function Step2() {
  const formData = useSelector((state) => state.wizard);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const router = useRouter();
  const validateForm = () => {
    const newErrors = {};
    if (!formData.units) newErrors.units = "Number of Units is required";
    if (!formData.projectArea) newErrors.projectArea = "Porject Area is required";
    if (!formData.organizationType) newErrors.organizationType = "Organization Name is required";
    if (!formData.organizationIndustry) newErrors.organizationIndustry = "Organization Industry is required";
    if (!formData.consultant) newErrors.consultant = "Consultant Information is required";
    if (!formData.ownerCountry) newErrors.ownerCountry = "Country/Region is required";
    if (!formData.orgStreetAddress) newErrors.orgStreetAddress = "Street Address is required";
    if (!formData.orgCity) newErrors.orgCity = "City is required";
    if (!formData.orgPostalCode) newErrors.orgPostalCode = "Postal Code is required";
    if (!formData.billingName) newErrors.billingName = "Billing Name is required";
    if (!formData.billingOrganizationType) newErrors.billingOrganizationType = "Billing organization is required";
    if (!formData.billingCountry) newErrors.billingCountry = "Billing Country/Region is required";
    if (!formData.billingStreet) newErrors.billingStreet = "Billing Street Address is required";
    if (!formData.billingCity) newErrors.billingCity = "Billing City is required";
    if (!formData.billingPostalCode) newErrors.billingPostalCode = "Billing Postal Code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (key, value) => {
    dispatch(updateFormData({ [key]: value }));
  };

  return (
    <div className={styles.container}>
      {/* Left Side Form */}
      <div className={styles.leftPanel}>
        <h2 className={styles.heading}>Tell us about your residences</h2>

        <label className={styles.label}>
         1.  How many dwelling units are included in the enrollment?*
        </label>
        <input
          type="number"
          className={styles.input}
          value={formData.units || ""}
          onChange={(e) => handleChange("units", e.target.value)}
        />

        <label className={styles.label}>
         2.  What is the project area? (in square footage)*
        </label>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter project area"
          value={formData.projectArea || ""}
          onChange={(e) => handleChange("projectArea", e.target.value)}
        />

        <label className={styles.label}>
         3.  Are all of the units pursuing the same set of features?*
        </label>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="sameFeatures"
              value="yes"
              checked={formData.sameFeatures === "yes"}
              onChange={(e) => handleChange("sameFeatures", e.target.value)}
            />
            Yes, pursuing all of the same features
          </label>
          <label>
            <input
              type="radio"
              name="sameFeatures"
              value="no"
              checked={formData.sameFeatures === "no"}
              onChange={(e) => handleChange("sameFeatures", e.target.value)}
            />
            No, pursuing different features
          </label>
        </div>

        <label className={styles.label}>
          Are all of the units submitting for review at the same time?*
        </label>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="sameReviewTime"
              value="yes"
              checked={formData.sameReviewTime === "yes"}
              onChange={(e) => handleChange("sameReviewTime", e.target.value)}
            />
            Yes, submitting for review at the same time
          </label>
          <label>
            <input
              type="radio"
              name="sameReviewTime"
              value="no"
              checked={formData.sameReviewTime === "no"}
              onChange={(e) => handleChange("sameReviewTime", e.target.value)}
            />
            No, submitting for review at different times
          </label>
        </div>

        <label className={styles.label}>
          Which of these space types best describe your dwelling units?*
        </label>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              checked={(formData.spaceType || []).includes("single")}
              onChange={() => {
                const updatedTypes = formData.spaceType.includes("single")
                  ? formData.spaceType.filter((type) => type !== "single")
                  : [...formData.spaceType, "single"];
                handleChange("spaceType", updatedTypes);
              }}
            />
            Single family
          </label>
          <label>
            <input
              type="checkbox"
              checked={(formData.spaceType || []).includes("multi")}
              onChange={() => {
                const updatedTypes = formData.spaceType.includes("multi")
                  ? formData.spaceType.filter((type) => type !== "multi")
                  : [...formData.spaceType, "multi"];
                handleChange("spaceType", updatedTypes);
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
