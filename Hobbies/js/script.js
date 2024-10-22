var listaFotos = [[0,'Andar de Skate','skate_icon.png','Adoro viajar de Skate...',false,'3,44'],
[1,'Tocar baixo','guitar_icon.png','Adoro tocar baixo...',false,'5,55'],
[2,'Ouvir musica','headphones_icon.png','Adoro ouvir musica...',false,'6,00'],
[3,'Assistir series ','tv_icon.png','Adoro assistir filmes...',false,'10,52'],
[4,'Cozinhar','forkspoon_icon.png','Adoro cozinhar...',false,'0,85'],
[5,'Tirar fotos','camera_icon.png','Adoro tirar fotos...',false,'0,85'],
]


window.onload = function(){
    montarCardFotos();
}


function montarCardFotos(){
    
    document.getElementById("divFotos").innerHTML = "";

    for (var i = 0;i<listaFotos.length;i++){        
        var conteudo = "";        
        conteudo += '<div class="card">';
        conteudo += `<img src="img/${listaFotos[i][2]}" class="photo">`;
        conteudo += '<div class="legenda">';
        conteudo += `<h2>${listaFotos[i][1]}</h2>`;
        conteudo += listaFotos[i][3];
        conteudo += "<div>"; //fechamento da div legenda 
        conteudo += "<div>"; //fechamento da div card
        document.getElementById("divFotos").innerHTML += conteudo;

        
    } 
}




