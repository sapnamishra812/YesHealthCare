import { createSlice } from "@reduxjs/toolkit";
import { marketingTeam } from "../data/siteData";

const marketingTeamSlice = createSlice({
  name: "marketingTeamInfo",
  initialState: [
    {
      name: "Mr. Rohan Deshmukh",
      role: "National Sales Manager",
      zone: "Pan India",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ms. Priya Kulkarni",
      role: "Zonal Marketing Head",
      zone: "West (Maharashtra & Gujarat)",
      photo:
        "https://images.unsplash.com/photo-1594744803329-e58b85480659?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mr. Amit Singh",
      role: "Zonal Marketing Head",
      zone: "North (Uttar Pradesh & Bihar)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ms. Neha Reddy",
      role: "Zonal Marketing Head",
      zone: "South (Karnataka)",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mr. Sagar Patil",
      role: "Area Sales Manager",
      zone: "Mumbai & Palghar",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ms. Kavita Joshi",
      role: "Product Executive",
      zone: "Ayurvedic range",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mr. Imran Shaikh",
      role: "Medical Representative",
      zone: "Virar – Vasai",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ms. Anjali Tiwari",
      role: "Medical Representative",
      zone: "Prayagraj",
      photo:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=600&q=80",
    },
  ],
  reducers: {},
});
export default marketingTeamSlice.reducer;
