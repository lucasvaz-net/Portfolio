<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-4">Experiência</h1>
    <router-link to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Home</router-link>
    <router-link to="/Projetos" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Projetos</router-link>
    <router-link to="/Estudos" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Estudos</router-link>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div class="bg-white rounded-lg shadow-md p-6 border border-gray-200" v-for="exp in experiencias" :key="exp.id">
        <h2 class="text-2xl font-semibold mb-2">{{ exp.titulo }}</h2>
        <p class="mb-2"><strong>Descrição:</strong> {{ exp.descricao }}</p>
        <p class="mb-2"><strong>Local:</strong> {{ exp.local }}</p>
        <p class="mb-2"><strong>Cargo:</strong> {{ exp.cargo }}</p>
        <p class="mb-2"><strong>Período:</strong> {{ formatDate(exp.dataInicio) }} - {{ formatDate(exp.dataFinal) }}</p>
        <p class="mb-2"><strong>Tecnologias:</strong> {{ exp.listaDeTecnologias.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getExperiencia } from '../services/api';

export default {
  name: 'Experiencia-Page',
  data() {
    return {
      experiencias: []
    };
  },
  created() {
    this.fetchExperiencias();
  },
  methods: {
    async fetchExperiencias() {
      try {
        this.experiencias = await getExperiencia();
      } catch (error) {
        console.error('Erro ao buscar experiências:', error);
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
/* Adicione seu estilo personalizado aqui, se necessário */
</style>
