const nomeProdutoInput = document.querySelector("#nome-Produto");

const adicionarProdutobtn = document.querySelector("#adicionar-Produto");



const produto = [];



function carregarProdutos(listaProdutos) {

  const lista = document.querySelector("ul #itens");

  lista.innerHTML = "";

  listaProdutos.forEach((produto) => {

    const novoItemLista = document.createElement("li");

    const novoItemListaTexto = document.createElement("span");

    novoItemListaTexto.textContent = `${produto.nome}`;

    novoItemLista.appendChild(novoItemListaTexto);



    lista.appendChild(novoItemLista);

  });

}

adicionarProdutobtn.addEventListener("click", (event) => {

  const nomeProduto = nomeProdutoInput.value;

  if (nomeProduto != null && nomeProduto !== "") {

    produto.push({ nome: nomeProduto });

    nomeProdutoInput.value = "";

  }

  carregarProdutos(produto);

});


carregarProdutos(produto);
