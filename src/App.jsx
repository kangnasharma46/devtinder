import { Body } from "./components/Body";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utlis/appStore";
import { Feed } from "./components/Feed";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element=<Body />>
              <Route path="/" element=<Feed /> />
              <Route path="/login" element=<Login />></Route>
              <Route path="/profile" element=<Profile />></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
