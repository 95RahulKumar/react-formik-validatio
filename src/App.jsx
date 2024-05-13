import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./component/Signup";
import Container from "./component/container/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="h-screen w-full flex justify-center items-center
      "
      >
        <Container classname="bg-zinc-200 px-5 py-4 rounded-md max-w-[360px]">
          <h1 className="text-center font-semibold text-xl text-green-500">
            Sign Up
          </h1>
          <Signup />
        </Container>
      </div>
    </>
  );
}

export default App;
