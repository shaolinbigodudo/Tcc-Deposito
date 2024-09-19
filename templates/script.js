let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    const produto = { nome, preco };
    carrinho.push(produto);
    alert(`${nome} foi adicionado ao carrinho!`);
    atualizarCarrinhoLink();
}

function atualizarCarrinhoLink() {
    const checkoutLink = document.getElementById('checkout-link');
    checkoutLink.textContent = `Carrinho (${carrinho.length})`;
}

function carregarCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho');
    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = '<p>Carrinho vazio.</p>';
        return;
    }

    let total = 0;
    carrinho.forEach(produto => {
        carrinhoDiv.innerHTML += `<p>${produto.nome} - R$ ${produto.preco.toFixed(2)}</p>`;
        total += produto.preco;
    });
    carrinhoDiv.innerHTML += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('carrinho')) {
        carregarCarrinho();
    }

    document.getElementById('payment-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Pagamento realizado com sucesso!');
        // Aqui você pode adicionar lógica para processar o pagamento
    });

    atualizarCarrinhoLink();
});


document.getElementById('contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});


// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const produto = { nome, preco };
    carrinho.push(produto);
    alert(`${nome} foi adicionado ao carrinho!`);
    atualizarCarrinhoLink();
    salvarCarrinho(); // Salva o carrinho no localStorage
}

// Função para atualizar o link do carrinho
function atualizarCarrinhoLink() {
    const checkoutLink = document.getElementById('checkout-link');
    if (checkoutLink) {
        checkoutLink.textContent = `Carrinho (${carrinho.length})`;
    }
}

// Função para salvar o carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para carregar o carrinho do localStorage
function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
    }
}

// Função para exibir os itens do carrinho na página de checkout
function exibirCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho');
    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = '<p>Carrinho vazio.</p>';
        return;
    }

    let total = 0;
    carrinho.forEach(produto => {
        carrinhoDiv.innerHTML += `<p>${produto.nome} - R$ ${produto.preco.toFixed(2)}</p>`;
        total += produto.preco;
    });
    carrinhoDiv.innerHTML += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;
}

// Evento que carrega o carrinho ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinho(); // Carrega o carrinho do localStorage
    exibirCarrinho(); // Exibe os produtos na página de checkout
    atualizarCarrinhoLink(); // Atualiza o link do carrinho
});

// Adiciona um evento para o formulário de pagamento
document.getElementById('payment-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Pagamento realizado com sucesso!');
    localStorage.removeItem('carrinho'); // Limpa o carrinho após pagamento
    carrinho = []; // Limpa o array em memória
    atualizarCarrinhoLink(); // Atualiza o link do carrinho
});
