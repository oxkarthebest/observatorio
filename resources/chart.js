// Importar el archivo OFERTAS_OBSERVATORIO.js
// Asumiendo que el archivo está en la misma carpeta que este archivo JavaScript
var chart = document.createElement('chart');
chart.src = 'layers/OFERTAS_OBSERVATORIO.js';
document.head.appendChild(chart);
var chart1Actual = 2;

// Función para dibujar el gráfico
function drawChart(tipoDeOferta) {
    // Obtener los datos de acuerdo al tipo de oferta seleccionado
    var datos = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
        return feature.properties.TIPO_DE_OF === tipoDeOferta;
    });

    // Obtener todos los valores únicos de "TIPO_DE_IN" en los datos
    var tiposDeInmueble = Array.from(new Set(datos.map(function (feature) {
        return feature.properties.TIPO_DE_IN;
    })));

    // Contar las ocurrencias de cada tipo de inmueble en los datos
    var conteoTiposDeInmueble = tiposDeInmueble.reduce(function (acumulador, valorActual) {
        var conteo = datos.reduce(function (acumuladorInterno, valorActualInterno) {
            if (valorActualInterno.properties.TIPO_DE_IN === valorActual) {
                acumuladorInterno++;
            }
            return acumuladorInterno;
        }, 0);
        acumulador[valorActual] = conteo;
        return acumulador;
    }, {});

    // Crear y configurar el gráfico de pie
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Tipo de Inmueble');
    data.addColumn('number', 'Conteo');
    var rows = Object.entries(conteoTiposDeInmueble).sort().map(([tipo, conteo]) => [tipo, conteo]);
    data.addRows(rows);

    var options = {
        title: tipoDeOferta.toUpperCase(),
        pieSliceBorderColor: "black",
        pieHole: 0.4,
        is3D: false,
        legend: true,   
        pieSliceText: "label",
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: {
            position: "left"
          },
        chartArea: { 
            left: "10%",
            top: "10%",
            right: "10%",
            bottom: "10%"
           },
        backgroundColor: 'transparent',
        colors: tipoDeOferta === 'VENTA' ? ['#C1E4E6', '#9ADCE2', '#38C0D0', '#28A2B6', '#1E838C'] : ['#FADDF1', '#F5B8D3', '#F08EB5', '#EB6397', '#E73B79', '#E5115C'],
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

// Función para alternar entre "VENTA" y "ARRIENDO"
function alternarTipoDeOferta() {
    var boton = document.getElementById('boton_alternar');
    if (boton.dataset.tipo === 'VENTA') {
        chart1Actual = 1;
        boton.dataset.tipo = 'ARRIENDO';
        boton.textContent = 'Cambiar a Venta';
        drawChart('ARRIENDO');
    } else {
        chart1Actual = 2;
        boton.dataset.tipo = 'VENTA';
        boton.textContent = 'Cambiar a Arriendo';
        drawChart('VENTA');
    }
}

// Cargar la librería y dibujar el gráfico inicial
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(function () {
    drawChart('VENTA');
});

// Función para alternar entre las opciones de oferta
function cambiarOferta() {
    var tipoDeOferta = document.getElementById('tipoDeOferta').value;
    drawChart(tipoDeOferta);
}

// Cargar la librería de Google Charts y llamar la función para dibujar el gráfico por primera vez
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(function () {
    drawChart('VENTA');
});

window.addEventListener('resize', function () {
    chart1Actual === 1 ? drawChart('ARRIENDO') : drawChart('VENTA');
    //drawChart('VENTA');
});
