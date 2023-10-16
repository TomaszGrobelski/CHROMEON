import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-black">
        <div className="container max-w-[1300px] mx-auto px-[8%] overflow-x-clip ">
          <Navbar />
          <Routes>
            <Route path="/CHROMEON" element={<MainPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
