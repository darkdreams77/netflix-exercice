import "./App.css";
import data from "./assets/data.json";
import { Section } from "./components/Section";

function App() {
  return (
    <>
      <header>
        <a href="/">
          <img src="/src/assets/logo.png" alt="Netflix" className="logo" />
        </a>
      </header>
      {data.map((el) => (
        <Section title={el.category} images={el.images} />
      ))}
    </>
  );
}

export default App;
