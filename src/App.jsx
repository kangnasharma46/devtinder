import { Body } from "./components/Body";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Body />>
            <Route path="/login"></Route>
            <Route path="/profile"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
