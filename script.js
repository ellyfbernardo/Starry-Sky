
function gerarEstrela(){

     let stars = document.createElement('div');
     stars.setAttribute('class', 'stars');

     let largura = Math.floor(Math.random() * 1920);
     let tamanho = Math.floor(Math.random() * 1080);

     stars.setAttribute('style', "left:" + largura + "px;top:" + tamanho + "px;");
     document.body.appendChild(stars);
}

function carregarEstrela(){
     setInterval(gerarEstrela, 1000)
}