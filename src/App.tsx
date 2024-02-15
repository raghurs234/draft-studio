import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import About from "./components/about";
import Service from "./components/service";
import LatestProject from "./components/latestProject"
import Philosophy from "./components/philosophy"
import FututreProject from "./components/futureProject"
import Contact from "./components/contact"
import ClientFeedback from "./components/clientFeedback"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <LatestProject></LatestProject>
      <Philosophy></Philosophy>
      <FututreProject></FututreProject>
      <Contact></Contact>
      <ClientFeedback></ClientFeedback>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
