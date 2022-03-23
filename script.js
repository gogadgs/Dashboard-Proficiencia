//variaveis globais//
let list = document.querySelectorAll('.navigation li')
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');


//função para adicional classe dinamicamente//

function activeLink() {
    list.forEach((item) => {
        item.classList.remove('hovered');
        this.classList.add('hovered');

    })
};
list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));


// função para ocultar/mostrar menu //
// interessante variável  com evento atrelado com uma função
toggle.onclick = function () {
    navigation.classList.toggle('active')
    main.classList.toggle('active')


}