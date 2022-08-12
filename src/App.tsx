import { useState } from "react";
import "./App.css";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledComponents />
    </div>
  );
}
