import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import "@fontsource/league-gothic";

function App() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <Router>
      <div className="bg-black">
        <div className="container max-w-[1300px] mx-auto px-[8%] overflow-x-clip ">
          <Navbar />
          <Routes>
            <Route path="/CHROMEON/" element={<MainPage />} />
            <Route path="/contact/" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
