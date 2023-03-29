import React from "react";
import { About } from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HomeSection } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";

function App() {
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
