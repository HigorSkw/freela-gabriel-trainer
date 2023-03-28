import React from "react";
import { About } from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HomeSection } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
