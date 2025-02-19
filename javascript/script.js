let tarefas = []

function adicionartarefa() {
    const inputtarefa = document.getElementById("inputtarefa")
    let tarefa = inputtarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        //mostre uma mensagme de erro
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!";
        mensagem.textContent = mensagemErro
    } else {
        //mensagem de tarefa adicionada com sucesso
        let mensagemsucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemsucesso;
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    //limpar o input do usuario
    inputtarefa.value = ""
}

function renderizarTarefas() {

    //criar novo item (li) e insere na (lista ul)
    const listaTarefa = document.getElementById("listatarefa")
    listaTarefa.innerHTML = ""

    //for itens na lista
    //1. item inicial (iterador)
    //2. item final (condição)
    //3. se vai de 1 em 1 elemento ou se pula.
    //botaoRemover.onclick = function () {removerTarefa()}
        
   
    //for (iterador, condicao, frequencia)

    //i = i + 1, isso é i++

    
    for (let i = 0; i < tarefas.length; i++) {
        let novatarefa = document.createElement("li")
        novatarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "EDITAR"
        botaoEditar.onclick = () => editarTarefa(i)

        novatarefa.appendChild(botaoRemover)
        novatarefa.appendChild(botaoEditar)
        listaTarefa.appendChild(novatarefa)
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i) {
   let tarefaeditada = prompt("edite a tarefa:")

   if(tarefaeditada.trim !== "") {
    tarefas[i] = tarefaeditada
    renderizarTarefas ()
   }
}

function limparlista() {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}

