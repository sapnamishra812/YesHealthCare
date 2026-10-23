import { createSlice } from "@reduxjs/toolkit";

const distributorsSlice = createSlice({
  name: "distributorsInfo",
  initialState: [
    {
      firm: "Adarsh Medical Agency",
      person: "Mr. Girish Chandra Tiwari",
      place: "Allahpur, Prayagraj — 211006",
    },
    {
      firm: "Alfa Health Care",
      person: "Mr. Ravi Kumar Yadav",
      place: "Patna, Bihar",
    },
    {
      firm: "Samarth Distributor",
      person: "Mr. Mayuresh Kundalkar",
      place: "Virar West, Maharashtra",
    },
    {
      firm: "Padam Distributor",
      person: "Mr. Pratik Shah",
      place: "Bhayandar East, Maharashtra",
    },
    {
      firm: "Riddhi Siddhi Pharmaceuticals",
      person: "Mr. Santosh Kumar Tiwari",
      place: "Leader Road, Shahganj, Prayagraj",
    },
    {
      firm: "Unity Enterprise",
      person: "Mr. Paresh Patel",
      place: "Kothi Nagar, Vadodara, Gujarat",
    },
    {
      firm: "Pranic Health Care Distributor Pvt. Ltd.",
      person: "Mr. Ajit Mane",
      place: "Nallasopara West, Maharashtra",
    },
    {
      firm: "Jaiswal Medical Agency",
      person: "Distributor partner",
      place: "Jahangirabad Sadar, Jaunpur, Uttar Pradesh",
    },
    {
      firm: "Divine Care Medical Agency",
      person: "Mr. Narayan",
      place: "Bengaluru, Karnataka",
    },
  ],
  reducers: {},
});
export default distributorsSlice.reducer;
