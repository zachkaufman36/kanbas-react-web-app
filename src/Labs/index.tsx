import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import { Route, Routes, Navigate } from "react-router-dom";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Zachary Kaufman</h1><b /> 
      <h1>Online Section Spring 2025</h1>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="" element={<Navigate to="Lab1" />}/>
        <Route path="Lab1" element={<Lab1 />}/>
        <Route path="Lab2" element={<Lab2 />}/>
        <Route path="Lab3" element={<Lab3 />}/>
      </Routes>
      <a href="https://github.com/zachkaufman36/kanbas-react-web-app">Link to My Github</a>
    </div>
);}
