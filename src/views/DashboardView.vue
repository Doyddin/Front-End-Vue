<!-- <template>
  <div class="container">
      <router-view></router-view>
      <div class="info">
        <div class="row">
          <div class="navbar col-2">
            <div class="icones novo-usuario col-10">
              <a href="addNewUser.html">
                <h2><i class="bi bi-person-fill-add"></i></h2>
                <strong>Novo Usuário</strong>
              </a>
            </div>
            <div class="icones tabela ativo col-6">
              <a>
                <h2><i class="bi bi-grid-3x2"></i></h2>
                <strong>Tabela</strong>
              </a>
            </div>
            <div class="icones ajudar col-6">
              <a href="">
                <h2><i class="bi bi-question-circle"></i></h2>
                <strong>Ajuda</strong>
              </a>
            </div>
          </div>
          <div class="fundo-canhoto col-10">
            <h4>Gestão de Canhotos</h4>
            <div class="row canhoto">
              <label>1.300 <b>Canhotos Encontrados:</b></label>
              <div class="test col-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected disabled>Categoria</option>
                  <option value="1">Alimentação</option>
                  <option value="2">Combustível</option>
                  <option value="3">Estadia</option>
                </select>
              </div>
              <div class="col-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected disabled>Valor</option>
                  <option value="1">100 até 2 mil</option>
                  <option value="2">2 mil até 5 mil</option>
                  <option value="3">5 mil até 7 mil</option>
                  <option value="4">7 mil até 10 mil</option>
                </select>
              </div>
              <div class="col-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected disabled>Transportadora</option>
                  <option value="1">Alfa Transportes</option>
                  <option value="2">Braspress</option>
                  <option value="3">Patrus</option>
                  <option value="4">Rodonaves</option>
                  <option value="5">TNT Mercúrio</option>
                </select>
              </div>
              <form class="d-flex col-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Procurar" aria-label="Search">
                <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
              </form>
              <p id="addCanhoto"><a href="cadastroCanhoto.html">Adicionar Canhotos</a></p>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Número NF</th>
                    <th scope="col">Entregador</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Categorias</th>
                    <th scope="col">Data</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr>
                    <th scope="row">1</th>
                    <td>0000000000</td>
                    <td>Test</td>
                    <td>9.999,00</td>
                    <td>Test</td>
                    <td>01/01/0001</td>
                    <td>
                      <a href="detalhesCanhoto.html"><i class="bi bi-eye"></i></a>
                      <a href="#"><i class="bi bi-pencil"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>0000000000</td>
                    <td>Test</td>
                    <td>9.999,00</td>
                    <td>Test</td>
                    <td>01/01/0001</td>
                    <td>
                      <a href="detalhesCanhoto.html"><i class="bi bi-eye"></i></a>
                      <a href="#"><i class="bi bi-pencil"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>0000000000</td>
                    <td>Test</td>
                    <td>9.999,00</td>
                    <td>Test</td>
                    <td>01/01/0001</td>
                    <td>
                      <a href="detalhesCanhoto.html"><i class="bi bi-eye"></i></a>
                      <a href="#"><i class="bi bi-pencil"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="clearfix">
                <div class="hint-text">5 Itens Por Página</div>
                <ul class="pagination">
                  <li class="page-iten disabled"><a href="" class="page-link">Anterior</a></li>
                  <li class="page-iten active"><a href="" class="page-link">1</a></li>
                  <li class="page-iten"><a href="" class="page-link">2</a></li>
                  <li class="page-iten"><a href="" class="page-link">3</a></li>
                  <li class="page-iten"><a href="" class="page-link">4</a></li>
                  <li class="page-iten"><a href="" class="page-link">5</a></li>
                  <li class="page-iten"><a href="" class="page-link">Próximo</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
// Nenhuma lógica necessária para este exemplo simples
</script>

<style scoped>
body {
  background-color: burlywood;
  color: black;
}

.info {
  margin-top: 0px;
  border-radius: 25px;
  background-color: brown;
}

.ativo {
  background-color: burlywood;
}

.navbar {
  background-color: brown;
  border-radius: 15px;
}

.navbar a {
  color: black;
}

.navbar a:hover {
  color: gray;
}

.novo-usuario i {
  margin: 3px;
}

.novo-usuario {
  margin-top: 30px;
}

.navbar h5 {
  margin-left: 20%;
  color: black;
}

.tabela {
  margin-left: 0;
}

.tabela h2 {
  margin-left: 33%;
}

.ajudar {
  margin-left: 0;
}

.ajudar h2 {
  margin-left: 33%;
}

.fundo-canhoto {
  background-color: white;
  border-radius: 25px;
}

.fundo-canhoto h4 {
  margin: 15px;
  padding-top: 15px;
}

.canhoto {
  margin: 50px;
}

.canhoto .col-2,
.col-3 {
  margin-bottom: 10px;
  margin-top: 8px;
}

#addCanhoto a {
  background-color: #fff;
  border: none;
  color: brown;
  font-size: 20px;
  font-weight: 500;
  font-family: 'JetBrains Mono', sans-serif;
}

#addCanhoto a:hover {
  color: red;
}

.container {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    /* overflow: hidden; */
    width: 1100px;
    max-width: 100%;
    min-height: 480px;
}

.container form .test .form-select {
  border: none !important;
  outline: none !important;
}

table td a {
  color: black;
}

/* paginação */

.pagination {
  float: right;
}

.pagination li a {
  border: none;
  font-size: 15px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}

.pagination li a:hover {
  color: #666;
}

.pagination li.active a,
.pagination li.active a.page-link {
  background-color: rgb(248, 2, 2);
}

.pagination li.active a:hover {
  background-color: rgb(228, 2, 2);
}

.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 15px;
}
</style> -->


<template>
  <div class="container">
      <router-view></router-view>
      <div class="info">
        <div class="row">
          <div class="navbar col-2">
            <div class="icones novo-usuario col-10">
              <a href="addNewUser.html">
                <h2><i class="bi bi-person-fill-add"></i></h2>
                <strong>Novo Usuário</strong>
              </a>
            </div>
            <div class="icones tabela ativo col-6">
              <a>
                <h2><i class="bi bi-grid-3x2"></i></h2>
                <strong>Tabela</strong>
              </a>
            </div>
            <div class="icones ajudar col-6">
              <a href="">
                <h2><i class="bi bi-question-circle"></i></h2>
                <strong>Ajuda</strong>
              </a>
            </div>
          </div>
          <div class="fundo-canhoto col-10">
            <!-- <h4>Gestão de Canhotos</h4> -->
            <div class="row canhoto">
              <!-- <label>1.300 <b>Canhotos Encontrados:</b></label> -->
              <div class="test col-3">
                <!-- <select class="form-select" aria-label="Default select example">
                  <option selected disabled>Categoria</option>
                  <option value="1">Alimentação</option>
                  <option value="2">Combustível</option>
                  <option value="3">Estadia</option>
                </select> -->
              </div>
              <div class="col-3">
                <!-- <select class="form-select" aria-label="Default select example">
                  <option selected disabled>Valor</option>
                  <option value="1">100 até 2 mil</option>
                  <option value="2">2 mil até 5 mil</option>
                  <option value="3">5 mil até 7 mil</option>
                  <option value="4">7 mil até 10 mil</option>
                </select> -->
              </div>
              <div class="col-3">
                <!-- <select class="form-select" aria-label="Default select example">
                  <option selected disabled>Transportadora</option>
                  <option value="1">Alfa Transportes</option>
                  <option value="2">Braspress</option>
                  <option value="3">Patrus</option>
                  <option value="4">Rodonaves</option>
                  <option value="5">TNT Mercúrio</option>
                </select> -->
              </div>
              <!-- <form class="d-flex col-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Procurar" aria-label="Search">
                <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
              </form>
              <p id="addCanhoto"><a href="cadastroCanhoto.html">Adicionar Canhotos</a></p> -->
              <!-- <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Número NF</th>
                    <th scope="col">Entregador</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Categorias</th>
                    <th scope="col">Data</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr>
                    <th scope="row">1</th>
                    <td>0000000000</td>
                    <td>Test</td>
                    <td>9.999,00</td>
                    <td>Test</td>
                    <td>01/01/0001</td>
                    <td>
                      <a href="detalhesCanhoto.html"><i class="bi bi-eye"></i></a>
                      <a href="#"><i class="bi bi-pencil"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>0000000000</td>
                    <td>Test</td>
                    <td>9.999,00</td>
                    <td>Test</td>
                    <td>01/01/0001</td>
                    <td>
                      <a href="detalhesCanhoto.html"><i class="bi bi-eye"></i></a>
                      <a href="#"><i class="bi bi-pencil"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>0000000000</td>
                    <td>Test</td>
                    <td>9.999,00</td>
                    <td>Test</td>
                    <td>01/01/0001</td>
                    <td>
                      <a href="detalhesCanhoto.html"><i class="bi bi-eye"></i></a>
                      <a href="#"><i class="bi bi-pencil"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table> -->
              <div class="clearfix">
                <!-- <div class="hint-text">5 Itens Por Página</div> -->
                <!-- <ul class="pagination">
                  <li class="page-iten disabled"><a href="" class="page-link">Anterior</a></li>
                  <li class="page-iten active"><a href="" class="page-link">1</a></li>
                  <li class="page-iten"><a href="" class="page-link">2</a></li>
                  <li class="page-iten"><a href="" class="page-link">3</a></li>
                  <li class="page-iten"><a href="" class="page-link">4</a></li>
                  <li class="page-iten"><a href="" class="page-link">5</a></li>
                  <li class="page-iten"><a href="" class="page-link">Próximo</a></li>
                </ul> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
// 
</script>

<style scoped>
body {
  background-color: burlywood;
  color: black;
}

.info {
  margin-top: 0px;
  border-radius: 25px;
  background-color: brown;
}

.ativo {
  background-color: burlywood;
}

.navbar {
  background-color: brown;
  border-radius: 15px;
}

.navbar a {
  color: black;
}

.navbar a:hover {
  color: gray;
}

.novo-usuario i {
  margin: 3px;
}

.novo-usuario {
  margin-top: 30px;
}

.navbar h5 {
  margin-left: 20%;
  color: black;
}

.tabela {
  margin-left: 0;
}

.tabela h2 {
  margin-left: 33%;
}

.ajudar {
  margin-left: 0;
}

.ajudar h2 {
  margin-left: 33%;
}

.fundo-canhoto {
  background-color: white;
  border-radius: 25px;
}

.fundo-canhoto h4 {
  margin: 15px;
  padding-top: 15px;
}

.canhoto {
  margin: 50px;
}

.canhoto .col-2,
.col-3 {
  margin-bottom: 10px;
  margin-top: 8px;
}

#addCanhoto a {
  background-color: #fff;
  border: none;
  color: brown;
  font-size: 20px;
  font-weight: 500;
  font-family: 'JetBrains Mono', sans-serif;
}

#addCanhoto a:hover {
  color: red;
}

.container {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    /* overflow: hidden; */
    width: 1100px;
    max-width: 100%;
    min-height: 480px;
}

.container form .test .form-select {
  border: none !important;
  outline: none !important;
}

table td a {
  color: black;
}

/* paginação */

.pagination {
  float: right;
}

.pagination li a {
  border: none;
  font-size: 15px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}

.pagination li a:hover {
  color: #666;
}

.pagination li.active a,
.pagination li.active a.page-link {
  background-color: rgb(248, 2, 2);
}

.pagination li.active a:hover {
  background-color: rgb(228, 2, 2);
}

.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 15px;
}
</style>
