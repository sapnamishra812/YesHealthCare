import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutCeo from "./components/AboutCeo";
import Leadership from "./components/Leadership";
import MarketingTeam from "./components/MarketingTeam";
import ProductCatalog from "./components/ProductCatalog";
import Distributors from "./components/Distributors";
import CompanyDetails from "./components/CompanyDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-sand">
      <Header />
      <main>
        <Hero />
        <AboutCeo />
        <Leadership />
        <MarketingTeam />
        <ProductCatalog />
        <Distributors />
        <CompanyDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;
