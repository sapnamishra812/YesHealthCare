import { createSlice } from "@reduxjs/toolkit";

const leadershipShipSlice = createSlice({
  name: "leadershipInfo",
  initialState: [
    {
      name: "Mrs. Rita R. Mishra",
      role: "Director",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Abhay Mishra",
      role: "General Manager",
      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mrs. Aarti Mishra",
      role: "Account Head",
      photo:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Shardha Pandey",
      role: "Consultant — Human Resources",
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ms. Sapna Tiwari",
      role: "Legal Adviser",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    },
  ],
  reducers: {},
});
export default leadershipShipSlice.reducer;
