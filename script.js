function adicionarTarefa() {
            // a tarefa acima é acionada ao clicar no botão "adicionarTarefa"

            // recebe o valor do input do usuário
            const inputTarefa = document.getElementById("inputTarefa")
            let tarefa = inputTarefa.value.trim()

            const mensagem = document.getElementById("mensagem")

            // se o valor do input for vazio então mostre uma mensagem de erro  
            if(tarefa == "") {
                window.alert("Digite uma tarefa para adicioná-la a sua lista!")
                let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
                mensagem.textContent = mensagemErro;
                //mensagem.textContent.style.color = #A34743
            } else {
                // mensagem de tarefa adicionada com sucesso
                let mensagemSucesso = "Tarefa adicionada com sucesso!";
                mensagem.textContent = mensagemSucesso;
                //mensagem.textContent.style.color = #28A745

            // cria novo item (li) e insere na (lista ul)
            const listaTarefas = document.getElementById("listaTarefas")
            let novaTarefa = document.createElement("li")
            novaTarefa.textContent = tarefa
            listaTarefas.appendChild(novaTarefa)
            }
            

            inputTarefa.focus()

            // limpa o input do usuário
            inputTarefa.value = ""

            // vermelho: #A34743
            // verde: #28A745


        }

        