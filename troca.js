const trocaclick= (evento) =>{
    evento.preventDefault();

    let imagem2= document.getElementById('outra');
    imagem2.src= 'photo2.jpg';
};

const Start = ()=> {
    document.getElementById('troca').addEventListener('click', trocaclick);
};

document.addEventListener('DOMContentLoaded', Start);