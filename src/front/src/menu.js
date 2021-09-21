
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
                      <input placeholder="Nome" type="text" id="nome" />
                  </div><br/>
                  <div>
                      <input placeholder="CPF" type="text" id="cpf" />
                  </div><br/>
                  <div>
                      <input placeholder="E-mail" type="email" id="email" />
                  </div><br/>
                  <center><h2>Endereço</h2></center>
                  <div>
                      <input placeholder="Cidade" type="text" id="city" />
                  </div><br/>
                  <div>
                      <input placeholder="UF" type="text" id="uf" />
                  </div><br/>
                  <div>
                      <input placeholder="Rua e numero" type="text" id="rua" />
                  </div><br/>
                  <div>
                      <input placeholder="Bairro" type="text" id="bairro" />
                  </div><br/><br/>
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