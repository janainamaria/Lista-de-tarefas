let input = document.querySelector('input[name=tarefa]')
let btn = document.querySelector('#botao')
let lista = document.querySelector('#lista')
let card = document.querySelector('.card')

let tarefas = [
]

function renderizarTarefas() {
    lista.innerHTML = ''
    for (tarefa of tarefas){
      let itemLista = document.createElement('li')
      itemLista.setAttribute('class', 'list-group-item list-group-item-action')
      let itemTexto = document.createTextNode(tarefa)
      itemLista.appendChild(itemTexto )
      lista.appendChild(itemLista)
    }
}
renderizarTarefas()

btn.onclick = function () {
    let novaTarefa = input.value
if (novaTarefa !== "") {
    tarefas.push(novaTarefa)
    renderizarTarefas()
    input.value = ''    
    removerSpans()
    
}else{
    removerSpans()
    
    let span = document.createElement('span')
    span.setAttribute('class', 'alert alert-warning')
    let msg = document.createTextNode('Você precisa Informar a Tarefa!')
    span.appendChild(msg)
    card.appendChild(span)
}
}

function removerSpans(){
    let spans = document.querySelectorAll('span')
    let card = document.querySelector('.card')

    for(let i = 0; i< spans.length; i++){
        card.removeChild(spans[i])
    }
}
