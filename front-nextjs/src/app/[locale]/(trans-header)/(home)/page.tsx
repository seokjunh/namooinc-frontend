import HomeBusinessIntro from "@/components/HomeBusinessIntro";
import HomeCardSlider from "@/components/HomeCardSlider";
import HomeCompanyIntro from "@/components/HomeCompanyIntro";

const page = () => {
  return (
    <div>
      <HomeCardSlider />
      <div className="space-y-14 py-14 sm:space-y-28 sm:py-28">
        <HomeCompanyIntro />
        <HomeBusinessIntro />
      </div>
    </div>
  );
};
export default page;
