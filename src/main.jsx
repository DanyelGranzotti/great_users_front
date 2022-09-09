import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import User from "./pages/User/User";
import Register from "./pages/Register/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
