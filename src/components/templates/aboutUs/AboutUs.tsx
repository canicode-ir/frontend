//Components
import AboutUsBanner from "../../modules/aboutus/AboutUsBanner";
import CanicodeRoadMap from '../../modules/aboutus/CaniCodeRoadMap'
import CanicodeRoadMapSmallDevices from '../../modules/aboutus/CanicodeRoadMapSmallDevices'

function AboutUs() {
  return (
    <div className="flex flex-col justify-between items-center">
      <AboutUsBanner />
      <CanicodeRoadMap />
      <CanicodeRoadMapSmallDevices />
    </div>
  );
}

export default AboutUs;
