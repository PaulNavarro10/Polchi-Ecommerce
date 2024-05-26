<!-- Footer.vue -->
<template>
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Navegación</h3>
            <ul>
              <li><a href="#">Formas de Pago</a></li>
              <li><a href="#">Reglas de uso</a></li>
              <li><a href="#">Politicas de privacidad</a></li>
              <li><a href="#">Adveetencia legal</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contacto</h3>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Correo electrónico: info@tiendaderopa.com</p>
          </div>
          <div class="footer-section">
            <h3>Síguenos</h3>
            <ul class="social-icons">
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2024 Tienda de Ropa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Lógica del componente si es necesario
  }
  </script>
  
  <style>
  footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
  }
  
  .footer-section {
    flex: 1;
    margin-right: 20px;
  }
  
  .footer-section h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 8px;
  }
  
  .social-icons {
    display: flex;
    padding: 0;
  }
  
  .social-icons li {
    margin-right: 10px;
  }
  
  .social-icons li:last-child {
    margin-right: 0;
  }
  
  .social-icons a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
  }
  
  .social-icons a:hover {
    color: #ff5722;
  }
  
  .copyright {
    margin-top: 20px;
    text-align: center;
  }
  </style>
  