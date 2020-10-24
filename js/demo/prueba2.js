// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

$.post('queries/pruebassgraficass2.php', {}, function(response) {
    graphCircle(response);
});

var infoprecio = new Array();
var infodia = new Array();
var colors = ['#ffcccc', '#ffd9cc', '#ffe6cc', '#fff2cc', '#ffffcc', '#f2ffcc', '#e6ffcc', '#d9ffcc', '#ccffcc', '#ccffd9', '#ccffe6', '#ccfff2', '#ccffff', '#ccf2ff', '#cce6ff', '#ccd9ff', '#ccccff', '#d9ccff', '#e6ccff', '#f2ccff', '#ffccff', '#ffccf2', '#ffcce6', '#ffccd9', '#ffcccc'];
var colorsGraph = new Array();
var i;

function getRandom(min, max, length) {
    for (i = 0; i < length; i++) {
        colorsGraph[i] = colors[i];
    }
    return colorsGraph;
}


function graphCircle(hola) {
    // Area Chart Example
    info = hola.split(';');
    info[0] = info[0].substring(0, info[0].length - 1);
    infoprecio = info[0].split('-');
    info[1] = info[1].substring(0, info[1].length - 1);
    infodia = info[1].split('-');
    var ctx = document.getElementById("myPieChart");

    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: infodia,
            datasets: [{
                data: infoprecio,
                backgroundColor: getRandom(0, colors.length, infoprecio.length),
                hoverBackgroundColor: ['#DC143C', '#17a673', '#2c9faf'],
                hoverBorderColor: "rgba(220, 65, 65, 0.6)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
            },
            legend: {
                display: false
            },
            cutoutPercentage: 80,
        },
    });


}