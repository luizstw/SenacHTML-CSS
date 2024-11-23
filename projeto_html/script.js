/* Funções para Exibir o Conteúdo de Outras Páginas, na Página Inicial*/ 

function inicio(){
    document.getElementById("conteudo").innerHTML = ``
}

function sobre(){
    document.getElementById("conteudo").innerHTML = `<iframe src="sobre.html"></iframe>`
}

function servicos(){
    document.getElementById("conteudo").innerHTML = `<iframe src="servicos.html"></iframe>`
}

function contato(){
    document.getElementById("conteudo").innerHTML = `<iframe src="contato.html"></iframe>`
}

/* Funções da Página de Contato (Botão Confirmar, Dados Corretos, Correção de Dados) */

function confirmar(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value

    document.getElementById("res").innerHTML = `<p id="bc">Verifique se seus dados estão corretos<br> Seu Nome é: ${nome}<br> Seu E-mail é: ${email}<br><button onclick="certo()">Estão Corretos!</button> <button onclick="correcao()">Necessário Correção</button></p>`
}

function certo(){
    document.getElementById("cad").innerHTML = ''
    cad.innerHTML = `<p>Cadastro Realizado!!</p>`
}

function correcao(){
    document.getElementById("nome").value = ''
    document.getElementById("email").value = ''
    document.getElementById("bc").innerHTML = ``
}