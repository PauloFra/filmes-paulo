import React, { useState } from "react";

import { Link } from "react-router-dom";
function MovieCard({ item, handleDelete }) {
  const [isHide, setIsHide] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHide(true);
      }}
      onMouseLeave={() => {
        setIsHide(false);
      }}
      className="home-page--movie-wrapper"
    >
      <div className="home-page--movie-wrapper-initial">
        <img
          src={item.movieBannerLink}
          className="home-page--movie-image"
          alt=""
        />
      </div>
      <div className="home-page--movie-wrapper-hidden">
        {isHide && (
          <>
            <p>Titulo do Filme: {item.movieTitle}</p>
            <p>Diretor do Filme:{item.movieDirection}</p>
            <p>Descrição{item.movieDescription}</p>
            <p>Nota{item.movieRate}</p>
            <Link to={`/register/${item.id}`}>
              <button>Editar Filme</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Deletar Filme
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
