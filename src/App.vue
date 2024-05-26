<template>
  <div id="app">
    <Header_Page />
    <div class="main-content">
      <router-view></router-view> <!-- Componente para mostrar las vistas dinámicamente -->
    </div>
    <Footer_Page />
  </div>
</template>

<script>
import Header_Page from './components/Header_Page.vue';
import Footer_Page from './components/Footer_Page.vue';

export default {
  name: 'App',
  components: {
    Header_Page,
    Footer_Page
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  flex-shrink: 0;
}
</style>
