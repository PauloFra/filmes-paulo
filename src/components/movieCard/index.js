import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./movieCard.styles.scss";
function MovieCard({ item, handleDelete }) {
  const [isHide, setIsHide] = useState(false);
  return (
    <button
      onMouseEnter={() => {
        setIsHide(true);
      }}
      onMouseLeave={() => {
        setIsHide(false);
      }}
      className={`movie-card--movie-wrapper ${isHide ? 'movie-card--seeing-movie-wrapper' : ''}`}
    >
      <img
        src={item.movieBannerLink}
        className="movie-card--movie-image"
        alt=""
      />

      {
        isHide && (
          <div className="movie-card--movie-wrapper-hidden">
            <p className="movie-card--paragraph">
              Titulo do Filme: {item.movieTitle}
            </p>
            <p className="movie-card--paragraph">
              Diretor do Filme:{item.movieDirection}
            </p>
            <p className="movie-card--paragraph">
              Descrição{item.movieDescription}
            </p>
            <p className="movie-card--paragraph">Nota{item.movieRate}</p>
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
          </div>
        )
      }
    </button >
  );
}

export default MovieCard;
