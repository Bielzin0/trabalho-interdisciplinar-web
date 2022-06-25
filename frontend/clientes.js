function preencheClientes(){

    let id = document.getElementById("id").value
    let name = document.getElementById("nome").value
    let telefone = document.getElementById("tel").value
    let cep = document.getElementById("cep").value
    let num = document.getElementById("numero").value
    
    
        
    document.getElementById("tabela").innerHTML += `
    <tr>
                    <th>${id}</th>
                    <th>${name}</th>
                    <th>${telefone}</th>
                    <th>${cep}</th>
                    <th>${num}</th>
                </tr>
    `
    
}