var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: [" Personal and Business", "Personal or Business"],
    datasets: [{
      data: [60.7, 39.3],
      backgroundColor: [
        '#93d0d1',
        '#E1E2E3',
      ],
      borderWidth: 3,
      borderColor: ["#FDFAF3", "#FDFAF3"],
      hoverBorderColor: ["#FDFAF3", "#FDFAF3"]

    }]
  }
});
