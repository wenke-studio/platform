import DemoComponent from "@/DemoComponent";
import { IconArrowLeft } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const DemoAction = () => {
  return (
    <motion.div
      className="w-[20px] h-[20px] bg-red-500"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

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
        <div>
          <DemoAction />
        </div>
      </div>
    </>
  );
}

export default App;
