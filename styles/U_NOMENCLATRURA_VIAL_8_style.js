var size = 0;
var placement = 'point';

var style_U_NOMENCLATRURA_VIAL_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Corbel\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    let cadena = String(feature.get("TEXTO"))
    const primerCaracter = cadena.charAt(0);
    const restoDeLaCadena = cadena.substring(1, cadena.length).toLowerCase();
    if ((cadena) !== null) {
        labelText = primerCaracter.concat(restoDeLaCadena);
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(249,3,11,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
