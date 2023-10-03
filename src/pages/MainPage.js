import HeroPage from "../components/Home/HeroPage";
import ChromeLabel from "../components/Home/ChromeLabel";
import AboutSection from "../components/About/AboutSection";
import ProductSection from "../components/Product/ProductSection";
import BigCircle from "../components/Home/BigCircle";
import OpinionSection from "../components/Opinion/OpinionSection";

function MainPage() {
  return (
    <div>
      <div className="relative overflow-y-clip bg-black h-[2500px]">
        <HeroPage />
        <ChromeLabel />
        <BigCircle />
      </div>
      <AboutSection />
      <ProductSection />
      <OpinionSection />      
    </div>
  );
}

export default MainPage;
