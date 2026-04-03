import "./App.css";
import Navbar from "./component/navbar";
import NavbarCoustom from "./component/NavbarCoustom";

function App() {
  return (
    <>
      <header>
        <NavbarCoustom></NavbarCoustom>
        <Navbar></Navbar>
      </header>
      <main></main>
    </>
  );
}

export default App;
