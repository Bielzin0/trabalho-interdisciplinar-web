
const btn = document.querySelector('#botao');

btn.addEventListener('click', () => {
    const produto = getDadosForm()
    enviarDados(produto)
})

function getDadosForm(){
    const quantidade = document.querySelector('#quant');
    const Produto = document.querySelector('#item');
    

    
    let dados = {
      quantidade: quantidade.value,
      codigoProduto: Produto.value,
 
    }
    return dados
    
}

async function enviarDados (dados) {
    
    const resp = await fetch('http://localhost:3000/produtos', {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
        })
        limpaCampos();
    }

function limpaCampos(){
    document.querySelector('#quant').value = '';
    document.querySelector('#item').value = '';
}