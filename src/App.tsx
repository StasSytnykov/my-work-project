import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Examples } from "./components/Exapmles";
import { Advantages } from "./components/Advantages";
import { Clients } from "./components/Clients";
import { Pricing } from "./components/Pricing";
import { OurService } from "./components/OurService";
import { SignUp } from "./components/SignUp";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Examples />
        <Advantages />
        <Clients />
        <Pricing />
        <OurService />
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
