import { useState } from "react";
import Header from "./Components/Header";
import Calculator from "./Components/Calculator";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Header/>
      <Calculator/>
    </section>
  );
}

export default App;
