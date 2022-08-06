import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./container/SignIn/SignIn";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import CreateAccount from "./container/CreateAccount/CreateAccount";

const App = () => (
  <Router>
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
    </UserAuthContextProvider>
  </Router>
);

export default App;
