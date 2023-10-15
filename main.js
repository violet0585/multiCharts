// Bar Chart
const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
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

        // Line Chart
        const labels = ['Monday', 'Tuesday', 'Wedesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const data2 = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3
        }]
        };
        const config2 = {
            type: 'line',
            data: data2,
          };

        const ctx2 = document.getElementById('myChart2').getContext('2d');
        const myChart2 = new Chart(ctx2, config2);


        // Pie Chart
        const data = {
            labels: ['First', 'Second', 'Third'],
            datasets: [
              {
                label: 'My First Dataset',
                data: [200, 50, 100],
                backgroundColor: ['darksalmon', 'darkkhaki', 'darkorange'],
                hoverOffset: 4,
              },
            ],
          };
          
          const config3 = {
            type: 'pie',
            data: data,
          };
          
          const ctx3 = document.getElementById('myChart3').getContext('2d');
          const myChart3 = new Chart(ctx3, config3);
          
          // Radar Chart
          const data4 = {
            labels: [
              'Eating',
              'Drinking',
              'Sleeping',
              'Designing',
              'Coding',
              'Cycling',
              'Running'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 90, 81, 56, 55, 40],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
              label: 'My Second Dataset',
              data: [28, 48, 40, 19, 96, 27, 100],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
          };
          const config4 = {
            type: 'radar',
            data: data4,
            options: {
              elements: {
                line: {
                  borderWidth: 3
                }
              }
            },
          };
          const ctx4 = document.getElementById('myChart4').getContext('2d');
          const myChart4 = new Chart(ctx4, config4);