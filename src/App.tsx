import SmoothScroll from "./lib/SmoothScroll";
import Ticker from "./components/Ticker";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StatStrip from "./components/StatStrip";
import Ledger from "./components/Ledger";
import Problems from "./components/Problems";
import WhyUs from "./components/WhyUs";
import Demos from "./components/Demos";
import Pricing from "./components/Pricing";
import Steps from "./components/Steps";
import Bonus from "./components/Bonus";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

export default function App() {
  return (
    <SmoothScroll>
      <div className="paper-texture" />
      <div className="paper-glow" />
      <div className="relative z-[1] pb-16 sm:pb-0">
        <Ticker />
        <Nav />
        <main>
          <Hero />
          <StatStrip />
          <Ledger />
          <Problems />
          <WhyUs />
          <Demos />
          <Pricing />
          <Steps />
          <Bonus />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <MobileBar />
      </div>
    </SmoothScroll>
  );
}
