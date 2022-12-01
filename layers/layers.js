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

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoDbDarkMatter_2 = new ol.layer.Tile({
            'title': 'CartoDb Dark Matter',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoDbPositron_3 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
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
                style: style_U_SECTOR_4,
                interactive: true,
                title: '<img src="styles/legend/U_SECTOR_4.png" /> U_SECTOR'
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
maxResolution:2.394101811356875,
 
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
maxResolution:1.197190928009199,
 
                style: style_U_TERRENO_6,
                interactive: true,
                title: 'U_TERRENO'
            });
var format_OFERTAS_OBSERVATORIO_7 = new ol.format.GeoJSON();
var features_OFERTAS_OBSERVATORIO_7 = format_OFERTAS_OBSERVATORIO_7.readFeatures(json_OFERTAS_OBSERVATORIO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OFERTAS_OBSERVATORIO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OFERTAS_OBSERVATORIO_7.addFeatures(features_OFERTAS_OBSERVATORIO_7);
var lyr_OFERTAS_OBSERVATORIO_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OFERTAS_OBSERVATORIO_7, 
                style: style_OFERTAS_OBSERVATORIO_7,
                interactive: true,
                title: 'OFERTAS_OBSERVATORIO'
            });
var format_U_NOMENCLATRURA_VIAL_8 = new ol.format.GeoJSON();
var features_U_NOMENCLATRURA_VIAL_8 = format_U_NOMENCLATRURA_VIAL_8.readFeatures(json_U_NOMENCLATRURA_VIAL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_NOMENCLATRURA_VIAL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_NOMENCLATRURA_VIAL_8.addFeatures(features_U_NOMENCLATRURA_VIAL_8);
var lyr_U_NOMENCLATRURA_VIAL_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_NOMENCLATRURA_VIAL_8,
maxResolution:4.787923578052228,
 
                style: style_U_NOMENCLATRURA_VIAL_8,
                interactive: true,
                title: '<img src="styles/legend/U_NOMENCLATRURA_VIAL_8.png" /> U_NOMENCLATRURA_VIAL'
            });

lyr_NoMap_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(false);lyr_CartoDbDarkMatter_2.setVisible(false);lyr_CartoDbPositron_3.setVisible(true);lyr_U_SECTOR_4.setVisible(true);lyr_U_MANZANA_5.setVisible(true);lyr_U_TERRENO_6.setVisible(true);lyr_OFERTAS_OBSERVATORIO_7.setVisible(true);lyr_U_NOMENCLATRURA_VIAL_8.setVisible(true);
var layersList = [lyr_NoMap_0,lyr_OpenStreetMap_1,lyr_CartoDbDarkMatter_2,lyr_CartoDbPositron_3,lyr_U_SECTOR_4,lyr_U_MANZANA_5,lyr_U_TERRENO_6,lyr_OFERTAS_OBSERVATORIO_7,lyr_U_NOMENCLATRURA_VIAL_8];
lyr_U_SECTOR_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'USUARIO_LO': 'USUARIO_LO', 'FECHA_LOG': 'FECHA_LOG', 'GLOBALID': 'GLOBALID', 'GLOBALID_S': 'GLOBALID_S', 'CODIGO_MUN': 'CODIGO_MUN', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_U_MANZANA_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'AREA_M2': 'AREA_M2', });
lyr_U_TERRENO_6.set('fieldAliases', {'CODIGO': 'CODIGO', 'ÁREA_M2': 'ÁREA_M2', 'OFERTAS_OBSERVATORIO_Valor': 'OFERTAS_OBSERVATORIO_Valor', 'OFERTAS_OBSERVATORIO_Tipo_de_Of': 'OFERTAS_OBSERVATORIO_Tipo_de_Of', });
lyr_OFERTAS_OBSERVATORIO_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'TERRENO_CO': 'TERRENO_CO', 'TIPO_CONST': 'TIPO_CONST', 'TIPO_DOMIN': 'TIPO_DOMIN', 'NUMERO_PIS': 'NUMERO_PIS', 'NUMERO_SOT': 'NUMERO_SOT', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'CODIGO_MUN': 'CODIGO_MUN', 'COOR_X': 'COOR_X', 'COOR_Y': 'COOR_Y', 'RASTERVALU': 'RASTERVALU', 'Numero_de_': 'Numero_de_', 'Numero_Pre': 'Numero_Pre', 'Barrio': 'Barrio', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Valor': 'Valor', 'Porcentaje': 'Porcentaje', 'Valor_Depu': 'Valor_Depu', 'Fecha': 'Fecha', 'Area_de_Te': 'Area_de_Te', 'Numero_d_1': 'Numero_d_1', 'Numero_d_2': 'Numero_d_2', 'Tipo_de_Co': 'Tipo_de_Co', 'Edad_del_I': 'Edad_del_I', 'Servicios_': 'Servicios_', 'Servicio_1': 'Servicio_1', 'Servicio_2': 'Servicio_2', 'Casa_Canti': 'Casa_Canti', 'Casa_Can_1': 'Casa_Can_1', 'Apto_Canti': 'Apto_Canti', 'Apto_Numer': 'Apto_Numer', 'Apto_Tiene': 'Apto_Tiene', 'Cantidad_d': 'Cantidad_d', 'Garaje_Can': 'Garaje_Can', 'Garaje_Tip': 'Garaje_Tip', 'Garaje_T_1': 'Garaje_T_1', 'Tipo_de_In': 'Tipo_de_In', 'Tipo_de_Of': 'Tipo_de_Of', 'Fuente_Inf': 'Fuente_Inf', });
lyr_U_NOMENCLATRURA_VIAL_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TEXTO': 'TEXTO', });
lyr_U_SECTOR_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'USUARIO_LO': 'TextEdit', 'FECHA_LOG': 'DateTime', 'GLOBALID': 'TextEdit', 'GLOBALID_S': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_U_MANZANA_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'AREA_M2': 'TextEdit', });
lyr_U_TERRENO_6.set('fieldImages', {'CODIGO': 'TextEdit', 'ÁREA_M2': 'TextEdit', 'OFERTAS_OBSERVATORIO_Valor': 'TextEdit', 'OFERTAS_OBSERVATORIO_Tipo_de_Of': 'TextEdit', });
lyr_OFERTAS_OBSERVATORIO_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'TERRENO_CO': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_PIS': 'TextEdit', 'NUMERO_SOT': 'TextEdit', 'NUMERO_MEZ': 'TextEdit', 'NUMERO_SEM': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'COOR_X': 'TextEdit', 'COOR_Y': 'TextEdit', 'RASTERVALU': 'TextEdit', 'Numero_de_': 'TextEdit', 'Numero_Pre': 'TextEdit', 'Barrio': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Valor': 'TextEdit', 'Porcentaje': 'TextEdit', 'Valor_Depu': 'TextEdit', 'Fecha': 'TextEdit', 'Area_de_Te': 'TextEdit', 'Numero_d_1': 'TextEdit', 'Numero_d_2': 'TextEdit', 'Tipo_de_Co': 'TextEdit', 'Edad_del_I': 'TextEdit', 'Servicios_': 'TextEdit', 'Servicio_1': 'TextEdit', 'Servicio_2': 'TextEdit', 'Casa_Canti': 'TextEdit', 'Casa_Can_1': 'TextEdit', 'Apto_Canti': 'TextEdit', 'Apto_Numer': 'TextEdit', 'Apto_Tiene': 'TextEdit', 'Cantidad_d': 'TextEdit', 'Garaje_Can': 'TextEdit', 'Garaje_Tip': 'TextEdit', 'Garaje_T_1': 'TextEdit', 'Tipo_de_In': 'TextEdit', 'Tipo_de_Of': 'TextEdit', 'Fuente_Inf': 'TextEdit', });
lyr_U_NOMENCLATRURA_VIAL_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'TEXTO': 'TextEdit', });
lyr_U_SECTOR_4.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'USUARIO_LO': 'no label', 'FECHA_LOG': 'no label', 'GLOBALID': 'no label', 'GLOBALID_S': 'no label', 'CODIGO_MUN': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_U_MANZANA_5.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'AREA_M2': 'no label', });
lyr_U_TERRENO_6.set('fieldLabels', {'CODIGO': 'no label', 'ÁREA_M2': 'no label', 'OFERTAS_OBSERVATORIO_Valor': 'no label', 'OFERTAS_OBSERVATORIO_Tipo_de_Of': 'no label', });
lyr_OFERTAS_OBSERVATORIO_7.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'TERRENO_CO': 'no label', 'TIPO_CONST': 'no label', 'TIPO_DOMIN': 'no label', 'NUMERO_PIS': 'no label', 'NUMERO_SOT': 'no label', 'NUMERO_MEZ': 'no label', 'NUMERO_SEM': 'no label', 'CODIGO_MUN': 'no label', 'COOR_X': 'no label', 'COOR_Y': 'no label', 'RASTERVALU': 'no label', 'Numero_de_': 'no label', 'Numero_Pre': 'no label', 'Barrio': 'no label', 'Direccion': 'no label', 'Telefono': 'no label', 'Valor': 'no label', 'Porcentaje': 'no label', 'Valor_Depu': 'no label', 'Fecha': 'no label', 'Area_de_Te': 'no label', 'Numero_d_1': 'no label', 'Numero_d_2': 'no label', 'Tipo_de_Co': 'no label', 'Edad_del_I': 'no label', 'Servicios_': 'no label', 'Servicio_1': 'no label', 'Servicio_2': 'no label', 'Casa_Canti': 'no label', 'Casa_Can_1': 'no label', 'Apto_Canti': 'no label', 'Apto_Numer': 'no label', 'Apto_Tiene': 'no label', 'Cantidad_d': 'no label', 'Garaje_Can': 'no label', 'Garaje_Tip': 'no label', 'Garaje_T_1': 'no label', 'Tipo_de_In': 'no label', 'Tipo_de_Of': 'no label', 'Fuente_Inf': 'no label', });
lyr_U_NOMENCLATRURA_VIAL_8.set('fieldLabels', {'OBJECTID': 'no label', 'TEXTO': 'no label', });
lyr_U_NOMENCLATRURA_VIAL_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});