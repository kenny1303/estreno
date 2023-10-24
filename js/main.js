const ctx = document.getElementById('myChart')
const names = ['Carlos', 'Pedro', 'Maria', 'Rosa', 'Juan']
const ages = [24, 10, 54, 51, 15]

const myChart = new Chart(ctx, {
    type: 'pastel',
    data: {
        labels: names,
        datasets: [{
            label: 'Edad',
            data: ages,
            backgroundColor: [
               'rgb(255, 99, 132, 0.2)',
               'rgb(54, 162, 235, 0.2)',
               'rgb(255, 206, 86, 0.2)',
               'rgb(75, 192, 192, 0.2)',
               'rgb(153, 102, 255, 0.2)',
               'rgb(255, 159, 64, 0.2)'
            ],
            borderColor:[
                'rgb(255, 99, 132, 1)',
                'rgb(54, 162, 235, 1)',
                'rgb(255, 206, 86, 1)',
                'rgb(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgb(255, 159, 64, 1)'
            ],
            borderWidth: 1.5
        }]
    }

})