var objeto = document.querySelector('.header');
objeto.addEventListener('click', () => {
    objeto.style.backgroundColor = '#0000ff';    
});
objeto.addEventListener('mouseout', () => {
    objeto.style.backgroundColor = '#000';    
});
//console.dir(objeto);