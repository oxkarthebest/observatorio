var size = 0;
var placement = 'point';

var style_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 3.6 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5}), fill: new ol.style.Fill({color: 'rgba(111,255,1,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13(feature, value);
        ;

    return style;
};
