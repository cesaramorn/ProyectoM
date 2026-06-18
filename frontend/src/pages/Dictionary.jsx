import { useEffect, useState } from "react";

import supabase from "../services/supabaseClient";

import WordCard from "../components/dictionary/WordCard";

import "./Dictionary.css";

function Dictionary() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function fetchWords() {
      const { data, error } = await supabase
        .from("Palabras")
        .select("*");

      if (error) {
        console.error("Error loading words:", error);
        return;
      }

      const sortedWords = [...data].sort((a, b) =>
        a.palabra.localeCompare(b.palabra)
      );

      setWords(sortedWords);
    }

    fetchWords();
  }, []);

  return (
    <section className="dictionary">
      <h1 className="page-title">
        Algunas de nuestras palabras...
      </h1>

      {words.map((word) => (
        <WordCard
          key={word.id}
          word={word.palabra}
          definition={word.definicion}
          author={word.autor}
        />
      ))}
    </section>
  );
}

export default Dictionary;