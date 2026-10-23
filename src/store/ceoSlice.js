import { createSlice } from "@reduxjs/toolkit";

const ceoSlice = createSlice({
  name: "ceoInfo",
  initialState: {
    name: "Mr. Rishikesh G. Mishra",
    title: "Chief Executive Officer",
    photo:
      "https://yeshealthcare.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-14-at-3.39.12-PM-2-e1767205400221.jpeg",
    message:
      "At YES HEALTHCARE, under the leadership of Mr. Rishikesh G. Mishra, we are a young, dynamic, and highly ambitious organization driven by the vision of making a strong mark in the Indian pharmaceutical industry. Our rapidly expanding product pipeline spans multiple therapeutic segments. What makes YES HEALTHCARE unique is a strong sales and marketing force, deep customer-centricity, and a relentless commitment to quality and innovation. Our people are our greatest asset.",
  },
  reducers: {},
});

export default ceoSlice.reducer;
