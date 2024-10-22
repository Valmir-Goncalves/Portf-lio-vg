var listaFotos = [[0,'logo HTML','htlm.png'],
[1,'lpgo js','js_icon.png'],
[2,'logo php','php_icon.png'],
[3,'logo nodejs','nodejs_icon.png'],
[4,'Cozinhar','react_icon.png'],
[5,'Tirar fotos','css_icon.png'],
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
        
        conteudo += "<div>"; //fechamento da div card
        document.getElementById("divFotos").innerHTML += conteudo;

        
    } 
}




