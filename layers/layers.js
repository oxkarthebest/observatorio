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
                interactive: false,
                title: '<img src="styles/legend/U_SECTOR_4.png" /> Sector'
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
                title: '<img src="styles/legend/U_MANZANA_5.png" /> Manzana'
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
                title: 'Terreno<br />\
                -Venta<br />\
                <img src="styles/legend/Ventas_3_0.png" /> -60000000<br />\
                <img src="styles/legend/Ventas_3_1.png" /> 60000000 - 102727272,73<br />\
                <img src="styles/legend/Ventas_3_2.png" /> 102727272,73 - 130000000<br />\
                <img src="styles/legend/Ventas_3_3.png" /> 130000000 - 160000000<br />\
                <img src="styles/legend/Ventas_3_4.png" /> 160000000 - 195909090,91<br />\
                <img src="styles/legend/Ventas_3_5.png" /> 195909090,91 - 250000000<br />\
                <img src="styles/legend/Ventas_3_6.png" /> 250000000 - 300000000<br />\
                <img src="styles/legend/Ventas_3_7.png" /> 300000000 - 360000000<br />\
                <img src="styles/legend/Ventas_3_8.png" /> 360000000 - 550000000<br />\
                <img src="styles/legend/Ventas_3_9.png" /> 550000000 - 1975000000<br />\
                -Arriendo<br />\
                <img src="styles/legend/Arrendo_4_0.png" /> -250000<br />\
                <img src="styles/legend/Arrendo_4_1.png" /> 250000 - 350000<br />\
                <img src="styles/legend/Arrendo_4_2.png" /> 350000 - 394211<br />\
                <img src="styles/legend/Arrendo_4_3.png" /> 394211 - 450000<br />\
                <img src="styles/legend/Arrendo_4_4.png" /> 450000 - 550789<br />\
                <img src="styles/legend/Arrendo_4_5.png" /> 550789 - 622632<br />\
                <img src="styles/legend/Arrendo_4_6.png" /> 622632 - 750000<br />\
                <img src="styles/legend/Arrendo_4_7.png" /> 750000 - 1100000<br />\
                <img src="styles/legend/Arrendo_4_8.png" /> 1100000 - 1300000<br />\
                <img src="styles/legend/Arrendo_4_9.png" /> 1300000 - 7500000<br />'
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
                title: 'Ofertas<br />\
                <img src="styles/legend/Ofertas_5_1.png" /> Venta<br />\
                <img src="styles/legend/Ofertas_5_2.png" /> Arriendo<br />'
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
                interactive: false,
                title: '<img src="styles/legend/U_NOMENCLATRURA_VIAL_8.png" /> Nomenclatura Vial'
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
lyr_U_SECTOR_4.set('fieldLabels', {'OBJECTID': 'inline label', 'CODIGO': 'inline label', 'USUARIO_LO': 'inline label', 'FECHA_LOG': 'inline label', 'GLOBALID': 'inline label', 'GLOBALID_S': 'inline label', 'CODIGO_MUN': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_U_MANZANA_5.set('fieldLabels', {'OBJECTID': 'inline label', 'CODIGO': 'inline label', 'AREA_M2': 'inline label', });
lyr_U_TERRENO_6.set('fieldLabels', {'CODIGO': 'inline label', 'ÁREA_M2': 'inline label', 'OFERTAS_OBSERVATORIO_Valor': 'inline label', 'OFERTAS_OBSERVATORIO_Tipo_de_Of': 'inline label', });
lyr_OFERTAS_OBSERVATORIO_7.set('fieldLabels', {'OBJECTID': 'inline label', 'CODIGO': 'inline label', 'TERRENO_CO': 'inline label', 'TIPO_CONST': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'CODIGO_MUN': 'inline label', 'COOR_X': 'inline label', 'COOR_Y': 'inline label', 'RASTERVALU': 'inline label', 'Numero_de_': 'inline label', 'Numero_Pre': 'inline label', 'Barrio': 'inline label', 'Direccion': 'inline label', 'Telefono': 'inline label', 'Valor': 'inline label', 'Porcentaje': 'inline label', 'Valor_Depu': 'inline label', 'Fecha': 'inline label', 'Area_de_Te': 'inline label', 'Numero_d_1': 'inline label', 'Numero_d_2': 'inline label', 'Tipo_de_Co': 'inline label', 'Edad_del_I': 'inline label', 'Servicios_': 'inline label', 'Servicio_1': 'inline label', 'Servicio_2': 'inline label', 'Casa_Canti': 'inline label', 'Casa_Can_1': 'inline label', 'Apto_Canti': 'inline label', 'Apto_Numer': 'inline label', 'Apto_Tiene': 'inline label', 'Cantidad_d': 'inline label', 'Garaje_Can': 'inline label', 'Garaje_Tip': 'inline label', 'Garaje_T_1': 'inline label', 'Tipo_de_In': 'inline label', 'Tipo_de_Of': 'inline label', 'Fuente_Inf': 'inline label', });
lyr_U_NOMENCLATRURA_VIAL_8.set('fieldLabels', {'OBJECTID': 'inline label', 'TEXTO': 'inline label', });
lyr_U_NOMENCLATRURA_VIAL_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});