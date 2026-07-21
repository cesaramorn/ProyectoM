import { useState } from "react";
import { useNavigate } from "react-router-dom";

import supabase from "../services/supabaseClient";

import "./Login.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setError(updateError.message);
    } else {
      setMessage("Contraseña actualizada correctamente.");
      setTimeout(() => navigate("/login", { replace: true }), 2500);
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleReset} noValidate>
        <h2 className="login-title">Restablecer contraseña</h2>

        <input
          type="password"
          placeholder="Nueva contraseña"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError(null);
          }}
          required
          minLength={6}
        />

        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
            if (error) setError(null);
          }}
          required
        />

        <button type="submit">Actualizar contraseña</button>

        {message && <p className="login-success">{message}</p>}
        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
}

export default ResetPassword;
