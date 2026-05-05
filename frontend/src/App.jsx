import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";

import BackgroundClouds from "./components/BackgroundClouds";
import Layout from "./layouts/Principal";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <HashRouter>
          <BackgroundClouds />

          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Private routes */}
            <Route element={<Layout />}>
              {/* Future routes */}
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
