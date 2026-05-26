import "./App.css";
import data from "./assets/data.json";
import { Section } from "./components/Section";

import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <header>
        <a href="/">
          <img src={logo} alt="Netflix" className="logo" />
        </a>
      </header>
      <main>
        {data.map((el) => (
          <Section title={el.category} images={el.images} />
        ))}
      </main>
    </>
  );
}

export default App;
