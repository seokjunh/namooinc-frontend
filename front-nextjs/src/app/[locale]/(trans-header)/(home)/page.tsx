import HomeBusinessIntro from "@/components/HomeBusinessIntro";
import HomeCardSlider from "@/components/HomeCardSlider";
import HomeCompanyIntro from "@/components/HomeCompanyIntro";

const page = () => {
  return (
    <div>
      <HomeCardSlider />
      <div className="sm:py-28 sm:space-y-28 py-14 space-y-14">
        <HomeCompanyIntro />
        <HomeBusinessIntro />
      </div>
    </div>
  );
};
export default page;
