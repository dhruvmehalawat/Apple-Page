import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
    <NavBar/>
    <Hero/>
    <Product/>
    <Showcase/>
    </main>
  );
};

export default App;