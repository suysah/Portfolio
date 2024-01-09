import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Intro from "./Pages/Homepage/Intro";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="skill" element={<Skills />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {/* <Intro /> */}
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
