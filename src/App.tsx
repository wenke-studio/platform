import DemoComponent from "@/DemoComponent";
import { IconArrowLeft } from "@tabler/icons-react";
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <div>
          <span className="debug w-16 h-16">debug</span>
          <IconArrowLeft className="text-green-500" />
          <p>{import.meta.env.VITE_PROJECT_VERSION}</p>
        </div>
        <DemoComponent />
      </div>
    </>
  );
}

export default App;
