import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Filters from "./components/Filters";
import Upperbar from "./components/Upperbar";

function App() {
  return (
    <>
      <Sidebar />

      <Upperbar />

      <Content />

      <Filters />
    </>
  );
}

export default App;
