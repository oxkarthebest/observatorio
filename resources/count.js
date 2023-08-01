// Importar el archivo OFERTAS_OBSERVATORIO.js
// Asumiendo que el archivo está en la misma carpeta que este archivo JavaScript
var chart = document.createElement('chart');
chart.src = 'layers/OFERTAS_OBSERVATORIO.js';
document.head.appendChild(chart);

// Filtrar todas las propiedades con "TIPO_DE_OF" = "VENTA"
var propiedadesVenta = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "VENTA";
});
// Contar el número de propiedades en venta
var conteoPropiedadesVenta = propiedadesVenta.length;
// Mostrar el conteo en la página
document.getElementById("venta").innerHTML = conteoPropiedadesVenta;


// Filtrar todas las propiedades con "TIPO_DE_OF" = "ARRIENDO"
var propiedadesArriendo = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "ARRIENDO";
});
// Contar el número de propiedades en arriendo
var conteoPropiedadesArriendo = propiedadesArriendo.length;
// Mostrar el conteo en la página
document.getElementById("arriendo").innerHTML = conteoPropiedadesArriendo;


// Filtrar todas las propiedades con "TIPO_DE_OF" = "VENTA" o "ARRIENDO"
var propiedadesVentaOArriendo = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "VENTA" || feature.properties.TIPO_DE_OF === "ARRIENDO";
});
// Contar el número de propiedades en venta o arriendo
var conteoPropiedadesVentaOArriendo = propiedadesVentaOArriendo.length;
// Mostrar el conteo en la página
document.getElementById("todos").innerHTML = conteoPropiedadesVentaOArriendo;


// Filtrar todas las propiedades con "TIPO_DE_OF" = "VENTA" y "TIPO_DE_IN" = "APARTAMENTO"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "VENTA" && feature.properties.TIPO_DE_IN === "APARTAMENTO";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("venapto").innerHTML = conteoPropiedadesFiltradas;

// Filtrar todas las propiedades con "TIPO_DE_OF" = "VENTA" y "TIPO_DE_IN" = "BODEGA"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "VENTA" && feature.properties.TIPO_DE_IN === "BODEGA";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("venbode").innerHTML = conteoPropiedadesFiltradas;

// Filtrar todas las propiedades con "TIPO_DE_OF" = "VENTA" y "TIPO_DE_IN" = "CASA"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "VENTA" && feature.properties.TIPO_DE_IN === "CASA";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("vencasa").innerHTML = conteoPropiedadesFiltradas;

// Filtrar todas las propiedades con "TIPO_DE_OF" = "VENTA" y "TIPO_DE_IN" = "HABITACION"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "VENTA" && feature.properties.TIPO_DE_IN === "HABITACION";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("venhabi").innerHTML = conteoPropiedadesFiltradas;

// Filtrar todas las propiedades con "TIPO_DE_OF" = "VENTA" y "TIPO_DE_IN" = "LOCAL"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "VENTA" && feature.properties.TIPO_DE_IN === "LOCAL";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("venloca").innerHTML = conteoPropiedadesFiltradas;

// Filtrar todas las propiedades con "TIPO_DE_OF" = "VENTA" y "TIPO_DE_IN" = "LOTE"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "VENTA" && feature.properties.TIPO_DE_IN === "LOTE";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("venlote").innerHTML = conteoPropiedadesFiltradas;


// Filtrar todas las propiedades con "TIPO_DE_OF" = "ARRIENDO" y "TIPO_DE_IN" = "APTO"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "ARRIENDO" && feature.properties.TIPO_DE_IN === "APARTAMENTO";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("arrapto").innerHTML = conteoPropiedadesFiltradas;

// Filtrar todas las propiedades con "TIPO_DE_OF" = "ARRIENDO" y "TIPO_DE_IN" = "BODEGA"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "ARRIENDO" && feature.properties.TIPO_DE_IN === "BODEGA";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("arrbode").innerHTML = conteoPropiedadesFiltradas;

// Filtrar todas las propiedades con "TIPO_DE_OF" = "ARRIENDO" y "TIPO_DE_IN" = "CASA"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "ARRIENDO" && feature.properties.TIPO_DE_IN === "CASA";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("arrcasa").innerHTML = conteoPropiedadesFiltradas;

// Filtrar todas las propiedades con "TIPO_DE_OF" = "ARRIENDO" y "TIPO_DE_IN" = "HABITACION"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "ARRIENDO" && feature.properties.TIPO_DE_IN === "HABITACION";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("arrhabi").innerHTML = conteoPropiedadesFiltradas;

// Filtrar todas las propiedades con "TIPO_DE_OF" = "ARRIENDO" y "TIPO_DE_IN" = "LOCAL"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "ARRIENDO" && feature.properties.TIPO_DE_IN === "LOCAL";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("arrloca").innerHTML = conteoPropiedadesFiltradas;

// Filtrar todas las propiedades con "TIPO_DE_OF" = "ARRIENDO" y "TIPO_DE_IN" = "LOTE"
var propiedadesFiltradas = json_OFERTAS_OBSERVATORIO.features.filter(function (feature) {
    return feature.properties.TIPO_DE_OF === "ARRIENDO" && feature.properties.TIPO_DE_IN === "LOTE";
});
// Contar el número de propiedades filtradas
var conteoPropiedadesFiltradas = propiedadesFiltradas.length;
// Mostrar el conteo en la página
document.getElementById("arrlote").innerHTML = conteoPropiedadesFiltradas;