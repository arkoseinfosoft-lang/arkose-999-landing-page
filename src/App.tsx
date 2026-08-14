import SmoothScroll from "./lib/SmoothScroll";
import Ticker from "./components/Ticker";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import StatStrip from "./components/StatStrip";
import Ledger from "./components/Ledger";
import Problems from "./components/Problems";
import WhyUs from "./components/WhyUs";
import Demos from "./components/Demos";
import Pricing from "./components/Pricing";
import Steps from "./components/Steps";
import Bonus from "./components/Bonus";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";
import SocialProofToast from "./components/SocialProofToast";

export default function App() {
  return (
    <SmoothScroll>
      <div className="paper-texture" />
      <div className="paper-glow" />
      <div className="relative z-[1] w-full max-w-[100vw] overflow-x-hidden pb-20 sm:pb-0">
        <Ticker />
        <div className="pt-[42px] sm:pt-[46px]">
          <Nav />
          <main>
            <Hero />
            <SocialProof />
            <StatStrip />
            <Ledger />
            <Problems />
            <WhyUs />
            <Demos />
            <Pricing />
            <Steps />
            <Bonus />
            <FAQ />
          </main>
          <Footer />
          <MobileBar />
          <SocialProofToast />
        </div>
      </div>
    </SmoothScroll>
  );
}
