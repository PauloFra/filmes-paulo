import React, { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import "./home.styles.scss";
import MovieCard from "../../components/movieCard";

function Home() {
  const { dados, deleteDados } = useApi();
  const [list, setList] = useState(dados);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    deleteDados(id);
    // Remover o usuário excluído da lista atualizada
    setList(list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (dados) {
      setList(dados);
    }
  }, [dados, deleteDados]);

  const filteredList = list.filter((item) =>
    item.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="home-page--body-section">
      <section className="home-page--main-section">
        <h1>Lista de usuarios</h1>
        <label htmlFor="searchInput">Pesquisar:</label>
        <input
          id="searchInput"
          name="searchInput"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />{" "}
        <h2>Best Movies</h2>
        <div className="home-page--movie-list">
          {filteredList.map((item) => (
            <MovieCard item={item} handleDelete={handleDelete} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
