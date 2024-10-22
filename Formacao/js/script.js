var listaFotos = [[0,'Engenharia de Software ','baixados.jpeg','Quinto período  ...',false,'3,44'],
[1,'Front End','sd.jpeg','Em Andamento ...'],

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




