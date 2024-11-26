document.getElementById('lista-produtos').innerHTML = ''

function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho_produtos_produto">
    <span class="texto-azul">${quantidade}x</span> Celular <span class="textoazul">R$1400</span>
    </section>`;
}