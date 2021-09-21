import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Search">
          <br/>
          <input type="text" id="myInput" onkeyup="myFunction()"
           placeholder="Search product.." title="Type in a name"/>
        </div>
      <div className="carrinho">
        <ul>
          <div className="dropdown">
            <p><img src="./img/compras.png"/>Carrinho</p>
            <div class="dropdown-content">
              <ul id="itens">
              </ul>
            </div>
          </div>
        </ul>
      </div>
      </header>
      
      <div>

      </div>
    </div>
  );
}

export default App;
