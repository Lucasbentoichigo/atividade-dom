const botao = document.getElementById("botao");
const body = document.body;

// Adiciona o evento de clique
botao.addEventListener("click", () => {
    // Verifica se o modo atual é claro
    if (body.classList.contains("claro")) {
        // Troca para o modo escuro
        body.classList.replace("claro", "escuro");
        botao.textContent = "Ativar modo claro ☀️";
    } else {
        // Troca para o modo claro
        body.classList.replace("escuro", "claro");
        botao.textContent = "Ativar modo escuro 🌙"
    }
});