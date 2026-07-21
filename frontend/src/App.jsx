import { useEffect } from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import "./App.css";

import BackgroundClouds from "./components/BackgroundClouds";
import Layout from "./layouts/Principal";

import Dictionary from "./pages/Dictionary";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Recipes from "./pages/Recipes";
import ResetPassword from "./pages/ResetPassword";
import Travel from "./pages/Travel";

function AuthEventHandler() {
  const { isRecoverySession } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isRecoverySession) {
      navigate("/reset-password", { replace: true });
    }
  }, [isRecoverySession, navigate]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <HashRouter>
          <BackgroundClouds />
          <AuthEventHandler />

          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Private routes */}
            <Route element={<Layout />}>
              <Route path="/travel" element={<Travel />} />
              <Route path="/dictionary" element={<Dictionary />} />
              <Route path="/recipes" element={<Recipes />} />
            </Route>

            <Route path="*" element={<Home />} />
          </Routes>
        </HashRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
