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
    setList(dados);
  }, [dados]);

  const filteredList = list.filter((item) =>
    item.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <label htmlFor="searchInput">Pesquisar:</label>
      <input
        id="searchInput"
        name="searchInput"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="home-page--movie-list">
        {filteredList &&
          filteredList.map((item) => (
            <MovieCard key={item.id} item={item} handleDelete={handleDelete} />
          ))}
      </div>
    </div>
  );
}

export default Home;
