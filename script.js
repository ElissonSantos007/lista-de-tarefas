let tarefas = []

function adicionarTarefa() {
            // a tarefa acima é acionada ao clicar no botão "adicionarTarefa"

            // recebe o valor do input do usuário
            const inputTarefa = document.getElementById("inputTarefa")
            let tarefa = inputTarefa.value.trim()

            const mensagem = document.getElementById("mensagem")

            // se o valor do input for vazio então mostre uma mensagem de erro para o usuário 
            if(tarefa == "") {
                // mostre uma mensagem de erro
                window.alert("Digite uma tarefa para adicioná-la a sua lista!")
                let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
                mensagem.textContent = mensagemErro;
                //mensagem.textContent.style.color = #A34743
            } else {
                // mensagem de tarefa adicionada com sucesso
                let mensagemSucesso = "Tarefa adicionada com sucesso!";
                mensagem.textContent = mensagemSucesso;
                //mensagem.textContent.style.color = #28A745
                tarefas.push(tarefa)
                renderizarTarefas()
            }
            

            inputTarefa.focus()

            // limpa o input do usuário
            inputTarefa.value = ""

            // vermelho: #A34743
            // verde: #28A745

        }

        function renderizarTarefas() {
            // cria novo item (li) e insere na (lista ul)
            const listaTarefas = document.getElementById("listaTarefas")

            listaTarefas.innerHTML = ""

            // for itens na lista 
            //1. item inicial (iterador)
            //2. item final (condição)
            //3. se vai de 1 em 1 elemento, ou se pula 

            //for (iterador, condição, frequência)

            
            for (let i = 0; i < tarefas.length; i++) {
                let novaTarefa = document.createElement("li")
                novaTarefa.textContent = tarefas[i]

                let botaoRemover = document.createElement("button")
                botaoRemover.className = "remover"
                botaoRemover.textContent = "Remover"
                botaoRemover.onclick = () => removerTarefa(i)

                let botaoEditar = document.createElement("button")
                botaoEditar.className = "editar"
                botaoEditar.textContent = "Editar"
                botaoEditar.onclick = () => editarTarefas(i)

                novaTarefa.appendChild(botaoRemover)
                novaTarefa.appendChild(botaoEditar)

                listaTarefas.appendChild(novaTarefa)
                
            }
        }

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefas(i) {
    let tarefaEditada = prompt("Edite a tarefa:")
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}

        