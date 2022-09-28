import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Examples } from "./components/Exapmles";
import { Advantages } from "./components/Advantages";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Examples />
        <Advantages />
      </main>
    </div>
  );
}

export default App;
