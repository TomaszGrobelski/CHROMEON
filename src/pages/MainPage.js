import HeroPage from "../components/Home/HeroPage";
import ChromeLabel from "../components/Home/ChromeLabel";
import AboutPage from "./AboutPage";
import ProductsPage from "./ProductsPage";
import BigCircle from "../components/Home/BigCircle";

function MainPage() {
  return (
    <div>
      <div className="relative overflow-y-clip bg-black h-[2500px]">
        <HeroPage />
        <ChromeLabel />
        <BigCircle />
      </div>
      <AboutPage />
      <ProductsPage />
    </div>
  );
}

export default MainPage;
