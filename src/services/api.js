import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolioapi.lucasvaz.dev.br/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getProjetos = async () => {
  try {
    const response = await api.get('/projeto');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    throw error;
  }
};

export const getEstudos = async () => {
  try {
    const response = await api.get('/estudo');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar estudos:', error);
    throw error;
  }
};

export const getExperiencia = async () => {
  try {
    const response = await api.get('/experiencia');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar experiencias:', error);
    throw error;
  }
};

export const getTecnologia = async () => {
  try {
    const response = await api.get('/tecnologias');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tecnologias:', error);
    throw error;
  }
};
