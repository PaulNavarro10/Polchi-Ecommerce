import { createWebHistory, createRouter } from 'vue-router'; // Importa createWebHistory y createRouter
import Formulario_Register from './components/Formulario_Register.vue';
import Formulario_Login from './components/Formulario_Login.vue';

const routes = [
  { path: '/', component: Formulario_Login },
  { path: '/register', component: Formulario_Register }
];

// Configuración del router
// createWebHistory: crea una instancia de historial de navegación basada en el objeto de la API de History de navegador
// createRouter: crea una instancia de router que se encargará de administrar las rutas de la aplicación
// history: especifica la instancia de historial de navegación que se utilizará
// routes: especifica un array de objetos que describen las rutas de la aplicación. Cada objeto tiene dos propiedades: path y component. La propiedad path es la ruta y la propiedad component es el componente que se mostrará cuando se navegue a esa ruta. En este caso, se están definiendo las rutas '/login' y '/register' y los componentes correspondientes 'Formulario_Login' y 'Formulario_Register'.

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
