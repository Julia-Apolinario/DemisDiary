var perguntas_quiz = [
    {
        pergunta: "Qual é o nome completo de Demi Lovato?",
        alternativas: ["Demetria Devonne Lovato", "Demetria Lovato", "Demetria Devonne Lopez", "Demetria Devonne Lovato Jonas"],
        resposta: 0
    },
    {
        pergunta: "Em que ano Demi Lovato lançou seu álbum de estreia, 'Don't Forget'?",
        alternativas: ["2009", "2007", "2008", "2010"],
        resposta: 2
    },
    {
        pergunta: "Qual é o título do documentário de 2017 sobre a vida de Demi Lovato?",
        alternativas: ["Beyond Silence", "Stay Strong", "Demi Lovato: Dancing with the Devil", "Simply Complicated"],
        resposta: 3
    },
    {
        pergunta: "Em qual programa infantil Demi Lovato começou sua carreira?",
        alternativas: ["Mickey Mouse Club", "Barney & Friends", "Lizzie McGuire", "Zoey 101"],
        resposta: 1
    },
    {
        pergunta: "Qual é o título do terceiro álbum de estúdio de Demi Lovato?",
        alternativas: ["Unbroken", "Confident", "Here We Go Again", "Demi"],
        resposta: 0
    },
    {
        pergunta: "Qual a tatuagem que Demi Lovato fez nos pulsos?",
        alternativas: ["is made of steel", "is titanium", "is bulletproof", "Stay Strong"],
        resposta: 3
    },
    {
        pergunta: "Em que ano Demi Lovato fez sua estreia como jurada no programa 'The X Factor' dos EUA?",
        alternativas: ["2011", "2012", "2013", "2014"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do primeiro single do álbum 'Confident' de Demi Lovato?",
        alternativas: ["Heart Attack", "Cool for the Summer", "Confident", "Stone Cold"],
        resposta: 1
    },
    {
        pergunta: "Com qual cantor Demi Lovato gravou a música 'Échame La Culpa'?",
        alternativas: ["Luis Fonsi", "Daddy Yankee", "Maluma", "Ozuna"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do livro escrito por Demi Lovato que contém citações inspiradoras?",
        alternativas: ["Becoming: My Story", "Brave Enough", "Living Fearless", "Staying Strong: 365 Days a Year"],
        resposta: 3
    }
];

var pergunta_atual = 0;
var pontos = 0;

function Pergunta() {
    document.getElementById('inicio').style.display = "none";
    document.getElementById('perguntas').style.display = "flex";

    document.getElementById('div_pergunta').innerHTML = perguntas_quiz[pergunta_atual].pergunta;
    document.getElementById('alt1').innerHTML = perguntas_quiz[pergunta_atual].alternativas[0];
    document.getElementById('alt2').innerHTML = perguntas_quiz[pergunta_atual].alternativas[1];
    document.getElementById('alt3').innerHTML = perguntas_quiz[pergunta_atual].alternativas[2];
    document.getElementById('alt4').innerHTML = perguntas_quiz[pergunta_atual].alternativas[3];
}

function verificar(selected) {
    var correta = perguntas_quiz[pergunta_atual].resposta;
    var selectedElement = document.getElementById(`alt${selected + 1}`);
    var corretaElement = document.getElementById(`alt${correta + 1}`);

    if (selected === correta) {
        selectedElement.classList.add('correto');
        pontos++;
    } else {
        selectedElement.classList.add('errado');
        corretaElement.classList.add('correto');
    }

    setTimeout(() => {
        pergunta_atual++;
        if (pergunta_atual < perguntas_quiz.length) {
            selectedElement.classList.remove('correto');
            selectedElement.classList.remove('errado');
            corretaElement.classList.remove('correto');
            Pergunta();
        } else {
            var porcentagem = (pontos * 100) / perguntas_quiz.length;
            pergunta_atual = 0;

            document.getElementById('inicio').style.display = "flex";
            document.getElementById('perguntas').style.display = "none";

            var textinhoFinal = document.getElementById('textinhoFinal');
            textinhoFinal.innerHTML = `VOCÊ ACERTOU ${pontos} de ${perguntas_quiz.length}, OU SEJA, ${porcentagem}%.<br>Veja com mais detalhes na página de Dashboard!`;
            document.getElementById('botao_iniciar').style.display = "none";
            document.querySelector('.titulo').style.display = "none";
            registrarnota.style.display = "flex";
            selectedElement.classList.remove('correto');
            selectedElement.classList.remove('errado');
            corretaElement.classList.remove('correto');
             
        }
    }, 1000);
}

function cadastrarNota() {
    // Enviando o valor da nova input
    var id_usuario = sessionStorage.ID_USUARIO;

    fetch("/pontuacao/cadastrarNota", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            NotaServer: pontos,
            UsuarioServer: id_usuario
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na solicitação: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Nota cadastrada com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao cadastrar a nota:', error);
    });

    setTimeout(() => {
        window.location = "dashboard.html";
      }, "3000");
}
