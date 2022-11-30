var wms_layers = [];


        var lyr_NoMap_0 = new ol.layer.Tile({
            'title': 'No Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: ' '
            })
        });

        var lyr_CartoDbDarkMatter_1 = new ol.layer.Tile({
            'title': 'CartoDb Dark Matter',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoDbPositron_2 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_U_PERIMETRO_3 = new ol.format.GeoJSON();
var features_U_PERIMETRO_3 = format_U_PERIMETRO_3.readFeatures(json_U_PERIMETRO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_PERIMETRO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_PERIMETRO_3.addFeatures(features_U_PERIMETRO_3);
var lyr_U_PERIMETRO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_PERIMETRO_3, 
                style: style_U_PERIMETRO_3,
                interactive: false,
                title: '<img src="styles/legend/U_PERIMETRO_3.png" /> U_PERIMETRO'
            });
var format_U_SECTOR_4 = new ol.format.GeoJSON();
var features_U_SECTOR_4 = format_U_SECTOR_4.readFeatures(json_U_SECTOR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_SECTOR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_SECTOR_4.addFeatures(features_U_SECTOR_4);
var lyr_U_SECTOR_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_SECTOR_4,
maxResolution:20.71910428275101,
 
                style: style_U_SECTOR_4,
                interactive: false,
    title: '<img src="styles/legend/U_PERIMETRO_3.png" /> U_SECTOR'
        });
var format_U_MANZANA_5 = new ol.format.GeoJSON();
var features_U_MANZANA_5 = format_U_MANZANA_5.readFeatures(json_U_MANZANA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_MANZANA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_MANZANA_5.addFeatures(features_U_MANZANA_5);
var lyr_U_MANZANA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_MANZANA_5,
maxResolution:1.1599449880266905,
 
                style: style_U_MANZANA_5,
                interactive: true,
                title: '<img src="styles/legend/U_MANZANA_5.png" /> U_MANZANA'
            });
var format_U_TERRENO_6 = new ol.format.GeoJSON();
var features_U_TERRENO_6 = format_U_TERRENO_6.readFeatures(json_U_TERRENO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_TERRENO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_TERRENO_6.addFeatures(features_U_TERRENO_6);
var lyr_U_TERRENO_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_TERRENO_6,
maxResolution:0.5799724940133453,
 
                style: style_U_TERRENO_6,
                interactive: true,
                title: '<img src="styles/legend/U_TERRENO_6.png" /> U_TERRENO'
            });
var format_U_NOMENCLATRURA_VIAL_7 = new ol.format.GeoJSON();
var features_U_NOMENCLATRURA_VIAL_7 = format_U_NOMENCLATRURA_VIAL_7.readFeatures(json_U_NOMENCLATRURA_VIAL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_NOMENCLATRURA_VIAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_NOMENCLATRURA_VIAL_7.addFeatures(features_U_NOMENCLATRURA_VIAL_7);
var lyr_U_NOMENCLATRURA_VIAL_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_NOMENCLATRURA_VIAL_7,
maxResolution:2.319889976053381,
 
                style: style_U_NOMENCLATRURA_VIAL_7,
                interactive: false,
                title: '<img src="styles/legend/U_NOMENCLATRURA_VIAL_7.png" /> U_NOMENCLATRURA_VIAL'
            });
var format_U_NOMENCLATRURA_DOMICILIARIA_8 = new ol.format.GeoJSON();
var features_U_NOMENCLATRURA_DOMICILIARIA_8 = format_U_NOMENCLATRURA_DOMICILIARIA_8.readFeatures(json_U_NOMENCLATRURA_DOMICILIARIA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_NOMENCLATRURA_DOMICILIARIA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_NOMENCLATRURA_DOMICILIARIA_8.addFeatures(features_U_NOMENCLATRURA_DOMICILIARIA_8);
var lyr_U_NOMENCLATRURA_DOMICILIARIA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_NOMENCLATRURA_DOMICILIARIA_8,
maxResolution:0.2898462246759113,
 
                style: style_U_NOMENCLATRURA_DOMICILIARIA_8,
                interactive: false,
                title: '<img src="styles/legend/U_NOMENCLATRURA_DOMICILIARIA_8.png" /> U_NOMENCLATRURA_DOMICILIARIA'
            });
var format_ARRENDO_9 = new ol.format.GeoJSON();
var features_ARRENDO_9 = format_ARRENDO_9.readFeatures(json_ARRENDO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARRENDO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARRENDO_9.addFeatures(features_ARRENDO_9);
var lyr_ARRENDO_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARRENDO_9, 
                style: style_ARRENDO_9,
                interactive: true,
                title: 'ARRENDO'
            });
var format_VENTA_10 = new ol.format.GeoJSON();
var features_VENTA_10 = format_VENTA_10.readFeatures(json_VENTA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VENTA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VENTA_10.addFeatures(features_VENTA_10);
var lyr_VENTA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VENTA_10, 
                style: style_VENTA_10,
                interactive: true,
                title: 'VENTA'
            });

lyr_NoMap_0.setVisible(false);lyr_CartoDbDarkMatter_1.setVisible(false);lyr_CartoDbPositron_2.setVisible(true);lyr_U_PERIMETRO_3.setVisible(true);lyr_U_SECTOR_4.setVisible(true);lyr_U_MANZANA_5.setVisible(true);lyr_U_TERRENO_6.setVisible(true);lyr_U_NOMENCLATRURA_VIAL_7.setVisible(true);lyr_U_NOMENCLATRURA_DOMICILIARIA_8.setVisible(true);lyr_ARRENDO_9.setVisible(true);lyr_VENTA_10.setVisible(true);
var layersList = [lyr_NoMap_0,lyr_CartoDbDarkMatter_1,lyr_CartoDbPositron_2,lyr_U_PERIMETRO_3,lyr_U_SECTOR_4,lyr_U_MANZANA_5,lyr_U_TERRENO_6,lyr_U_NOMENCLATRURA_VIAL_7,lyr_U_NOMENCLATRURA_DOMICILIARIA_8,lyr_ARRENDO_9,lyr_VENTA_10];
lyr_U_PERIMETRO_3.set('fieldAliases', {'NOMBRE_GEO': 'NOMBRE_GEO', 'AREA_Ha': 'AREA_Ha', 'AREA_m²': 'AREA_m²', });
lyr_U_SECTOR_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'USUARIO_LO': 'USUARIO_LO', 'FECHA_LOG': 'FECHA_LOG', 'GLOBALID': 'GLOBALID', 'GLOBALID_S': 'GLOBALID_S', 'CODIGO_MUN': 'CODIGO_MUN', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_U_MANZANA_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'AREA_M2': 'AREA_M2', });
lyr_U_TERRENO_6.set('fieldAliases', {'CODIGO': 'CODIGO', 'ÁREA_M2': 'ÁREA_M2', });
lyr_U_NOMENCLATRURA_VIAL_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TEXTO': 'TEXTO', });
lyr_U_NOMENCLATRURA_DOMICILIARIA_8.set('fieldAliases', {'TEXTO': 'TEXTO', 'TERRENO_CO': 'TERRENO_CO', });
lyr_ARRENDO_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'TERRENO_CO': 'TERRENO_CO', 'TIPO_CONST': 'TIPO_CONST', 'TIPO_DOMIN': 'TIPO_DOMIN', 'NUMERO_PIS': 'NUMERO_PIS', 'NUMERO_SOT': 'NUMERO_SOT', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'CODIGO_MUN': 'CODIGO_MUN', 'COOR_X': 'COOR_X', 'COOR_Y': 'COOR_Y', 'RASTERVALU': 'RASTERVALU', 'Numero_de_': 'Numero_de_', 'Numero_Pre': 'Numero_Pre', 'Barrio': 'Barrio', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Valor': 'Valor', 'Porcentaje': 'Porcentaje', 'Valor_Depu': 'Valor_Depu', 'Fecha': 'Fecha', 'Area_de_Te': 'Area_de_Te', 'Numero_d_1': 'Numero_d_1', 'Numero_d_2': 'Numero_d_2', 'Tipo_de_Co': 'Tipo_de_Co', 'Edad_del_I': 'Edad_del_I', 'Servicios_': 'Servicios_', 'Servicio_1': 'Servicio_1', 'Servicio_2': 'Servicio_2', 'Casa_Canti': 'Casa_Canti', 'Casa_Can_1': 'Casa_Can_1', 'Apto_Canti': 'Apto_Canti', 'Apto_Numer': 'Apto_Numer', 'Apto_Tiene': 'Apto_Tiene', 'Cantidad_d': 'Cantidad_d', 'Garaje_Can': 'Garaje_Can', 'Garaje_Tip': 'Garaje_Tip', 'Garaje_T_1': 'Garaje_T_1', 'Tipo_de_In': 'Tipo_de_In', 'Tipo_de_Of': 'Tipo_de_Of', 'Fuente_Inf': 'Fuente_Inf', });
lyr_VENTA_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'TERRENO_CO': 'TERRENO_CO', 'TIPO_CONST': 'TIPO_CONST', 'TIPO_DOMIN': 'TIPO_DOMIN', 'NUMERO_PIS': 'NUMERO_PIS', 'NUMERO_SOT': 'NUMERO_SOT', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'CODIGO_MUN': 'CODIGO_MUN', 'COOR_X': 'COOR_X', 'COOR_Y': 'COOR_Y', 'RASTERVALU': 'RASTERVALU', 'Numero_de_': 'Numero_de_', 'Numero_Pre': 'Numero_Pre', 'Barrio': 'Barrio', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Valor': 'Valor', 'Porcentaje': 'Porcentaje', 'Valor_Depu': 'Valor_Depu', 'Fecha': 'Fecha', 'Area_de_Te': 'Area_de_Te', 'Numero_d_1': 'Numero_d_1', 'Numero_d_2': 'Numero_d_2', 'Tipo_de_Co': 'Tipo_de_Co', 'Edad_del_I': 'Edad_del_I', 'Servicios_': 'Servicios_', 'Servicio_1': 'Servicio_1', 'Servicio_2': 'Servicio_2', 'Casa_Canti': 'Casa_Canti', 'Casa_Can_1': 'Casa_Can_1', 'Apto_Canti': 'Apto_Canti', 'Apto_Numer': 'Apto_Numer', 'Apto_Tiene': 'Apto_Tiene', 'Cantidad_d': 'Cantidad_d', 'Garaje_Can': 'Garaje_Can', 'Garaje_Tip': 'Garaje_Tip', 'Garaje_T_1': 'Garaje_T_1', 'Tipo_de_In': 'Tipo_de_In', 'Tipo_de_Of': 'Tipo_de_Of', 'Fuente_Inf': 'Fuente_Inf', });
lyr_U_PERIMETRO_3.set('fieldImages', {'NOMBRE_GEO': 'TextEdit', 'AREA_Ha': 'TextEdit', 'AREA_m²': 'TextEdit', });
lyr_U_SECTOR_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'USUARIO_LO': 'TextEdit', 'FECHA_LOG': 'DateTime', 'GLOBALID': 'TextEdit', 'GLOBALID_S': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_U_MANZANA_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'AREA_M2': 'TextEdit', });
lyr_U_TERRENO_6.set('fieldImages', {'CODIGO': 'TextEdit', 'ÁREA_M2': 'TextEdit', });
lyr_U_NOMENCLATRURA_VIAL_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'TEXTO': 'TextEdit', });
lyr_U_NOMENCLATRURA_DOMICILIARIA_8.set('fieldImages', {'TEXTO': 'TextEdit', 'TERRENO_CO': 'TextEdit', });
lyr_ARRENDO_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'TERRENO_CO': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_PIS': 'TextEdit', 'NUMERO_SOT': 'TextEdit', 'NUMERO_MEZ': 'TextEdit', 'NUMERO_SEM': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'COOR_X': 'TextEdit', 'COOR_Y': 'TextEdit', 'RASTERVALU': 'TextEdit', 'Numero_de_': 'TextEdit', 'Numero_Pre': 'TextEdit', 'Barrio': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Valor': 'TextEdit', 'Porcentaje': 'TextEdit', 'Valor_Depu': 'TextEdit', 'Fecha': 'TextEdit', 'Area_de_Te': 'TextEdit', 'Numero_d_1': 'TextEdit', 'Numero_d_2': 'TextEdit', 'Tipo_de_Co': 'TextEdit', 'Edad_del_I': 'TextEdit', 'Servicios_': 'TextEdit', 'Servicio_1': 'TextEdit', 'Servicio_2': 'TextEdit', 'Casa_Canti': 'TextEdit', 'Casa_Can_1': 'TextEdit', 'Apto_Canti': 'TextEdit', 'Apto_Numer': 'TextEdit', 'Apto_Tiene': 'TextEdit', 'Cantidad_d': 'TextEdit', 'Garaje_Can': 'TextEdit', 'Garaje_Tip': 'TextEdit', 'Garaje_T_1': 'TextEdit', 'Tipo_de_In': 'TextEdit', 'Tipo_de_Of': 'TextEdit', 'Fuente_Inf': 'TextEdit', });
lyr_VENTA_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'TERRENO_CO': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_PIS': 'TextEdit', 'NUMERO_SOT': 'TextEdit', 'NUMERO_MEZ': 'TextEdit', 'NUMERO_SEM': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'COOR_X': 'TextEdit', 'COOR_Y': 'TextEdit', 'RASTERVALU': 'TextEdit', 'Numero_de_': 'TextEdit', 'Numero_Pre': 'TextEdit', 'Barrio': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Valor': 'TextEdit', 'Porcentaje': 'TextEdit', 'Valor_Depu': 'TextEdit', 'Fecha': 'TextEdit', 'Area_de_Te': 'TextEdit', 'Numero_d_1': 'TextEdit', 'Numero_d_2': 'TextEdit', 'Tipo_de_Co': 'TextEdit', 'Edad_del_I': 'TextEdit', 'Servicios_': 'TextEdit', 'Servicio_1': 'TextEdit', 'Servicio_2': 'TextEdit', 'Casa_Canti': 'TextEdit', 'Casa_Can_1': 'TextEdit', 'Apto_Canti': 'TextEdit', 'Apto_Numer': 'TextEdit', 'Apto_Tiene': 'TextEdit', 'Cantidad_d': 'TextEdit', 'Garaje_Can': 'TextEdit', 'Garaje_Tip': 'TextEdit', 'Garaje_T_1': 'TextEdit', 'Tipo_de_In': 'TextEdit', 'Tipo_de_Of': 'TextEdit', 'Fuente_Inf': 'TextEdit', });
lyr_U_PERIMETRO_3.set('fieldLabels', {'NOMBRE_GEO': 'no label', 'AREA_Ha': 'no label', 'AREA_m²': 'no label', });
lyr_U_SECTOR_4.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'USUARIO_LO': 'no label', 'FECHA_LOG': 'no label', 'GLOBALID': 'no label', 'GLOBALID_S': 'no label', 'CODIGO_MUN': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_U_MANZANA_5.set('fieldLabels', {'OBJECTID': 'inline label', 'CODIGO': 'inline label', 'AREA_M2': 'inline label', });
lyr_U_TERRENO_6.set('fieldLabels', {'CODIGO': 'inline label', 'ÁREA_M2': 'inline label', });
lyr_U_NOMENCLATRURA_VIAL_7.set('fieldLabels', {'OBJECTID': 'inline label', 'TEXTO': 'inline label', });
lyr_U_NOMENCLATRURA_DOMICILIARIA_8.set('fieldLabels', {'TEXTO': 'inline label', 'TERRENO_CO': 'inline label', });
lyr_ARRENDO_9.set('fieldLabels', {'OBJECTID': 'inline label', 'CODIGO': 'inline label', 'TERRENO_CO': 'inline label', 'TIPO_CONST': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'CODIGO_MUN': 'inline label', 'COOR_X': 'inline label', 'COOR_Y': 'inline label', 'RASTERVALU': 'inline label', 'Numero_de_': 'inline label', 'Numero_Pre': 'inline label', 'Barrio': 'inline label', 'Direccion': 'inline label', 'Telefono': 'inline label', 'Valor': 'inline label', 'Porcentaje': 'inline label', 'Valor_Depu': 'inline label', 'Fecha': 'inline label', 'Area_de_Te': 'inline label', 'Numero_d_1': 'inline label', 'Numero_d_2': 'inline label', 'Tipo_de_Co': 'inline label', 'Edad_del_I': 'inline label', 'Servicios_': 'inline label', 'Servicio_1': 'inline label', 'Servicio_2': 'inline label', 'Casa_Canti': 'inline label', 'Casa_Can_1': 'inline label', 'Apto_Canti': 'inline label', 'Apto_Numer': 'inline label', 'Apto_Tiene': 'inline label', 'Cantidad_d': 'inline label', 'Garaje_Can': 'inline label', 'Garaje_Tip': 'inline label', 'Garaje_T_1': 'inline label', 'Tipo_de_In': 'inline label', 'Tipo_de_Of': 'inline label', 'Fuente_Inf': 'inline label', });
lyr_VENTA_10.set('fieldLabels', {'OBJECTID': 'inline label', 'CODIGO': 'inline label', 'TERRENO_CO': 'inline label', 'TIPO_CONST': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'CODIGO_MUN': 'inline label', 'COOR_X': 'inline label', 'COOR_Y': 'inline label', 'RASTERVALU': 'inline label', 'Numero_de_': 'inline label', 'Numero_Pre': 'inline label', 'Barrio': 'inline label', 'Direccion': 'inline label', 'Telefono': 'inline label', 'Valor': 'inline label', 'Porcentaje': 'inline label', 'Valor_Depu': 'inline label', 'Fecha': 'inline label', 'Area_de_Te': 'inline label', 'Numero_d_1': 'inline label', 'Numero_d_2': 'inline label', 'Tipo_de_Co': 'inline label', 'Edad_del_I': 'inline label', 'Servicios_': 'inline label', 'Servicio_1': 'inline label', 'Servicio_2': 'inline label', 'Casa_Canti': 'inline label', 'Casa_Can_1': 'inline label', 'Apto_Canti': 'inline label', 'Apto_Numer': 'inline label', 'Apto_Tiene': 'inline label', 'Cantidad_d': 'inline label', 'Garaje_Can': 'inline label', 'Garaje_Tip': 'inline label', 'Garaje_T_1': 'inline label', 'Tipo_de_In': 'inline label', 'Tipo_de_Of': 'inline label', 'Fuente_Inf': 'inline label', });
lyr_VENTA_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});