<!-- Header.vue -->
<template>
    <header>
      <div class="container">
        <div class="logo">
          <img src="../assets/logo.png" alt="Logo de la tienda">

        </div>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <div class="cart">
          <a href="#">Carrito</a>
          <span class="badge">0</span>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    // Lógica del componente si es necesario
  }
  </script>
  
  <style>
  header {
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .logo img {
    max-height: 50px;
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    display: inline-block;
    margin-right: 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  
  .cart {
    position: relative;
  }
  
  .cart a {
    text-decoration: none;
    color: #333;
  }
  
  .cart .badge {
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: #ff5722;
    color: #fff;
    border-radius: 50%;
    padding: 5px;
    font-size: 12px;
  }
  </style>
  