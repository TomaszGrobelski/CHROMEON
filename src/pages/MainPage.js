import HeroPage from "../components/Home/HeroPage";

import AboutSection from "../components/About/AboutSection";
import ProductSection from "../components/Product/ProductSection";
import BigCircle from "../components/Home/BigCircle";
import OpinionSection from "../components/Opinion/OpinionSection";
import PhotosSection from "../components/Photos/PhotosSection";
import NewsletterSection from "../components/Newsletter/NewsletterSection";

function MainPage() {
  return (
    <div>
      <div className="relative overflow-y-clip bg-black h-[2500px]">
        <HeroPage />
        <BigCircle />
      </div>
      <PhotosSection />
      <AboutSection />
      <ProductSection />
      <OpinionSection />   
      <NewsletterSection />
    </div>
  );
}

export default MainPage;
