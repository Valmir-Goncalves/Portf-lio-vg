var listaProjetos = [[0,'Jogo Numero secreto','ia.png','Adivinhe o Numero',false,'3,44','https://vercel.live/link/jogo-numero-secreto-azumy.vercel.app/'],
[1,'Challeger Alura desafio','vgr.png','portifolio',false,'5,55','https://spacevk.vercel.app/'],
[2,'Encripitador de texto','bc.png','Encriptador de Texto...',false,'10,52','https://challege-alura.vercel.app/'],

]

var carrinhoDeProjetos = [];

window.onload = function(){
    montarCardProjetos();
}


function montarCardProjetos(){
    
    document.getElementById("divProjetos").innerHTML = "";

    for (var i = 0;i<listaProjetos.length;i++){        
        var conteudo = "";        
        conteudo += '<div class="card">';
        conteudo += `<img src="img/${listaProjetos[i][2]}" class="photo">`;
        conteudo += '<div class="legenda">';
        conteudo += `<h2>${listaProjetos[i][1]}</h2>`;
        conteudo += listaProjetos[i][3];

        
        if(listaProjetos[i][4] == false){
            conteudo += '</div>';
            conteudo += `<a class="demo"  href="${listaProjetos[i][6]}" target="_blank">Demo</a>`; // Usando um link <a>
            conteudo += '</div>';
        }
        
       
        document.getElementById("divProjetos").innerHTML += conteudo;
    } 
}

function abrirDemo(id) {
    const projeto = listaProjetos.find(p => p.id === id);
    window.location.href = projeto.url;
}

