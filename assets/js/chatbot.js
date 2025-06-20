function sendChatMessage() {
    const input = document.getElementById("user-input");
    const chat = document.getElementById("chat-messages");
    const msg = input.value.trim();

    if (!msg) return;

    // Adiciona mensagem do usuário
    chat.innerHTML += `<div class="user-message">${msg}</div>`;

    const lowerMsg = msg.toLowerCase();
    let resposta = "Desculpe, ainda não entendi. Pode reformular? 🤖";

    // Respostas personalizadas
    if (lowerMsg.includes("oi") || lowerMsg.includes("olá")) {
        resposta = "Olá! 👋 Eu sou o assistente do Jimmy. Em que posso ajudar?";
    } else if (lowerMsg.includes("quem é você") || lowerMsg.includes("jimmy")) {
        resposta = "Jimmy Smith é desenvolvedor de sites e sistemas simples, com soluções sob medida.";
    } else if (lowerMsg.includes("serviço") || lowerMsg.includes("faz o que")) {
        resposta = "Eu crio sites personalizados, sistemas leves e landing pages com HTML, CSS, Node.js e MongoDB.";
    } else if (lowerMsg.includes("portfólio")) {
        resposta = "Ainda estou organizando meu portfólio online, mas posso te mostrar projetos se quiser.";
    } else if (lowerMsg.includes("whatsapp") || lowerMsg.includes("contato")) {
        resposta = `Claro! Pode me chamar no WhatsApp: <a href="https://wa.me/5527999683913" target="_blank">clique aqui</a>.`;
    } else if (lowerMsg.includes("email")) {
        resposta = "Você pode enviar um e-mail para: ejimmysmith@gmail.com 📬";
    } else if (lowerMsg.includes("site") || lowerMsg.includes("link")) {
        resposta = "Você já está no site do Jimmy! 😉";
    } else if (lowerMsg.includes("preço") || lowerMsg.includes("cobrar")) {
        resposta = "Cada projeto é único, mas posso adaptar ao seu orçamento. Me diz o que precisa!";
    }

    // Mostra resposta do "bot"
    setTimeout(() => {
        chat.innerHTML += `<div class="bot-message">${resposta}</div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 600);

    input.value = "";
}

// Ativa envio com Enter
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("user-input");
    if (input) {
        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                sendChatMessage();
            }
        });
    }
});

