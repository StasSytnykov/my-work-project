import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Container } from "./components/Container/Container.styled";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;
