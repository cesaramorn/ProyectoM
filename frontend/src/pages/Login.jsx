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
  const [showForgot, setShowForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

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

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setResetSent(false);

    const redirectTo = window.location.origin + "/ProyectoM/";
    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo,
    });

    if (error) {
      setError(error.message);
    } else {
      setResetSent(true);
      setError(null);
    }
  };

  return (
    <div className="login">
      <Menu items={publicNavigationItems} isVisible />

      {!showForgot ? (
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

          <button
            type="button"
            className="login-forgot-link"
            onClick={() => setShowForgot(true)}
          >
            ¿Olvidaste tu contraseña?
          </button>

          {error && <p className="login-error">{error}</p>}
        </form>
      ) : (
        <form className="login-form" onSubmit={handleForgotPassword}>
          <p className="login-forgot-text">
            Introduce tu email y te enviaremos un enlace para restablecer tu
            contraseña.
          </p>

          <input
            type="email"
            placeholder="Email"
            value={resetEmail}
            onChange={(e) => {
              setResetEmail(e.target.value);
              if (error) setError(null);
            }}
            required
          />

          <button type="submit">Enviar enlace</button>

          <button
            type="button"
            className="login-forgot-link"
            onClick={() => {
              setShowForgot(false);
              setError(null);
              setResetSent(false);
            }}
          >
            Volver al inicio de sesión
          </button>

          {resetSent && (
            <p className="login-success">
              Revisa tu correo. El enlace expira en 1 hora.
            </p>
          )}

          {error && !resetSent && <p className="login-error">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default Login;