import React from "react";
import { About } from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HomeSection } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import ScrollReveal from "scrollreveal";

function App() {
  const sr = ScrollReveal({
    distance: "40px",
    duration: 2600,
    reset: true,
  });

  sr.reveal(".home-text", { delay: 300, origin: "left" });

  return (
    <div className="App">
      <Header />
      <HomeSection />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
