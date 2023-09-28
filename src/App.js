import MainPage from "./pages/MainPage";
//import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProductsPage from './pages/ProductsPage'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black">
      <div className="container max-w-[1300px] mx-auto px-[8%]">
        <Navbar />
        <MainPage />
        <AboutPage />
        <ProductsPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
