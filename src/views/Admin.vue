<template>
    <NavDraw />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import NavDraw from '../components/NavDraw.vue';
  
  export default defineComponent({
    name: 'Admin',
  
    components: {
      NavDraw,
    },
  });
  </script>
  