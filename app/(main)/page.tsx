import MainHeader from "./_components/header/header";
import MainHero from "./_components/hero/hero";
import MainAbout from "./_components/about/about";
import MainListings from "./_components/listings/listings";
import MainSharedSpace from "./_components/shared-space/shared-space";
import MainHowItWorks from "./_components/how-it-work/how-it-work";
import MainHybridWorking from "./_components/hybrid-working/hybrid-working";
import Pricing from "./_components/pricing/pricing";

export default function Main() {
  return (
    <div className="space-y-20">
      <div className="">
        <MainHeader />
        <MainHero />
      </div>
      <MainAbout />
      <MainListings />
      <MainSharedSpace />
      <MainHowItWorks />
      <MainHybridWorking />
      <Pricing />
      <p className="">Main</p>
    </div>
  );
}
