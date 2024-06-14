<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold my-4">Projetos</h1>
     <router-link to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Home</router-link>
    <router-link to="/Estudos" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Estudos</router-link>
    <router-link to="/Experiencia" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Experiencia</router-link>
   
    <div class="mt-6">
      <input
        v-model="filtro"
        @input="filtrarProjetos"
        type="text"
        placeholder="Filtrar por tecnologia"
        class="p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div
        v-for="proj in projetosFiltrados"
        :key="proj.id"
        class="bg-white p-4 shadow-md rounded-lg"
      >
        <h2 class="text-2xl font-bold">{{ proj.titulo }}</h2>
        <p class="mt-2"><strong>Descrição:</strong> {{ proj.descricao }}</p>
        <p class="mt-2"><strong>Data Início:</strong> {{ formatDate(proj.dataInicio) }}</p>
        <p class="mt-2"><strong>Data Final:</strong> {{ formatDate(proj.dataFinal) }}</p>
        <p class="mt-2"><strong>Tecnologias:</strong> {{ proj.listaDeTecnologias.join(', ') }}</p>
        <p class="mt-2"><strong>Links:</strong></p>
        <ul class="list-disc ml-4">
          <li><a :href="proj.linkGit" class="text-blue-500 hover:text-blue-700" target="_blank">GitHub</a></li>
          <li><a :href="proj.linkWeb" class="text-blue-500 hover:text-blue-700" target="_blank">Website</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getProjetos } from '../services/api';

export default {
  name: 'Projetos-Page',
  data() {
    return {
      projetos: [],
      filtro: '',
      projetosFiltrados: []
    };
  },
  created() {
    this.fetchProjetos();
  },
  methods: {
    async fetchProjetos() {
      try {
        this.projetos = await getProjetos();
        this.projetosFiltrados = this.projetos;
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    },
    filtrarProjetos() {
      const filtroLowerCase = this.filtro.toLowerCase();
      this.projetosFiltrados = this.projetos.filter((proj) =>
        proj.listaDeTecnologias.some((tec) =>
          tec.toLowerCase().includes(filtroLowerCase)
        )
      );
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('pt-BR', options);
    }
  }
};
</script>

<style>
/* Adicione seu estilo aqui */
</style>
