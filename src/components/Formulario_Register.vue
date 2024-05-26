<template>
  <div class="register-container">
    <h2>Registrarse</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" placeholder="Ingresa tu nombre de usuario" required>
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" placeholder="Ingresa tu correo electrónico" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" placeholder="Ingresa tu contraseña" required>
      </div>
      <button type="submit">Registrarse</button>
      <button type="button" @click="redirectToLogin" class="login-button">¿Ya estás registrado?</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    registerUser() {
      // Aquí iría la lógica para registrar al usuario
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      console.log('Registrando usuario:', userData);
    },
    redirectToLogin() {
      this.$router.push('/'); // Redirige al usuario a la página de inicio de sesión
    }
  }
}
</script>

<style>
.register-container {
  max-width: 500px;
  margin: 120px auto;
  padding: 70px;
  border: 3px solid #4CAF50; /* Borde verde */
  border-radius: 10px; /* Esquinas más redondeadas */
  background-color: #F9F9F9; /* Fondo ligeramente más claro */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra más suave */
  transition: transform 0.3s ease; /* Animación de transformación */
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.login-button {
  margin-top: 10px;
  width: auto;
  align-self: center;
  font-size: 14px;
  background-color: transparent;
  color: #007bff;
  border: none;
}
</style>
