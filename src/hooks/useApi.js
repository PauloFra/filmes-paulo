import { useState, useEffect } from "react";
import { api } from "../api/api";

const useApi = () => {
  const [error, setError] = useState(null);
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getDados = async () => {
      try {
        const response = await api.get("http://localhost:3001/dados");
        setDados(response.data);
      } catch (error) {
        setError(error);
      }
    };

    getDados();
  }, []);

  const postDados = async (dados) => {
    try {
      setLoading(true);
      const response = await api.post("/dados", dados);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };

  const deleteDados = async (id) => {
    try {
      setLoading(true);
      const response = await api.delete(`/dados/${id}`);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };

  return {
    dados,
    postDados,
    deleteDados,
    loading,
    error,
  };
};

export default useApi;
