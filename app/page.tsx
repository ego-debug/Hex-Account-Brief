import ProgressNav from "./components/ProgressNav";
import Hero from "./components/Hero";
import HeadwayAccount from "./components/HeadwayAccount";
import AndelaFit from "./components/AndelaFit";
import ColdCall from "./components/ColdCall";
import Email from "./components/Email";
import Portfolio from "./components/Portfolio";
import WhyMe from "./components/WhyMe";
import FirstThirty from "./components/FirstThirty";
import CTA from "./components/CTA";

export default function Page() {
  return (
    <main className="relative">
      <ProgressNav />
      <Hero />
      <HeadwayAccount />
      <AndelaFit />
      <ColdCall />
      <Email />
      <Portfolio />
      <WhyMe />
      <FirstThirty />
      <CTA />
    </main>
  );
}
