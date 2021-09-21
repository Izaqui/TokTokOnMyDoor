function Compas() {
    return (
      <div className="Compras">
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
              
            </div>
          </ul>
        </div>
        </header>
        
        <div>
            <h1>Meus produtos</h1>
        </div>
      </div>
    );
  }
  
  export default Compras;