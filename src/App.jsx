import "./App.css";
import Device from "./components/Device";
import Discover from "./components/Discover";
import FAQs from "./components/FAQs";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Footer from "./components/Footer";
import HappyUsers from "./components/HappyUsers";
import HowItsWork from "./components/HowItsWork";
import NavbarAndBanner from "./components/NavbarAndBanner";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Waitlist from "./components/Waitlist";

function App() {
  return (
    <div className="lg:max-w-[1400px] mx-auto">
      <NavbarAndBanner></NavbarAndBanner>
      <HappyUsers></HappyUsers>
      <Device></Device>
      <Feature1></Feature1>
      <Feature2></Feature2>
      <Waitlist></Waitlist>
      <HowItsWork></HowItsWork>
      <Discover></Discover>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
      <FAQs></FAQs>
      <Footer></Footer>
    </div>
  );
}

export default App;
