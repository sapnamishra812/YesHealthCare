import RootLayout from "./components/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import AboutCeo from "./components/AboutCeo";
import Leadership from "./components/Leadership";
import MarketingTeam from "./components/MarketingTeam";
import ProductCatalog from "./components/ProductCatalog";
import Distributors from "./components/Distributors";
import CompanyDetails from "./components/CompanyDetails";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { element: <Hero />, index: true }, //home
      // { path: "/hero", element: <Hero /> },
      { path: "about", element: <AboutCeo /> }, //ceo
      { path: "leadership", element: <Leadership /> }, //team
      { path: "marketing-team", element: <MarketingTeam /> }, //prodcts
      { path: "product-catalog", element: <ProductCatalog /> },
      { path: "distributors", element: <Distributors /> },
      { path: "company-details", element: <CompanyDetails /> },
    ],
  },
]);
