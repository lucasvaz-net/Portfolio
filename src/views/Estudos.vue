<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold my-4">Estudos</h1>
    <router-link to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Home</router-link>
    <router-link to="/Projetos" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Projetos</router-link>
    <router-link to="/Experiencia" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Experiencia</router-link>
    <div class="mt-6">
      <input
        v-model="filtro"
        @input="filtrarEstudos"
        type="text"
        placeholder="Filtrar por tecnologia"
        class="p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div
        v-for="estudo in estudosFiltrados"
        :key="estudo.id"
        class="bg-white p-4 shadow-md rounded-lg"
      >
        <h2 class="text-2xl font-bold">{{ estudo.titulo }}</h2>
        <p class="mt-2"><strong>Descrição:</strong> {{ estudo.descricao }}</p>
        <p class="mt-2"><strong>Local:</strong> {{ estudo.local }}</p>
        <p class="mt-2"><strong>Período:</strong> {{ formatDate(estudo.dataInicio) }} - {{ formatDate(estudo.dataFinal) }}</p>
        <p class="mt-2"><strong>Tecnologias:</strong> {{ estudo.listaDeTecnologias.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getEstudos } from '../services/api';

export default {
  name: 'Estudos-Page',
  data() {
    return {
      estudos: [],
      filtro: '',
      estudosFiltrados: []
    };
  },
  created() {
    this.fetchEstudos();
  },
  methods: {
    async fetchEstudos() {
      try {
        this.estudos = await getEstudos();
        this.estudosFiltrados = this.estudos;
      } catch (error) {
        console.error('Erro ao buscar estudos:', error);
      }
    },
    filtrarEstudos() {
      const filtroLowerCase = this.filtro.toLowerCase();
      this.estudosFiltrados = this.estudos.filter((estudo) =>
        estudo.listaDeTecnologias.some((tec) =>
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
