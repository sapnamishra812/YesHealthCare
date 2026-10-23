import { createSlice } from "@reduxjs/toolkit";
const tabletImg =
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80";
const tabletImg2 =
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80";
const syrupImg =
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80";
const syrupImg2 =
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80";
const balmImg =
  "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80";
const herbImg =
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80";

const productSectionsSlice = createSlice({
  name: "productSectionInfo",
  initialState: [
    {
      id: "ayurvedic-tablets",
      title: "Ayurvedic medicines — Tablets",
      intro:
        "Classical herbal tablet range for liver, joints, digestion and daily immunity.",
      items: [
        {
          name: "YESLIV Tablet",
          pack: "Strip of 10 tablets",
          price: "₹128",
          mrp: "₹160",
          use: "Liver tonic · supports hepatic function",
          composition: "Bhumyamalaki, Kalmegh, Kutki extracts",
          image: tabletImg2,
        },
        {
          name: "Yes Joint Care Tablet",
          pack: "Strip of 10 tablets",
          price: "₹145",
          mrp: "₹185",
          use: "Joint comfort and mobility",
          composition: "Shallaki, Guggul, Ashwagandha",
          image: herbImg,
        },
        {
          name: "Yes Immuno Tablet",
          pack: "Bottle of 30 tablets",
          price: "₹199",
          mrp: "₹249",
          use: "Daily immunity and stamina",
          composition: "Giloy, Amla, Tulsi",
          image: tabletImg,
        },
        {
          name: "Yes Digest Tablet",
          pack: "Strip of 10 tablets",
          price: "₹89",
          mrp: "₹110",
          use: "Indigestion, gas and appetite",
          composition: "Triphala, Hing, Saunf",
          image: tabletImg2,
        },
        {
          name: "Yes Ashwagandha Tablet",
          pack: "Bottle of 60 tablets",
          price: "₹210",
          mrp: "₹260",
          use: "Stress, sleep and vitality",
          composition: "Ashwagandha root extract",
          image: herbImg,
        },
        {
          name: "Yes Diabo Care Tablet",
          pack: "Strip of 10 tablets",
          price: "₹165",
          mrp: "₹205",
          use: "Blood sugar wellness support",
          composition: "Karela, Jamun, Methi, Gudmar",
          image: tabletImg,
        },
        {
          name: "Yes Stone Care Tablet",
          pack: "Strip of 10 tablets",
          price: "₹178",
          mrp: "₹220",
          use: "Urinary tract comfort",
          composition: "Gokshura, Punarnava, Pashanbhed",
          image: tabletImg2,
        },
        {
          name: "Yes Women Care Tablet",
          pack: "Strip of 10 tablets",
          price: "₹155",
          mrp: "₹195",
          use: "Women’s wellness tonic",
          composition: "Shatavari, Lodhra, Ashoka",
          image: herbImg,
        },
      ],
    },
    {
      id: "ayurvedic-syrup",
      title: "Ayurvedic medicines — Syrup",
      intro:
        "Herbal liquid formulations for cough, liver care and family wellness.",
      items: [
        {
          name: "Yes Liv Syrup",
          pack: "200 ml bottle",
          price: "₹168",
          mrp: "₹210",
          use: "Ayurvedic liver tonic syrup",
          composition: "Bhringraj, Punarnava, Kalmegh",
          image: syrupImg,
        },
        {
          name: "Yes Herbal Cough Syrup",
          pack: "100 ml bottle",
          price: "₹98",
          mrp: "₹125",
          use: "Dry and productive cough",
          composition: "Vasaka, Tulsi, Mulethi, Honey base",
          image: syrupImg2,
        },
        {
          name: "Yes Immunity Kadha",
          pack: "200 ml bottle",
          price: "₹149",
          mrp: "₹189",
          use: "Seasonal immunity drink",
          composition: "Tulsi, Ginger, Haldi, Giloy",
          image: syrupImg,
        },
        {
          name: "Yes Digestive Syrup",
          pack: "100 ml bottle",
          price: "₹92",
          mrp: "₹115",
          use: "Acidity and sluggish digestion",
          composition: "Amla, Jeera, Saunf, Pudina",
          image: syrupImg2,
        },
        {
          name: "Yes Kids Tonic Syrup",
          pack: "200 ml bottle",
          price: "₹135",
          mrp: "₹170",
          use: "Appetite and growth support",
          composition: "Ashwagandha, Amla, Shatavari",
          image: syrupImg,
        },
        {
          name: "Yes Cough Honey Syrup",
          pack: "100 ml bottle",
          price: "₹105",
          mrp: "₹135",
          use: "Soothing cough relief",
          composition: "Honey, Tulsi, Banapsha",
          image: syrupImg2,
        },
        {
          name: "Yes Uricare Syrup",
          pack: "200 ml bottle",
          price: "₹158",
          mrp: "₹198",
          use: "Urinary tract herbal syrup",
          composition: "Gokshura, Varun, Punarnava",
          image: syrupImg,
        },
        {
          name: "Yes Hair Tonic Syrup",
          pack: "200 ml bottle",
          price: "₹172",
          mrp: "₹215",
          use: "Hair strength from within",
          composition: "Bhringraj, Amla, Brahmi",
          image: syrupImg2,
        },
      ],
    },
    {
      id: "allopathic-tablets",
      title: "Allopathic medicines — Tablets",
      intro:
        "Allopathic tablets for acidity, fever, allergy, pain and infection support.",
      items: [
        {
          name: "Y-CID Tablet",
          pack: "Strip of 10 tablets",
          price: "₹48",
          mrp: "₹62",
          use: "Acidity, heartburn and gastric discomfort",
          composition: "Antacid combination (as per label)",
          image: tabletImg,
        },
        {
          name: "Yes Para 500 Tablet",
          pack: "Strip of 10 tablets",
          price: "₹22",
          mrp: "₹28",
          use: "Fever and mild to moderate pain",
          composition: "Paracetamol 500 mg",
          image: tabletImg2,
        },
        {
          name: "Yes Cet 10 Tablet",
          pack: "Strip of 10 tablets",
          price: "₹32",
          mrp: "₹42",
          use: "Allergic rhinitis and itching",
          composition: "Cetirizine 10 mg",
          image: tabletImg,
        },
        {
          name: "Yes Diclomol Tablet",
          pack: "Strip of 10 tablets",
          price: "₹55",
          mrp: "₹72",
          use: "Musculoskeletal pain and inflammation",
          composition: "Diclofenac + Paracetamol",
          image: tabletImg2,
        },
      ],
    },
    {
      id: "allopathic-syrup",
      title: "Allopathic medicines — Syrup",
      intro:
        "Paediatric and adult liquid allopathic range for fever, cough and gastric care.",
      items: [
        {
          name: "Yes Para Paediatric Syrup",
          pack: "60 ml bottle",
          price: "₹42",
          mrp: "₹55",
          use: "Fever and pain in children (as directed)",
          composition: "Paracetamol 250 mg / 5 ml",
          image: syrupImg2,
        },
        {
          name: "Yes Cough Expectorant",
          pack: "100 ml bottle",
          price: "₹78",
          mrp: "₹98",
          use: "Productive cough and chest congestion",
          composition: "Ambroxol + Guaifenesin + Terbutaline",
          image: syrupImg,
        },
        {
          name: "Yes Antacid Suspension",
          pack: "170 ml bottle",
          price: "₹86",
          mrp: "₹108",
          use: "Hyperacidity and gas",
          composition:
            "Aluminium hydroxide + Magnesium hydroxide + Simethicone",
          image: syrupImg2,
        },
        {
          name: "Yes Azithro Dry Syrup",
          pack: "15 ml after reconstitution",
          price: "₹118",
          mrp: "₹145",
          use: "Bacterial infections (prescription)",
          composition: "Azithromycin 200 mg / 5 ml",
          image: syrupImg,
        },
      ],
    },
    {
      id: "topicals",
      title: "Pain balm & topicals",
      intro:
        "External applications listed with the company on public trade directories.",
      items: [
        {
          name: "Yes Pain Balm 10 g",
          pack: "10 gram jar",
          price: "₹35",
          mrp: "₹45",
          use: "Headache, cold and muscular pain",
          composition: "Menthol, Methyl salicylate, Camphor",
          image: balmImg,
        },
        {
          name: "Yes Pain Balm 20 g",
          pack: "20 gram jar",
          price: "₹58",
          mrp: "₹75",
          use: "Body ache and sprain comfort",
          composition: "Menthol, Methyl salicylate, Camphor",
          image: balmImg,
        },
      ],
    },
  ],
  reducers: {},
});

export default productSectionsSlice.reducer;
