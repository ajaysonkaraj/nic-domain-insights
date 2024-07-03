import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Hero from "./components/Hero";
import Footer from "components/footer/Footer";
function Home() {
  return (
    <>
      <div>
        <div className="mx-[5%]">
          <Navbar />

          <div className=" mt-5">
            <Hero />
          </div>
          <News />
        </div>
        <div>
        <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
