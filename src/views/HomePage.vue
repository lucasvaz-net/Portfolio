<template>
  <div>
    <h1>Home Page</h1>
   <router-link to="/Projetos" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Projetos</router-link>
    <router-link to="/Estudos" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Estudos</router-link>
    <router-link to="/Experiencia" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Experiencia</router-link>
   
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style>
/* Adicione seu estilo aqui */
</style>
