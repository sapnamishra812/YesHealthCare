import { createSlice } from "@reduxjs/toolkit";
const companySlice = createSlice({
  name: "companyBasicInfo",
  initialState: {
    legalName: "Yes Health Care Products Private Limited",
    shortName: "YES HEALTHCARE",
    tagline: "Science with a Human Touch · Your Health, Our Promise",
    since: "2004",
    nature: "Pharmaceutical manufacturer & wholesale medicine dealer",
    address: "1003, Dhaniv Baug, Palghar, Vasai-Virar, Maharashtra 401208",
    phone: "+91 92251 91833",
    email: "yeshealthcare@gmail.com",
    website: "https://yeshealthcare.in/",
    hours: "Monday – Saturday, 10:30 AM – 6:30 PM",
    stats: [
      { value: "45+", label: "Products" },
      { value: "27+", label: "Employees" },
      { value: "8+", label: "States" },
      { value: "100%", label: "Commitment" },
    ],
    logo: "https://yeshealthcare.in/wp-content/uploads/2025/12/WhatsApp_Image_2025-10-24_at_9.04.41_AM-removebg-preview.png",
    heroImage:
      "https://yeshealthcare.in/wp-content/uploads/2026/01/ChatGPT-Image-Jan-11-2026-06_44_54-PM-1024x683.png",
    about:
      "YES HEALTHCARE Pvt Ltd is a trusted pharmaceutical company committed to serving society and patients with the highest standards of quality. The mission is to deliver safe, effective, and affordable medicines that help improve health and well-being. Every product is developed with care, precision, and strict quality standards — from life-saving drugs to wellness solutions.",
  },
  reducers: {},
});

export default companySlice.reducer;
