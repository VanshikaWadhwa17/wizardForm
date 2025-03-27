import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
    // step1 
  organization: "",
  ownerName: "",
  organizationType: "",
  organizationIndustry: "",
  consultant: "",
  ownerCountry: "",
  orgStreetAddress: "",
  orgCity: "",
  orgPostalCode: "",
  organizationLogo: null,
  organizationLogoUrl: "",
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

  //step2
  units: "",
  projectArea: "",
  sameFeatures: "",
  sameReviewTime: "",
  spaceType: [],
};

const wizardSlice = createSlice({
  name: "wizard",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { updateFormData, updateStep, resetForm } = wizardSlice.actions;
export default wizardSlice.reducer;
