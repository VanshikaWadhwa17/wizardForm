"use client";

import { createContext, useContext, useState } from "react";

const WizardContext = createContext(null);

export function WizardProvider({ children }) {
  const [formData, setFormData] = useState({
    organization: "",
    ownerName: "",
    organizationType: "",
    organizationIndustry: "",
    consultant: "",
    ownerCountry: "",
    orgStreetAddress: "",
    orgCity: "",
    orgPostalCode: "",
    organizationLogo: null, // Holds the uploaded file
    organizationLogoUrl: "", // Stores the URL for preview
    sectorDiscount: "",
    isBillingSame: false,
    billingName: "",
    billingOrganizationType: "",
    billingCountry: "",
    billingStreet: "",
    billingCity: "",
    billingPostalCode: "",
    invoiceNumber: "202503125236",
    date: "",
    name: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    logoUrl: "",
    companyName: "",
    companyAddress: "",
    items: [],
  });

  return (
    <WizardContext.Provider value={{ formData, setFormData }}>
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  return useContext(WizardContext);
}
