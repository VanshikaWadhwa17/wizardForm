"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { useDropzone } from "react-dropzone";
import { useWizard } from "@/context/WizardContext";
import styles from "@/styles/Step1.module.css";
import { Info } from "lucide-react";
import Button from "@/components/Button"; 

export default function Step1() {
  const { formData, setFormData } = useWizard();
  const [isBillingSame, setIsBillingSame] = useState(formData.isBillingSame);
  const [noConsultant, setNoConsultant] = useState(formData.consultant === "");
  const [logoPreview, setLogoPreview] = useState(
    formData.organizationLogoUrl || null
  );
  const [showTooltip, setShowTooltip] = useState(false);
  const [errors, setErrors] = useState({});

  const router = useRouter();


  // Handle file upload
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setFormData({
      ...formData,
      organizationLogo: file,
      organizationLogoUrl: fileUrl,
    });
    setLogoPreview(fileUrl);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/png, image/jpeg, image/jpg",
    maxFiles: 1,
  });
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.organization) newErrors.organization = "Organization is required";
    if (!formData.ownerName) newErrors.ownerName = "Owner Name is required";
    if (!formData.organizationType) newErrors.organizationType = "Organization Name is required";
    if (!formData.organizationIndustry) newErrors.organizationIndustry = "Organization Industry is required";
    if (!formData.consultant) newErrors.consultant = "Consultant Information is required";
    if (!formData.ownerCountry) newErrors.ownerCountry = "Country/Region is required";
    if (!formData.orgStreetAddress) newErrors.orgStreetAddress = "Street Address is required";
    if (!formData.orgCity) newErrors.orgCity = "City is required";
    if (!formData.orgPostalCode) newErrors.orgPostalCode = "Postal Code is required";
    if (!formData.billingName) newErrors.billingName = "Billing Name is required";
    if (!formData.billingOrganizationType) newErrors.billingOrganizationType = "Billing organization is required";
    if (!formData.billingCountry) newErrors.billingCountry = "Billind Country/Region is required";
    if (!formData.billingStreet) newErrors.billingStreet = "Billing Street Address is required";
    if (!formData.billingCity) newErrors.billingCity = "Billing City is required";
    if (!formData.billingPostalCode) newErrors.billingPostalCode = "Billing Postal Code is required";



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleContinue = () => {
    if (validateForm()) {
      router.push("/enroll/2"); // Navigate to Step 2 if form is valid
    }
  };

  // Sync local states with global formData
  useEffect(() => {
    setIsBillingSame(formData.isBillingSame);
    setNoConsultant(formData.consultant === "");
    setLogoPreview(formData.organizationLogoUrl || null);
  }, [formData]);

  return (
    <div className={styles.formContainer}>
      <div className={styles.section}>
        <h2>Tell us about your organization</h2>
        <p>
          Please ensure the information submitted is accurate and can be used
          for billing purposes.
        </p>

        <label>What shall we call this WELL for residential enrollment?*</label>
        <input
          type="text"
          value={formData.organization}
          onChange={(e) =>
            setFormData({ ...formData, organization: e.target.value })
          }
        />
        {errors.organization && <p className={styles.errorMessage}>{errors.organization}</p>}

        <label>Owner Name*</label>
        <input
          type="text"
          value={formData.ownerName}
          onChange={(e) =>
            setFormData({ ...formData, ownerName: e.target.value })
          }
        />
        {errors.ownerName && <p className={styles.errorMessage}>{errors.ownerName}</p>}

        <label>Organization*</label>
        <select
          value={formData.organizationType}
          onChange={(e) =>
            setFormData({ ...formData, organizationType: e.target.value })
          }
        >
          <option value="">Select Organization</option>
          <option value="company">Company</option>
          <option value="nonprofit">Nonprofit</option>
        </select>
        {errors.organizationType && <p className={styles.errorMessage}>{errors.organizationType}</p>}

        <label>Organization Industry*</label>
        <select
          value={formData.organizationIndustry}
          onChange={(e) =>
            setFormData({ ...formData, organizationIndustry: e.target.value })
          }
        >
          <option value="">Select Organization Industry</option>
          <option value="finance">Finance</option>
          <option value="tech">Tech</option>
        </select>
        {errors.organizationIndustry && <p className={styles.errorMessage}>{errors.organizationIndustry}</p>}

        <label>Are you working with a consultant for this project?*</label>
        <select
          value={formData.consultant}
          onChange={(e) =>
            setFormData({ ...formData, consultant: e.target.value })
          }
          disabled={noConsultant}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            gap: "8px",
          }}
        >
          <input
            type="checkbox"
            checked={noConsultant}
            onChange={() => {
              setNoConsultant(!noConsultant);
              if (!noConsultant) setFormData({ ...formData, consultant: "" });
            }}
          />
          No consultant supported this project
        </label>
        {!noConsultant && errors.consultant && <p className={styles.errorMessage}>{errors.consultant}</p>}

        <label>Country/Region*</label>
        <select
          value={formData.ownerCountry}
          onChange={(e) =>
            setFormData({ ...formData, ownerCountry: e.target.value })
          }
        >
          <option value="">Select Country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
        </select>
        {errors.ownerCountry && <p className={styles.errorMessage}>{errors.ownerCountry}</p>}

        <label className="flex items-center space-x-1 text-gray-700">
          <span>Street address*</span>
          <div
            className={styles["tooltip-container"]}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Info size={16} className="text-gray-500" />
            {showTooltip && (
              <div className={styles.tooltip}>
                If multiple addresses, enter the mailing address of the building
                or community
              </div>
            )}
          </div>
        </label>
        <input
          type="text"
          value={formData.orgStreetAddress}
          onChange={(e) =>
            setFormData({ ...formData, orgStreetAddress: e.target.value })
          }
        />
        {errors.orgStreetAddress && <p className={styles.errorMessage}>{errors.orgStreetAddress}</p>}

        <label>City*</label>
        <input
          type="text"
          value={formData.orgCity}
          onChange={(e) =>
            setFormData({ ...formData, orgCity: e.target.value })
          }
        />
        {errors.orgCity && <p className={styles.errorMessage}>{errors.orgCity}</p>}

        <label>Postal Code*</label>
        <input
          type="text"
          value={formData.orgPostalCode}
          onChange={(e) =>
            setFormData({ ...formData, orgPostalCode: e.target.value })
          }
        />
        {errors.orgPostalCode && <p className={styles.errorMessage}>{errors.orgPostalCode}</p>}

        <div className={styles.uploadContainer}>
          <label>Organization Logo</label>
          <div {...getRootProps()} className={styles.dropzone}>
            <input {...getInputProps()} />
            {logoPreview ? (
              <img
                src={logoPreview}
                alt="Logo Preview"
                className={styles.logoPreview}
              />
            ) : (
              <div className={styles.uploadText}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  className={`${styles.uploadIcon} mx-auto h-12 w-12 text-gray-400`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                </svg>

                <p>
                  <strong>Upload a file</strong> or drag and drop
                </p>
                <p className={styles.fileTypes}>
                  Accepted file types: png, jpeg, jpg
                </p>
              </div>
            )}
          </div>
        </div>
        <label>
          Does your organization qualify for any of the approved sector
          discounts?
        </label>
        <select
          value={formData.sectorDiscount}
          onChange={(e) =>
            setFormData({ ...formData, sectorDiscount: e.target.value })
          }
        >
          <option value="">Not Applicable</option>
          <option value="us">Dist1</option>
          <option value="uk">Disc2</option>
        </select>
      </div>

      <div className={styles.section}>
        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            gap: "8px",
          }}
        >
          <input
            type="checkbox"
            checked={isBillingSame}
            onChange={() => {
              setIsBillingSame(!isBillingSame);
              setFormData({ ...formData, isBillingSame: !isBillingSame });
            }}
          />
          Billing address is same as owner address
        </label>

        {!isBillingSame && (
          <>
            <h2>Billing Information</h2>
            <label>Billing Name*</label>
            <input
              type="text"
              value={formData.billingName}
              onChange={(e) =>
                setFormData({ ...formData, billingName: e.target.value })
              }
            />
             {errors.billingName && <p className={styles.errorMessage}>{errors.billingName}</p>}

            <label>Organization*</label>
            <select
              value={formData.billingOrganizationType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  billingOrganizationType: e.target.value,
                })
              }
            >
              <option value="">Select Organization</option>
              <option value="company">Company</option>
              <option value="nonprofit">Nonprofit</option>
            </select>
            {errors.billingOrganizationType && <p className={styles.errorMessage}>{errors.billingOrganizationType}</p>}

            <label>Country/Region*</label>
            <select
              value={formData.billingCountry}
              onChange={(e) =>
                setFormData({ ...formData, billingCountry: e.target.value })
              }
            >
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
            {errors.billingCountry && <p className={styles.errorMessage}>{errors.billingCountry}</p>}

            <label>Street Address*</label>
            <input
              type="text"
              value={formData.billingStreet}
              onChange={(e) =>
                setFormData({ ...formData, billingStreet: e.target.value })
              }
            />
            {errors.billingStreet && <p className={styles.errorMessage}>{errors.billingStreet}</p>}

            <label>City*</label>
            <input
              type="text"
              value={formData.billingCity}
              onChange={(e) =>
                setFormData({ ...formData, billingCity: e.target.value })
              }
            />
            {errors.billingCity && <p className={styles.errorMessage}>{errors.billingCity}</p>}

            <label>Postal Code*</label>
            <input
              type="text"
              value={formData.billingPostalCode}
              onChange={(e) =>
                setFormData({ ...formData, billingPostalCode: e.target.value })
              }
            />
            {errors.billingPostalCode && <p className={styles.errorMessage}>{errors.billingPostalCode}</p>}
          </>
        )}
        <Button name="Continue" onClick={handleContinue} className={styles.continueButton} />
      </div>
    </div>
  );
}
