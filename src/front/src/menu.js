
export default function Menu() {
    return (
      <menu className="menu">
        <ul id="nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Cadastro</a>
            <ul className="cadastro">
              <form action="/pagina-processa-dados-do-form" method="post">
                  <div>
                    <center><h1>Cadastre-se</h1></center>
                      <label for="nome">Nome:</label>
                      <input type="text" id="nome" />
                  </div><br/>
                  <div>
                      <label for="cpf">Cpf:</label>
                      <input type="text" id="cpf" />
                  </div><br/>
                  <div>
                      <label for="email">E-mail:</label>
                      <input type="email" id="email" />
                  </div><br/>
                  <center><h2>Endereço</h2></center>
                  <div>
                      <label for="City">Cidade:</label>
                      <input type="text" id="city" />
                  </div><br/>
                  <div>
                      <label for="uf">Uf:</label>
                      <input type="text" id="uf" />
                  </div><br/>
                  <div>
                      <label for="rua">Rua e numero:</label>
                      <input type="text" id="rua" />
                  </div><br/>
                  <div>
                      <label for="bairro">Bairro:</label>
                      <input type="text" id="bairro" />
                  </div><br/>
                  <div>
                      <button type="submite">Concluir</button>
                  </div>
              </form>
            </ul>
          </li>

          <li><a href="./mapa/map.html">mapa</a>

          </li>
          
        </ul>
      </menu>
    );
}