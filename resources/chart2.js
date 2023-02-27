// Importar el archivo OFERTAS_OBSERVATORIO.js
// Asumiendo que el archivo está en la misma carpeta que este archivo JavaScript
var chart = document.createElement('chart');
chart.src = 'layers/OFERTAS_OBSERVATORIO.js';
document.head.appendChild(chart);

function drawChart2(tipoDeOferta) {
  // Filtrar todas las propiedades con "TIPO_DE_OF" = "VENTA"
  var propiedadesVenta = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === tipoDeOferta && feature.properties.VALOR_F > 1;
  });

  // Obtener el rango de valores de "VALOR_F"
  var rangoValores = propiedadesVenta.reduce(function (rango, propiedad) {
    var valor = propiedad.properties.VALOR_F;
    if (valor < rango.min) {
      rango.min = valor;
    }
    if (valor > rango.max) {
      rango.max = valor;
    }
    return rango;
  }, { min: Infinity, max: -Infinity });

  // Definir los intervalos
  var numIntervalos = 3;
  var intervaloSize = (rangoValores.max - rangoValores.min) / numIntervalos;
  var intervalos = [];
  for (var i = 0; i < numIntervalos; i++) {
    intervalos.push({ min: rangoValores.min + i * intervaloSize, max: rangoValores.min + (i + 1) * intervaloSize });
  }

  // Agrupar los elementos por "TIPO_DE_IN"
  var elementosPorTipo = {};
  propiedadesVenta.forEach(function (propiedad) {
    var tipo = propiedad.properties.TIPO_DE_IN;
    if (!elementosPorTipo[tipo]) {
      elementosPorTipo[tipo] = [];
    }
    elementosPorTipo[tipo].push(propiedad);
  });

  // Ordenar los tipos de inmueble alfabéticamente
  var tiposInmueble = Object.keys(elementosPorTipo);
  tiposInmueble.sort(function (a, b) {
    return a.localeCompare(b);
  });

  // Crear los datos para el gráfico
  var datos = [['Tipo de inmueble']];
  intervalos.forEach(function (intervalo) {
    var etiqueta = '$' + intervalo.min.toLocaleString() + ' - $' + intervalo.max.toLocaleString();
    datos[0].push(etiqueta);
  });
  tiposInmueble.forEach(function (tipo) {
    var elementos = elementosPorTipo[tipo];
    var conteoIntervalos = Array(numIntervalos).fill(0);
    elementos.forEach(function (elemento) {
      var valor = elemento.properties.VALOR_F;
      for (var i = 0; i < numIntervalos; i++) {
        if (valor >= intervalos[i].min && valor < intervalos[i].max) {
          conteoIntervalos[i]++;
          break;
        }
      }
    });
    var filaDatos = [tipo].concat(conteoIntervalos);
    datos.push(filaDatos) ;
  });

  // Crear la tabla de datos y el gráfico de barras
  var tablaDatos = google.visualization.arrayToDataTable(datos);
  var opciones = {
    title: tipoDeOferta.toUpperCase(),
    bar: {
      groupWidth: '90%',
    },
    chartArea: {
      left: "10%",
      top: "10%",
      right: "10%",
    },
    legend: {
      position: "bottom",
    },
    backgroundColor: 'transparent',
    colors: tipoDeOferta === 'VENTA' ? ['#38C0D0', '#28A2B6', '#1E838C'] : ['#EB6397', '#E73B79', '#E5115C'],
    hAxis: {
      title: 'Tipo de inmueble',
      minValue: 0
    },
    vAxis: {
      title: 'Número de propiedades',
      minValue: 0
    },
    
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
  chart.draw(tablaDatos, opciones);
}

// Función para alternar entre "VENTA" y "ARRIENDO"
function alternarTipoDeOferta2() {
  var boton = document.getElementById('boton_alternar2');
  if (boton.dataset.tipo === 'VENTA') {
    boton.dataset.tipo = 'ARRIENDO';
    boton.textContent = 'Cambiar a Venta';
    drawChart2('ARRIENDO');
  } else {
    boton.dataset.tipo = 'VENTA';
    boton.textContent = 'Cambiar a Arriendo';
    drawChart2('VENTA');
  }
}

// Cargar la librería y dibujar el gráfico inicial
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(function () {
  drawChart2('VENTA');
});

// Función para alternar entre las opciones de oferta
function cambiarOferta() {
  var tipoDeOferta = document.getElementById('tipoDeOferta').value;
  drawChart2(tipoDeOferta);
}

// Cargar la librería de Google Charts y llamar la función para dibujar el gráfico por primera vez
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(function () {
  drawChart2('VENTA');
});
