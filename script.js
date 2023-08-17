function exibirLista(){
    for(i = 0; i< 10; i++){
        var lista = document.getElementById("listaOrdenada")
        var novaLista = document.createElement("li")
        novaLista.innerHTML = "item" + i
        lista[0].append(novaLista);
    }
}

