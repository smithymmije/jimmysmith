function sendChatMessage() {
    const input = document.getElementById("user-input");
    const chat = document.getElementById("chat-messages");
    const msg = input.value.trim();

    if (!msg) return;

    // Adiciona mensagem do usuário
    const userMsgEl = document.createElement("div");
    userMsgEl.className = "user-message";
    userMsgEl.textContent = msg;
    chat.appendChild(userMsgEl);

    const lowerMsg = msg.toLowerCase();
    let resposta = ""; // Começa vazia, será preenchida

    // Função auxiliar para verificar correspondência de palavras-chave
    const match = (palavras) => palavras.some(p => lowerMsg.includes(p));

    // --- GRUPOS DE RESPOSTAS MAIS COMPLETOS E VARIADOS ---

    // Saudações e Boas-vindas
    if (match(["oi", "olá", "e aí", "bom dia", "boa tarde", "boa noite", "tudo bem"])) {
        const greetings = [
            "Fala aí! 👋 Eu sou o bot do Jimmy, seu dev de confiança. Como posso te ajudar hoje?",
            "Olá! Tudo certo por aqui! Sou o assistente do Jimmy. No que posso ser útil?",
            "E aí! 👋 Sou o seu guia digital no site do Jimmy. Conte-me, o que você procura?",
            "Oi! Bem-vindo(a)! Sou o bot que te ajuda a entender os serviços do Jimmy. O que te trouxe até aqui?"
        ];
        resposta = greetings[Math.floor(Math.random() * greetings.length)];
    }
    // Sobre o Jimmy Smith
    else if (match(["jimmy", "quem é você", "sobre você", "quem e o jimmy", "fale sobre o jimmy", "programador", "desenvolvedor"])) {
        resposta = "Jimmy Smith é um desenvolvedor focado em criar soluções web práticas e eficientes. Ele constrói desde sites personalizados e landing pages até sistemas mais complexos, sempre pensando na sua necessidade e em um visual moderno. 😉";
    }
    // Serviços Detalhados
    else if (match(["servico", "serviço", "faz o que", "o que voce faz", "faz q", "faz oq", "trabalho", "cria", "desenvolve"])) {
        resposta = "Eu crio: <br>✅ Sites personalizados e profissionais; <br>✅ Landing Pages de alta conversão; <br>✅ Blogs e Portfólios para você se destacar; <br>✅ Sistemas web simples e eficientes para otimizar seu dia a dia. <br>Tudo feito com as melhores tecnologias como HTML, CSS, JS, Node.js e MongoDB.";
    }
    // Portfólio/Projetos
    else if (match(["portfolio", "portfólio", "projetos", "exemplos", "trabalhos", "mostra"])) {
        resposta = "Meu portfólio online está em fase final de organização para ficar perfeito! Mas, se quiser dar uma espiadinha nos projetos mais recentes, posso te mostrar alguns exemplos e cases de sucesso via WhatsApp. Que tal? 📁";
    }
    // Contato
    else if (match(["whatsapp", "zap", "telefone", "celular", "contato", "falar com jimmy", "ligar", "chat"])) {
        resposta = `A melhor forma de falar com o Jimmy é pelo WhatsApp: <a href="https://wa.me/5527999683913" target="_blank">clique aqui</a> 📱. Ele responde rapidinho!`;
    } else if (match(["email", "gmail", "conta de email"])) {
        resposta = "Claro! Pode mandar um e-mail para: ejimmysmith@gmail.com 📬. Ele verifica a caixa sempre.";
    }
    // Preço/Orçamento
    else if (match(["preco", "preço", "cobra", "custa", "orcamento", "orçamento", "quanto"])) {
        resposta = "O preço varia bastante, pois cada projeto é único e pensado para as suas necessidades. Para um orçamento preciso, me conta mais sobre o que você tem em mente! Assim o Jimmy pode te dar o melhor valor. 💰";
    }
    // Prazo/Entrega
    else if (match(["prazo", "entrega", "tempo", "rapido", "demora"])) {
        resposta = "O prazo depende muito da complexidade do projeto. Um site institucional simples pode ser entregue em poucos dias, enquanto um sistema mais robusto pode levar algumas semanas. Sempre busco entregar com agilidade e qualidade! 🚀";
    }
    // Pagamento
    else if (match(["pix", "boleto", "cartao", "cartão", "pagamento", "parcela", "forma de pagamento"])) {
        resposta = "O Jimmy aceita Pix, transferência bancária e podemos conversar sobre outras formas de pagamento, inclusive parcelamento. Facilidade pra você! 💳";
    }
    // Personalização / Exclusividade
    else if (match(["exclusivo", "personalizado", "único", "feito do zero", "adaptado"])) {
        resposta = "Sim! A especialidade do Jimmy é criar soluções sob medida, do zero. Seu site ou sistema terá uma identidade única e totalmente alinhada com seus objetivos. ✨ Diga adeus aos templates genéricos!";
    }
    // Hospedagem e Domínio
    else if (match(["hospedagem", "hospedar", "dominio", "domínio", "host", "servidor", "onde fica"])) {
        resposta = "O Jimmy te orienta em todo o processo de hospedagem e registro de domínio. Ele trabalha com plataformas confiáveis como Hostinger, Vercel e GitHub Pages, dependendo da necessidade técnica do seu projeto. 🌐";
    }
    // Processo de Desenvolvimento
    else if (match(["como funciona", "como é feito", "como faz", "como cria", "processo"])) {
        resposta = "O processo geralmente começa com uma conversa para entender sua ideia, depois vem o planejamento, o desenvolvimento (frontend com HTML/CSS/JS, backend com Node.js/MongoDB se precisar), testes e, por fim, o lançamento e suporte! 🔧";
    }
    // Tecnologias Utilizadas
    else if (match(["ferramentas", "tecnologias", "linguagens", "usa o que", "qual linguagem"])) {
        resposta = "O Jimmy domina: <br>🌐 HTML, CSS e JavaScript para a parte visual e interativa; <br>🚀 Node.js para o backend (a inteligência por trás); <br>💾 MongoDB para bancos de dados. <br>Além de ferramentas como Git para controle de versão, Figma para design e Vercel/GitHub Pages para deploy.";
    }
    // Suporte Pós-Venda
    else if (match(["suporte", "ajuda", "problema", "depois da entrega", "garantia"])) {
        resposta = "Sim! O suporte não termina na entrega. O Jimmy oferece suporte para garantir que seu site ou sistema funcione perfeitamente e pode até ter planos de manutenção. Conte com ele! 😊";
    }
    // SEO e Visibilidade
    else if (match(["seo", "google", "busca", "aparecer no google", "ranking", "visibilidade"])) {
        resposta = "Sites desenvolvidos pelo Jimmy são pensados para SEO desde o início! Isso ajuda seu projeto a ter um bom ranqueamento e visibilidade nas buscas do Google, atraindo mais clientes. 📈";
    }
    // Responsividade
    else if (match(["responsivo", "celular", "mobile", "celular", "tablet"])) {
        resposta = "Com certeza! Todos os sites são construídos com design responsivo, garantindo que a experiência seja perfeita em qualquer dispositivo: celulares, tablets ou computadores. 📱💻";
    }
    // Blog / Conteúdo
    else if (match(["blog", "noticias", "notícias", "conteúdo", "artigos"])) {
        resposta = "Se você quer um blog para compartilhar conteúdo e interagir com seu público, o Jimmy pode desenvolver um totalmente integrado ao seu site! ✍️";
    }
    // E-commerce / Loja Virtual
    else if (match(["e-commerce", "loja virtual", "vender online", "produtos"])) {
        resposta = "Para lojas virtuais, o Jimmy pode desenvolver soluções personalizadas ou integrar plataformas como Shopify, dependendo da escala e complexidade dos seus produtos e vendas. 🛒";
    }
    // Manutenção / Atualizações
    else if (match(["manutencao", "manutenção", "atualizar", "seguranca", "segurança"])) {
        resposta = "Manutenção é chave! O Jimmy oferece serviços de manutenção e atualização para manter seu site sempre seguro, rápido e com as últimas tecnologias. Assim você foca no seu negócio. 🛡️";
    }
    // Frontend e Backend
    else if (match(["frontend", "backend", "fullstack", "front end", "back end"])) {
        resposta = "O Jimmy é um desenvolvedor full-stack! Isso significa que ele cuida tanto da parte que você vê (frontend, com HTML, CSS, JS) quanto da lógica por trás (backend, com Node.js e MongoDB). Projeto completo em um só lugar! 👨‍💻";
    }
    // Localização do Jimmy
    else if (match(["endereco", "endereço", "onde mora", "cidade", "estado", "local"])) {
        // Lembrete: A localização é Serra, Espírito Santo, Brasil.
        resposta = "O Jimmy Smith atende clientes de todo o Brasil de forma remota, mas ele está localizado em Serra, no Espírito Santo. 📍";
    }
    // Sobre o Bot
    else if (match(["robot", "robô", "inteligente", "ia", "inteligência artificial", "bot"])) {
        resposta = "Sou um bot inteligente e simpático (😎), programado para te dar todas as informações sobre os serviços de desenvolvimento do Jimmy! Como posso ser mais útil?";
    }
    // O que o Jimmy NÃO faz (ex: Design Gráfico puro, Marketing Digital completo)
    else if (match(["design grafico", "criar logo", "marketing digital", "redes sociais", "gerenciar redes"])) {
        resposta = "O Jimmy é focado em desenvolvimento web. Embora ele se preocupe com o design e a experiência do usuário do site, serviços como criação de logo ou gestão de redes sociais são feitos por parceiros especializados. Posso te indicar, se precisar! 😉";
    }
    // Pedir uma ligação/reunião
    else if (match(["ligar", "reuniao", "reunião", "chamada", "marcar"])) {
        resposta = `Para agendar uma ligação ou reunião, o ideal é entrar em contato direto com o Jimmy pelo WhatsApp: <a href="https://wa.me/5527999683913" target="_blank">clique aqui</a>. Ele verificará a disponibilidade. 📞`;
    }
    // Termos técnicos (um exemplo)
    else if (match(["api", "rest api", "integracao", "integração"])) {
        resposta = "Sim, o Jimmy pode desenvolver e integrar APIs para que seu site ou sistema se comunique com outros serviços e plataformas. Isso abre um mundo de possibilidades! 🔗";
    }
    // Como começar um projeto
    else if (match(["como começar", "iniciar projeto", "primeiro passo"])) {
        resposta = "O primeiro passo é simples! Entre em contato com o Jimmy (pelo WhatsApp é mais rápido) e apresente sua ideia. Ele vai te ajudar a transformá-la em um projeto web incrível! 💡";
    }
    // Segurança do site
    else if (match(["seguranca", "segurança", "dados seguros", "ssl"])) {
        resposta = "A segurança é uma prioridade! O Jimmy implementa práticas de segurança modernas e pode configurar certificados SSL para garantir que seu site seja seguro e confiável. 🔐";
    }

    // Resposta padrão (fallback) se nenhuma condição acima for atendida
    if (resposta === "") {
        const fallbackResponses = [
            "Hmm... Não tenho essa informação no momento, mas posso te conectar com o Jimmy. Que tal me chamar no WhatsApp para ele te ajudar? 🤔",
            "Desculpe, ainda não entendi bem. Minha base de conhecimento está em expansão! Você poderia reformular sua pergunta ou perguntar sobre os serviços do Jimmy?",
            "Essa é uma boa pergunta! Mas estou aprendendo. Para algo mais específico, o Jimmy pode te ajudar diretamente. Quer o contato dele? 💬",
            "Pode me dar mais detalhes sobre o que você procura? Assim consigo te ajudar melhor! Ou tente perguntar sobre os serviços ou contato do Jimmy. 🤷‍♂️"
        ];
        resposta = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }

    // Exibe a resposta do "bot"
    setTimeout(() => {
        const botMsgEl = document.createElement("div");
        botMsgEl.className = "bot-message";
        botMsgEl.innerHTML = resposta;
        chat.appendChild(botMsgEl);
        chat.scrollTop = chat.scrollHeight;
    }, 600);

    input.value = ""; // Limpa o campo de input
}

// Ativa envio com Enter (fora do DOMContentLoaded se o script estiver no final do body)
const inputElement = document.getElementById("user-input");
if (inputElement) {
    inputElement.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            sendChatMessage();
        }
    });
}