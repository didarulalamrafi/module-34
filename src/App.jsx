import { Suspense } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import NavbarCoustom from "./component/NavbarCoustom";

const promisData = fetch("pricingData.json").then(res => res.json());

function App() {
  return (
    <>
      <header>
        <NavbarCoustom></NavbarCoustom>
        {/* <Navbar></Navbar> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <pricingOption promisData={promisData}></pricingOption>
        </Suspense>
      </main>
    </>
  );
}

export default App;
