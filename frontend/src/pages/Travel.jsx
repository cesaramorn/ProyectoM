import { useEffect, useState } from "react";

import supabase from "../services/supabaseClient";

import TravelCard from "../components/travel/TravelCard";

import { parseSpanishMonthYear } from "../utils/date";

import "./Travel.css";

function Travel() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    async function fetchTravels() {
      const { data, error } = await supabase
        .from("Viajes")
        .select("*");

      if (error) {
        console.error("Error fetching travels:", error);
        return;
      }

      const sortedTravels = [...data].sort(
        (a, b) =>
          parseSpanishMonthYear(b.fecha) -
          parseSpanishMonthYear(a.fecha)
      );

      setTravels(sortedTravels);
    }

    fetchTravels();
  }, []);

  return (
    <section className="travel-page">
      <h1 className="page-title">
        Un paseo por nuestras aventuras...
      </h1>

      <div className="travel-list">
        {travels.map((travel) => (
          <TravelCard
            key={travel.id}
            image={travel.imagen}
            title={travel.nombre}
            date={travel.fecha}
            description={travel.descripcion}
          />
        ))}
      </div>
    </section>
  );
}

export default Travel;