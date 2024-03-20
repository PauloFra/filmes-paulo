import React from "react";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import "./register.styles.scss";

function Register() {
  const { postDados } = useApi();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj, formData);
    postDados(formDataObj);
    navigate("/");
  };

  return (
    <div>
      <div className="event-form--wrapper-top-box">
        <div className="event-form--box-title-text">
          <h1 className="event-form--title">Crie e compartilhe seu evento</h1>
          <p className="event-form--text">
            O primeiro passo, é preencher esse formulário de inscrição
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
                  <label className="event-form--label" for="event-title">
                    Nome Do filme
                    <span className="event-form--small-spans">
                      (minimo 8 caracteres)
                    </span>
                  </label>
                  <input
                    className="event-form--input"
                    type="text"
                    name="movieTitle"
                    id="movieTitle"
                    required
                  />
                </div>
                <div className="event-form--box-input-label">
                  <label className="event-form--label" for="event-link">
                    Diretor do Filme
                    <span className="event-form--small-spans">
                      (minimo 8 caracteres)
                    </span>
                  </label>
                  <input
                    className="event-form--input"
                    type="text"
                    name="movieDirection"
                    id="movieDirection"
                    required
                  />
                </div>
                <div className="event-form--box-input-label">
                  <label className="event-form--label" for="event-link">
                    Link do Banner do filme
                    <span className="event-form--small-spans">
                      (minimo 8 caracteres)
                    </span>
                  </label>
                  <input
                    className="event-form--input"
                    type="text"
                    name="movieBannerLink"
                    id="movieBannerLink"
                    required
                  />
                </div>
              </div>
              <div className="event-form--group-section">
                <h2 className="event-form--form-title">Descrição e Sinopse</h2>
                <div className="event-form--box-input-label">
                  <label className="event-form--label" for="event-title">
                    Descrição do Filme
                    <span className="event-form--small-spans">
                      (minimo 8 caracteres)
                    </span>
                  </label>
                  <textarea
                    className="event-form--input"
                    type="text"
                    name="movieDescription"
                    id="movieDescription"
                    required
                  ></textarea>
                </div>
                <div className="event-form--box-input-label">
                  <label className="event-form--label" for="event-link">
                    Nota pessoal
                    <span className="event-form--small-spans">
                      (minimo 8 caracteres)
                    </span>
                  </label>
                  <input
                    className="event-form--input"
                    type="text"
                    name="movieRate"
                    id="movieRate"
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
