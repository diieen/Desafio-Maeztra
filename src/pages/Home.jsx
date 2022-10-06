import MainBanner from "../components/MainBanner";
import StoreInfos from "../components/StoreInfos";
import StoreBrands from "../components/StoreBrands";
import ShelfsCarousel from "../components/ShelfsCarousel";
import CollectionAbout from "../components/CollectionAbout";
import SmartNews from "../components/SmartNews";

const Home = () => {
  return (
    <div className="home">
        <SmartNews />
        <MainBanner />
        <StoreInfos />
        <StoreBrands />
        <ShelfsCarousel />
        <CollectionAbout />
    </div>  
  );
};

export default Home;