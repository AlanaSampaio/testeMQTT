const ctx = document.getElementById('myChart');

const stackedLine = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H'],
      datasets: [{
        label: 'Gráfico temporal',
        data: [12, 19, 3, 5, 2, 3, 20, 22, 13, 17],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });