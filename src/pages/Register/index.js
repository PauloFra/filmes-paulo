import React, { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useNavigate, useParams } from "react-router-dom";
import "./register.styles.scss";

function Register() {
  const { id } = useParams(); // Captura o ID dos parâmetros da URL
  const { postDados, getDadosById, putDados } = useApi();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    movieTitle: "",
    movieDirection: "",
    movieBannerLink: "",
    movieDescription: "",
    movieRate: "",
  });

  useEffect(() => {
    if (id) {
      // Fetch data for editing if ID is provided
      getDadosById(id).then((data) => {
        setFormData(data);
      });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      // If ID is provided, update the existing data
      putDados(id, formData).then(() => {
        navigate("/");
      });
    } else {
      // Otherwise, create new data
      postDados(formData).then(() => {
        navigate("/");
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="event-form--wrapper-top-box">
        <div className="event-form--box-title-text">
          <h1 className="event-form--title">Crie e compartilhe seu evento</h1>
          <p className="event-form--text">
            O primeiro passo é preencher este formulário de inscrição
          </p>
        </div>
      </div>
      <div className="event-form--container">
        <div className="event-form--form-box">
          <form onSubmit={handleSubmit} className="event-form--form">
            <div className="event-form--all-group-section">
              <div className="event-form--group-section">
                <h2 className="event-form--form-title">Informações do Filme</h2>
                <div className="event-form--box-input-label">
                  <label className="event-form--label" htmlFor="movieTitle">
                    Nome do Filme
                    <span className="event-form--small-spans">
                      (mínimo 8 caracteres)
                    </span>
                  </label>
                  <input
                    className="event-form--input"
                    type="text"
                    name="movieTitle"
                    id="movieTitle"
                    value={formData.movieTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="event-form--box-input-label">
                  <label className="event-form--label" htmlFor="movieDirection">
                    Diretor do Filme
                    <span className="event-form--small-spans">
                      (mínimo 8 caracteres)
                    </span>
                  </label>
                  <input
                    className="event-form--input"
                    type="text"
                    name="movieDirection"
                    id="movieDirection"
                    value={formData.movieDirection}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="event-form--box-input-label">
                  <label
                    className="event-form--label"
                    htmlFor="movieBannerLink"
                  >
                    Link do Banner do Filme
                    <span className="event-form--small-spans">
                      (mínimo 8 caracteres)
                    </span>
                  </label>
                  <input
                    className="event-form--input"
                    type="text"
                    name="movieBannerLink"
                    id="movieBannerLink"
                    value={formData.movieBannerLink}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="event-form--group-section">
                <h2 className="event-form--form-title">Descrição e Sinopse</h2>
                <div className="event-form--box-input-label">
                  <label
                    className="event-form--label"
                    htmlFor="movieDescription"
                  >
                    Descrição do Filme
                    <span className="event-form--small-spans">
                      (mínimo 8 caracteres)
                    </span>
                  </label>
                  <textarea
                    className="event-form--input"
                    name="movieDescription"
                    id="movieDescription"
                    value={formData.movieDescription}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="event-form--box-input-label">
                  <label className="event-form--label" htmlFor="movieRate">
                    Nota pessoal
                    <span className="event-form--small-spans">
                      (mínimo 8 caracteres)
                    </span>
                  </label>
                  <input
                    className="event-form--input"
                    type="text"
                    name="movieRate"
                    id="movieRate"
                    value={formData.movieRate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="event-form--box-button">
              <button className="event-form--button">Salvar evento</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
