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
toggle.onclick = () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
  };

 
/* seção da configuração dos graficos  */

  const ctx = document.getElementById('myChart');
  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Microsoft', 'Google', 'Nuvem','Análise de Negócios'],
      datasets: [{
        label: 'Ferramentas',
     
        data: [20, 10, 5, 10],
        backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)',
            
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
          
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive:true,
      
      },
      elements: {
        line: {
          borderDash: [] // Remove o padrão de traço da linha
        }
      }
    }
  );

/* segundo grafico */




new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'abril','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
    datasets: [{
      label: "Metas de Aprendizagem Mensal",
      color: 'rgba(255,255,255)',
      data: [5, 4, 2, 2,2,2,2,5,7,8,10,20],
      backgroundColor:[
        'rgb(255, 99, 132,1)',
        'rgb(54, 162, 235,1)',
        'rgb(255, 206, 86,1)',
        'rgb(75, 192, 192,1)',
        'rgb(153, 102, 255,1)',
        'rgb(255, 99, 132,1)',
        'rgb(54, 162, 235,1)',
        'rgb(255, 206, 86,1)',
        'rgb(75, 192, 192,1)',
        'rgb(153, 102, 255,1)',
        
     ]
    }]
  },
  options: {
 responsive:true,
  }
});