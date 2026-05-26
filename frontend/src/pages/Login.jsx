import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicNavigationItems } from "../data/navigation";

import supabase from "../services/supabaseClient";
import "./Login.css";

import Menu from "../components/menu/Menu";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message === "Invalid login credentials") {
        setError("Invalid email or password.");
      } else {
        setError("Unexpected error. Please try again.");
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login">
      <Menu items={publicNavigationItems} isVisible />
      <form className="login-form" onSubmit={handleLogin} noValidate>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError(null);
          }}
        />

        <button type="submit">Login</button>

        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;