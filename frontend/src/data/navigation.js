export const publicNavigationItems = [
  { label: "Inicio", path: "/" },
  { label: "Iniciar sesión", path: "/login" },
];
export const privateNavigationItems = [
  { label: "Inicio", path: "/" },
  { label: "Diccionario", path: "/dictionary" },
  { label: "Recetas", path: "/recipes" },
  { label: "Viajes", path: "/travel" },
  { label: "Salir", action: "logout", variant: "danger" },
];