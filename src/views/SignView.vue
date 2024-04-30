<!-- <template>
  <div id="app">
    <div class="container" id="container">
      <div class="form-container sign-up">
        <form>
          <h1>Crie sua Conta</h1>
  
          <input type="text" placeholder="Primeiro Nome">
          <input type="text" placeholder="Ultimo Nome">
          <input type="email" placeholder="E-mail">
          <input type="password" placeholder="Senha">
          <button>Enviar</button>
        </form>
      </div>
      <div class="form-container sign-in">
        <form>
          <h1>Login</h1>
  
          <input type="email" placeholder="E-mail">
          <input type="password" placeholder="Senha">
          <a href="#">Esqueceu sua senha?</a>
          <button @click="irParaDashboard">Entrar</button>
        </form>
      </div>
  
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>Oi!</h1>
            <p>Bem-Vindo de Volta</p>
            <p>Você está a apenas um passo do seu DashBoard</p>
            <p>Já tem uma conta? <br>
              Entre agora.</p>
            <button class="hidden" id="login">Entrar</button>
          </div>
          <div class="toggle-panel toggle-right">
            <h1>Oi!</h1>
            <p>Bem-Vindo</p>
            <p>você está a apenas um passo do seu DashBoard</p>
            <p>Não tem uma conta?</p>
            <button class="hidden" id="register">Cadastre-se</button>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
  </template> -->

  <template>
    <RouterView/>
    <div id="app">
      <div class="container" id="container">
        <div class="form-container sign-up">
          <form>
            <h1>Crie sua Conta</h1>
            <input type="text" placeholder="Primeiro Nome">
            <input type="text" placeholder="Ultimo Nome">
            <input type="email" placeholder="E-mail">
            <input type="password" placeholder="Senha">
            <button>Enviar</button>
          </form>
        </div>
        <div class="form-container sign-in">
          <form>
            <h1>Login</h1>
            <input type="email" placeholder="E-mail">
            <input type="password" placeholder="Senha">
            <a href="#">Esqueceu sua senha?</a>
            <button @click="irParaDashboard">Entrar</button>
            <!-- <router-link :to="{ name: 'Dashboard' }">Entrar</router-link> -->
          </form>
        </div>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-panel toggle-left">
              <h1>Oi!</h1>
              <p>Bem-Vindo de Volta</p>
              <p>Você está a apenas um passo do seu DashBoard</p>
              <p>Já tem uma conta? <br>
                Entre agora.</p>
              <button class="hidden" id="login">Entrar</button>
            </div>
            <div class="toggle-panel toggle-right">
              <h1>Oi!</h1>
              <p>Bem-Vindo</p>
              <p>Você está a apenas um passo do seu DashBoard</p>
              <p>Não tem uma conta?</p>
              <button class="hidden" id="register">Cadastre-se</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
    import { RouterView, useRouter } from 'vue-router';
    import { onMounted } from 'vue';
    
    function app() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
  
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
      });
  
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
      });
  }
  
  const router = useRouter();
  
  function irParaDashboard() {
    router.push('/dashboard');
  }
  
  onMounted(() => {
      app();
    });
  
  </script>
  
  <style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    background-color: burlywood;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }
  
  .container{
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
  }
  
  .container h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
  }
  
  .container p{
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
    font-family: 'JetBrains Mono', sans-serif;
  }
  
  .container a{
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
  }
  
  .container button{
    background-color: brown;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
  }
  
  .container #route {
    background-color: brown;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
  }
  
  .container button.hidden {
    background-color: transparent;
    border-color: #fff;
  }
  
  .container button a {
    text-decoration: none;
  }
  
  .container form{
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
  }
  
  .container input{
    background-color: #FDEAAB;
    border: none;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.3);
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
  }
  
  .container input::placeholder {
  font-family: 'JetBrains Mono', sans-serif;
  }
  
  .form-container{
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }
  
  .form-container .enter a {
    color: white;
  }
  
  .sign-in{
    left: 0;
    width: 50%;
    z-index: 2;
  }
  
  .container.active .sign-in{
    transform: translateX(100%);
  }
  
  .sign-up{
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }
  
  .container.active .sign-up{
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
  }
  
  @keyframes move{
    0%, 49.99%{
        opacity: 0;
        z-index: 1;
    }
    50%, 100%{
        opacity: 1;
        z-index: 5;
    }
  }
  
  .toggle-container{
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 100px;
    z-index: 1000;
  }
  
  .container.active .toggle-container{
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
  }
  
  .toggle{
    background-color: #512da8;
    height: 100%;
    /* background: linear-gradient(to right, #5c6bc0, #512da8); */
    background: brown;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }
  
  .container.active .toggle{
    transform: translateX(50%);
  }
  
  .toggle-panel{
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }
  
  .toggle-left{
    transform: translateX(-200%);
  }
  
  .container.active .toggle-left{
    transform: translateX(0);
  }
  
  .toggle-right{
    right: 0;
    transform: translateX(0);
  }
  
  .container.active .toggle-right{
    transform: translateX(200%);
  }
  </style>