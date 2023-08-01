var wms_layers = [];
var format_ARRIENDOLOTE_0 = new ol.format.GeoJSON();
var features_ARRIENDOLOTE_0 = format_ARRIENDOLOTE_0.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_ARRIENDOLOTE_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARRIENDOLOTE_0.addFeatures(features_ARRIENDOLOTE_0);
var lyr_ARRIENDOLOTE_0 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ARRIENDOLOTE_0,
    style: style_ARRIENDOLOTE_0,
    interactive: true,
    name: 'Lote en Arriendo',
    title: '<img src="styles/legend/LOTE1.png" /> Lote'
});
var format_ARRIENDOLOCAL_1 = new ol.format.GeoJSON();
var features_ARRIENDOLOCAL_1 = format_ARRIENDOLOCAL_1.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_ARRIENDOLOCAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARRIENDOLOCAL_1.addFeatures(features_ARRIENDOLOCAL_1);
var lyr_ARRIENDOLOCAL_1 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ARRIENDOLOCAL_1,
    style: style_ARRIENDOLOCAL_1,
    interactive: true,
    name: 'Local en Arriendo',
    title: '<img src="styles/legend/LOCAL1.png" /> Local'
});
var format_ARRIENDOHABITACION_2 = new ol.format.GeoJSON();
var features_ARRIENDOHABITACION_2 = format_ARRIENDOHABITACION_2.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_ARRIENDOHABITACION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARRIENDOHABITACION_2.addFeatures(features_ARRIENDOHABITACION_2);
var lyr_ARRIENDOHABITACION_2 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ARRIENDOHABITACION_2,
    style: style_ARRIENDOHABITACION_2,
    interactive: true,
    name: 'Habitacion en Arriendo',
    title: '<img src="styles/legend/HABITACION1.png" /> Habitación'
});
var format_ARRIENDOCASA_3 = new ol.format.GeoJSON();
var features_ARRIENDOCASA_3 = format_ARRIENDOCASA_3.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_ARRIENDOCASA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARRIENDOCASA_3.addFeatures(features_ARRIENDOCASA_3);
var lyr_ARRIENDOCASA_3 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ARRIENDOCASA_3,
    style: style_ARRIENDOCASA_3,
    interactive: true,
    name: 'Casa en Arriendo',
    title: '<img src="styles/legend/CASA1.png" /> Casa'
});
var format_ARRIENDOBODEGA_4 = new ol.format.GeoJSON();
var features_ARRIENDOBODEGA_4 = format_ARRIENDOBODEGA_4.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_ARRIENDOBODEGA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARRIENDOBODEGA_4.addFeatures(features_ARRIENDOBODEGA_4);
var lyr_ARRIENDOBODEGA_4 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ARRIENDOBODEGA_4,
    style: style_ARRIENDOBODEGA_4,
    interactive: true,
    name: 'Bodega en Arriendo',
    title: '<img src="styles/legend/BODEGA1.png" /> Bodega'
});
var format_ARRIENDOAPTO_5 = new ol.format.GeoJSON();
var features_ARRIENDOAPTO_5 = format_ARRIENDOAPTO_5.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_ARRIENDOAPTO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARRIENDOAPTO_5.addFeatures(features_ARRIENDOAPTO_5);
var lyr_ARRIENDOAPTO_5 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ARRIENDOAPTO_5,
    style: style_ARRIENDOAPTO_5,
    interactive: true,
    name: 'Apartamento en Arriendo',
    title: '<img src="styles/legend/APTO1.png" /> Apartamento'
});
var format_VENTALOTE_6 = new ol.format.GeoJSON();
var features_VENTALOTE_6 = format_VENTALOTE_6.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_VENTALOTE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VENTALOTE_6.addFeatures(features_VENTALOTE_6);
var lyr_VENTALOTE_6 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_VENTALOTE_6,
    style: style_VENTALOTE_6,
    interactive: true,
    name: 'Lote en Venta',
    title: '<img src="styles/legend/LOTE.png" /> Lote'
});
var format_VENTALOCAL_7 = new ol.format.GeoJSON();
var features_VENTALOCAL_7 = format_VENTALOCAL_7.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_VENTALOCAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VENTALOCAL_7.addFeatures(features_VENTALOCAL_7);
var lyr_VENTALOCAL_7 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_VENTALOCAL_7,
    style: style_VENTALOCAL_7,
    interactive: true,
    name: 'Local en Venta',
    title: '<img src="styles/legend/LOCAL.png" /> Local'
});
var format_VENTAHABITACION_8 = new ol.format.GeoJSON();
var features_VENTAHABITACION_8 = format_VENTAHABITACION_8.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_VENTAHABITACION_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VENTAHABITACION_8.addFeatures(features_VENTAHABITACION_8);
var lyr_VENTAHABITACION_8 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_VENTAHABITACION_8,
    style: style_VENTAHABITACION_8,
    interactive: true,
    name: 'Habitación en Venta',
    title: '<img src="styles/legend/HABITACION.png" /> Habitación'
});
var format_VENTACASA_9 = new ol.format.GeoJSON();
var features_VENTACASA_9 = format_VENTACASA_9.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_VENTACASA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VENTACASA_9.addFeatures(features_VENTACASA_9);
var lyr_VENTACASA_9 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_VENTACASA_9,
    style: style_VENTACASA_9,
    interactive: true,
    name: 'Casa en Venta',
    title: '<img src="styles/legend/CASA.png" /> Casa'
});
var format_VENTABODEGA_10 = new ol.format.GeoJSON();
var features_VENTABODEGA_10 = format_VENTABODEGA_10.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_VENTABODEGA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VENTABODEGA_10.addFeatures(features_VENTABODEGA_10);
var lyr_VENTABODEGA_10 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_VENTABODEGA_10,
    style: style_VENTABODEGA_10,
    interactive: true,
    name: 'Bodega en Venta',
    title: '<img src="styles/legend/BODEGA.png" /> Bodega'
});
var format_VENTAAPTO_11 = new ol.format.GeoJSON();
var features_VENTAAPTO_11 = format_VENTAAPTO_11.readFeatures(json_OFERTAS_OBSERVATORIO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_VENTAAPTO_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VENTAAPTO_11.addFeatures(features_VENTAAPTO_11);
var lyr_VENTAAPTO_11 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_VENTAAPTO_11,
    style: style_VENTAAPTO_11,
    interactive: true,
    name: 'Apartamento en Venta',
    title: '<img src="styles/legend/APTO.png" /> Apartamento'
});
var format_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12 = new ol.format.GeoJSON();
var features_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12 = format_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12.readFeatures(json_PUNTOS_DE_INTERES_URBANIZACIONES,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12.addFeatures(features_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12);
var lyr_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12,
    style: style_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12,
    interactive: true,
    name: 'Punto de Interés',
    title: '<img src="styles/legend/LOTE2.png" /> Lote'
});
var format_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13 = new ol.format.GeoJSON();
var features_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13 = format_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13.readFeatures(json_PUNTOS_DE_INTERES_URBANIZACIONES,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13.addFeatures(features_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13);
var lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13,
    style: style_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13,
    interactive: true,
    name: 'Punto de Interés',
    title: '<img src="styles/legend/CONDOMINIO2.png" /> Condominio'
});
var format_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14 = new ol.format.GeoJSON();
var features_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14 = format_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14.readFeatures(json_PUNTOS_DE_INTERES_URBANIZACIONES,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14.addFeatures(features_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14);
var lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14,
    style: style_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14,
    interactive: true,
    name: 'Punto de Interés',
    title: '<img src="styles/legend/CASA2.png" /> Casa'
});
var format_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15 = new ol.format.GeoJSON();
var features_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15 = format_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15.readFeatures(json_PUNTOS_DE_INTERES_URBANIZACIONES,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15.addFeatures(features_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15);
var lyr_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15,
    style: style_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15,
    interactive: true,
    name: 'Punto de Interés',
    title: '<img src="styles/legend/APTO2.png" /> Apartamento'
});



var lyr_NoMap_20 = new ol.layer.Tile({
    'title': 'No Map',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: ' '
    })
});

var lyr_OpenStreetMap = new ol.layer.Tile({
    'title': 'OpenStreetMap',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

var lyr_CartoDbPositron_22 = new ol.layer.Tile({
    'title': 'CartoDb Positron',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
    })
});

var format_Perimetro_23 = new ol.format.GeoJSON();
var features_Perimetro_23 = format_Perimetro_23.readFeatures(json_U_PERIMETRO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Perimetro_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetro_23.addFeatures(features_Perimetro_23);
var lyr_Perimetro_23 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Perimetro_23,
    style: style_Perimetro_23,
    interactive: false,
    name: 'Perimetro Urbano',
    title: '<img src="styles/legend/Perimetro_23.png" /> Perimetro'
});
var format_Manzana_24 = new ol.format.GeoJSON();
var features_Manzana_24 = format_Manzana_24.readFeatures(json_U_MANZANA,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Manzana_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzana_24.addFeatures(features_Manzana_24);
var lyr_Manzana_24 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Manzana_24,
    maxResolution: 2.4425495378002884,

    style: style_Manzana_24,
    interactive: false,
    name: 'Manzana Urbana',
    title: '<img src="styles/legend/Manzana_24.png" /> Manzana'
});
var format_Sector_25 = new ol.format.GeoJSON();
var features_Sector_25 = format_Sector_25.readFeatures(json_U_SECTOR,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sector_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector_25.addFeatures(features_Sector_25);
var lyr_Sector_25 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Sector_25,
    style: style_Sector_25,
    interactive: false,
    name: 'Sector Urbano',
    title: '<img src="styles/legend/SECTOR.png" /> Sector'
});
var format_Terreno_26 = new ol.format.GeoJSON();
var features_Terreno_26 = format_Terreno_26.readFeatures(json_U_LC_TERRENO,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Terreno_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terreno_26.addFeatures(features_Terreno_26);
var lyr_Terreno_26 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Terreno_26,
    maxResolution: 0.706832725683092,

    style: style_Terreno_26,
    interactive: false,
    name: 'Terreno Urbano',
    title: '<img src="styles/legend/Terreno_26.png" /> Terreno'
});
var format_U_NOMENCLATRURA_VIAL_27 = new ol.format.GeoJSON();
var features_U_NOMENCLATRURA_VIAL_27 = format_U_NOMENCLATRURA_VIAL_27.readFeatures(json_U_NOMENCLATRURA_VIAL,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_U_NOMENCLATRURA_VIAL_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_NOMENCLATRURA_VIAL_27.addFeatures(features_U_NOMENCLATRURA_VIAL_27);
var lyr_U_NOMENCLATRURA_VIAL_27 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_U_NOMENCLATRURA_VIAL_27,
    maxResolution: 22.62340798110483,

    style: style_U_NOMENCLATRURA_VIAL_27,
    interactive: false,
    title: '<img src="styles/legend/U_NOMENCLATRURA_VIAL_27.png" /> Nomenclatura Vial'
});

var group_PuntosdeInteres = new ol.layer.Group({
    layers: [lyr_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12, lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13, lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14, lyr_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15,],
    title: "Puntos de Interes",
    fold: 'open',
});
var group_Venta = new ol.layer.Group({
    layers: [lyr_VENTALOTE_6, lyr_VENTALOCAL_7, lyr_VENTAHABITACION_8, lyr_VENTACASA_9, lyr_VENTABODEGA_10, lyr_VENTAAPTO_11,],
    title: "Venta",
    fold: 'open',
});
var group_Arriendo = new ol.layer.Group({
    layers: [lyr_ARRIENDOLOTE_0, lyr_ARRIENDOLOCAL_1, lyr_ARRIENDOHABITACION_2, lyr_ARRIENDOCASA_3, lyr_ARRIENDOBODEGA_4, lyr_ARRIENDOAPTO_5,],
    title: "Arriendo",
    fold: 'open',
});


lyr_ARRIENDOLOTE_0.setVisible(true); lyr_ARRIENDOLOCAL_1.setVisible(true); lyr_ARRIENDOHABITACION_2.setVisible(true); lyr_ARRIENDOCASA_3.setVisible(true); lyr_ARRIENDOBODEGA_4.setVisible(true); lyr_ARRIENDOAPTO_5.setVisible(true); lyr_VENTALOTE_6.setVisible(true); lyr_VENTALOCAL_7.setVisible(true); lyr_VENTAHABITACION_8.setVisible(true); lyr_VENTACASA_9.setVisible(true); lyr_VENTABODEGA_10.setVisible(true); lyr_VENTAAPTO_11.setVisible(true); lyr_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12.setVisible(true); lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13.setVisible(true); lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14.setVisible(true); lyr_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15.setVisible(true); lyr_NoMap_20.setVisible(false); lyr_OpenStreetMap.setVisible(true); lyr_CartoDbPositron_22.setVisible(false); lyr_Perimetro_23.setVisible(true); lyr_Manzana_24.setVisible(true); lyr_Sector_25.setVisible(true); lyr_Terreno_26.setVisible(true); lyr_U_NOMENCLATRURA_VIAL_27.setVisible(true);
var layersList = [
    new ol.layer.Group({
        title: 'Mapas Base',
        fold: 'open',
        layers: [
            lyr_NoMap_20, lyr_CartoDbPositron_22, lyr_OpenStreetMap,]
    }), lyr_Perimetro_23, lyr_Sector_25, lyr_Manzana_24, lyr_Terreno_26, lyr_U_NOMENCLATRURA_VIAL_27, group_PuntosdeInteres, group_Arriendo, group_Venta];

lyr_ARRIENDOLOTE_0.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_ARRIENDOLOCAL_1.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_ARRIENDOHABITACION_2.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_ARRIENDOCASA_3.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_ARRIENDOBODEGA_4.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_ARRIENDOAPTO_5.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_VENTALOTE_6.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_VENTALOCAL_7.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_VENTAHABITACION_8.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_VENTACASA_9.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_VENTABODEGA_10.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_VENTAAPTO_11.set('fieldAliases', {'codigo_mun': 'codigo_mun', 'longitud': 'longitud', 'latitud': 'latitud', 'altitud': 'altitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'VALOR_F': 'VALOR_F', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area': 'area', 'habitacion': 'habitacion', 'banos': 'banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_DE_IN': 'TIPO_DE_IN', 'TIPO_DE_OF': 'TIPO_DE_OF', 'fuente_inf': 'fuente_inf', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12.set('fieldAliases', {'longitud': 'longitud', 'latitud': 'latitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'valor_1': 'valor_1', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area_1': 'area_1', 'n_habitaci': 'n_habitaci', 'n_banos': 'n_banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_INMUE': 'TIPO_INMUE', 'tipo_ofert': 'tipo_ofert', 'fuente_inf': 'fuente_inf', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13.set('fieldAliases', {'longitud': 'longitud', 'latitud': 'latitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'valor_1': 'valor_1', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area_1': 'area_1', 'n_habitaci': 'n_habitaci', 'n_banos': 'n_banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_INMUE': 'TIPO_INMUE', 'tipo_ofert': 'tipo_ofert', 'fuente_inf': 'fuente_inf', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14.set('fieldAliases', {'longitud': 'longitud', 'latitud': 'latitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'valor_1': 'valor_1', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area_1': 'area_1', 'n_habitaci': 'n_habitaci', 'n_banos': 'n_banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_INMUE': 'TIPO_INMUE', 'tipo_ofert': 'tipo_ofert', 'fuente_inf': 'fuente_inf', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15.set('fieldAliases', {'longitud': 'longitud', 'latitud': 'latitud', 'NPN': 'NPN', 'no_oferta': 'no_oferta', 'barrio': 'barrio', 'direccion': 'direccion', 'valor_1': 'valor_1', 'porcentaje': 'porcentaje', 'valor_dep': 'valor_dep', 'fecha': 'fecha', 'area_1': 'area_1', 'n_habitaci': 'n_habitaci', 'n_banos': 'n_banos', 'tipo_conci': 'tipo_conci', 'edad': 'edad', 'agua': 'agua', 'energia': 'energia', 'gas': 'gas', 'casa_pisos': 'casa_pisos', 'casa_patio': 'casa_patio', 'piso_apart': 'piso_apart', 'numero_pis': 'numero_pis', 'ascensor': 'ascensor', 'depositos': 'depositos', 'cantidad_p': 'cantidad_p', 'garaje_tip': 'garaje_tip', 'garaje_t_1': 'garaje_t_1', 'TIPO_INMUE': 'TIPO_INMUE', 'tipo_ofert': 'tipo_ofert', 'fuente_inf': 'fuente_inf', });
lyr_Perimetro_23.set('fieldAliases', { 'NOMBRE_GEO': 'Nombre', 'AREA_Ha': 'Área Ha', 'AREA_m²': 'Área m²', });
lyr_Manzana_24.set('fieldAliases', { 'OBJECTID': 'Identificador', 'CODIGO': 'Codigo', 'AREA_M2': 'Área m²', });
lyr_Sector_25.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'USUARIO_LO': 'USUARIO_LO', 'FECHA_LOG': 'FECHA_LOG', 'GLOBALID': 'GLOBALID', 'GLOBALID_S': 'GLOBALID_S', 'CODIGO_MUN': 'CODIGO_MUN', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Terreno_26.set('fieldAliases', {'area_terre': 'area_terre', 'avaluo_ter': 'avaluo_ter', 'manzana_ve': 'manzana_ve', 'dimension': 'dimension', 'etiqueta': 'etiqueta', 'relacion_s': 'relacion_s', 'comienzo_v': 'comienzo_v', 'fin_vida_u': 'fin_vida_u', 'espacio_de': 'espacio_de', 'local_id': 'local_id', 'npn': 'npn', });
lyr_U_NOMENCLATRURA_VIAL_27.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'TEXTO': 'TEXTO', });

lyr_ARRIENDOLOTE_0.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_ARRIENDOLOCAL_1.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_ARRIENDOHABITACION_2.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_ARRIENDOCASA_3.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_ARRIENDOBODEGA_4.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_ARRIENDOAPTO_5.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_VENTALOTE_6.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_VENTALOCAL_7.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_VENTAHABITACION_8.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_VENTACASA_9.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_VENTABODEGA_10.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_VENTAAPTO_11.set('fieldImages', {'codigo_mun': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'altitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'VALOR_F': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area': 'TextEdit', 'habitacion': 'TextEdit', 'banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12.set('fieldImages', {'longitud': 'TextEdit', 'latitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'valor_1': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area_1': 'TextEdit', 'n_habitaci': 'TextEdit', 'n_banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_INMUE': 'TextEdit', 'tipo_ofert': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13.set('fieldImages', {'longitud': 'TextEdit', 'latitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'valor_1': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area_1': 'TextEdit', 'n_habitaci': 'TextEdit', 'n_banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_INMUE': 'TextEdit', 'tipo_ofert': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14.set('fieldImages', {'longitud': 'TextEdit', 'latitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'valor_1': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area_1': 'TextEdit', 'n_habitaci': 'TextEdit', 'n_banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_INMUE': 'TextEdit', 'tipo_ofert': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15.set('fieldImages', {'longitud': 'TextEdit', 'latitud': 'TextEdit', 'NPN': 'TextEdit', 'no_oferta': 'TextEdit', 'barrio': 'TextEdit', 'direccion': 'TextEdit', 'valor_1': 'TextEdit', 'porcentaje': 'TextEdit', 'valor_dep': 'TextEdit', 'fecha': 'TextEdit', 'area_1': 'TextEdit', 'n_habitaci': 'TextEdit', 'n_banos': 'TextEdit', 'tipo_conci': 'TextEdit', 'edad': 'TextEdit', 'agua': 'TextEdit', 'energia': 'TextEdit', 'gas': 'TextEdit', 'casa_pisos': 'TextEdit', 'casa_patio': 'TextEdit', 'piso_apart': 'TextEdit', 'numero_pis': 'TextEdit', 'ascensor': 'TextEdit', 'depositos': 'TextEdit', 'cantidad_p': 'TextEdit', 'garaje_tip': 'TextEdit', 'garaje_t_1': 'TextEdit', 'TIPO_INMUE': 'TextEdit', 'tipo_ofert': 'TextEdit', 'fuente_inf': 'TextEdit', });
lyr_Perimetro_23.set('fieldImages', { 'NOMBRE_GEO': 'TextEdit', 'AREA_Ha': 'TextEdit', 'AREA_m²': 'TextEdit', });
lyr_Manzana_24.set('fieldImages', { 'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'AREA_M2': 'TextEdit', });
lyr_Sector_25.set('fieldImages', { 'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'USUARIO_LO': 'TextEdit', 'FECHA_LOG': 'DateTime', 'GLOBALID': 'TextEdit', 'GLOBALID_S': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Terreno_26.set('fieldImages', {'area_terre': 'TextEdit', 'avaluo_ter': 'TextEdit', 'manzana_ve': 'TextEdit', 'dimension': 'TextEdit', 'etiqueta': 'TextEdit', 'relacion_s': 'TextEdit', 'comienzo_v': 'TextEdit', 'fin_vida_u': 'TextEdit', 'espacio_de': 'TextEdit', 'local_id': 'TextEdit', 'npn': 'TextEdit', });
lyr_U_NOMENCLATRURA_VIAL_27.set('fieldImages', { 'OBJECTID': 'TextEdit', 'TEXTO': 'TextEdit', });

lyr_ARRIENDOLOTE_0.set('fieldLabels', {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_ARRIENDOLOCAL_1.set('fieldLabels',  {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_ARRIENDOHABITACION_2.set('fieldLabels',  {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_ARRIENDOCASA_3.set('fieldLabels', {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_ARRIENDOBODEGA_4.set('fieldLabels',  {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_ARRIENDOAPTO_5.set('fieldLabels',  {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_VENTALOTE_6.set('fieldLabels',  {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_VENTALOCAL_7.set('fieldLabels',  {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_VENTAHABITACION_8.set('fieldLabels',  {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_VENTACASA_9.set('fieldLabels',  {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_VENTABODEGA_10.set('fieldLabels',  {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_VENTAAPTO_11.set('fieldLabels',  {'codigo_mun': 'inline label', 'longitud': 'inline label', 'latitud': 'inline label', 'altitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'VALOR_F': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area': 'inline label', 'habitacion': 'inline label', 'banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'fuente_inf': 'inline label', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12.set('fieldLabels', {'longitud': 'inline label', 'latitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'valor_1': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area_1': 'inline label', 'n_habitaci': 'inline label', 'n_banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_INMUE': 'inline label', 'tipo_ofert': 'inline label', 'fuente_inf': 'inline label', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13.set('fieldLabels', {'longitud': 'inline label', 'latitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'valor_1': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area_1': 'inline label', 'n_habitaci': 'inline label', 'n_banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_INMUE': 'inline label', 'tipo_ofert': 'inline label', 'fuente_inf': 'inline label', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14.set('fieldLabels', {'longitud': 'inline label', 'latitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'valor_1': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area_1': 'inline label', 'n_habitaci': 'inline label', 'n_banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_INMUE': 'inline label', 'tipo_ofert': 'inline label', 'fuente_inf': 'inline label', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15.set('fieldLabels', {'longitud': 'inline label', 'latitud': 'inline label', 'NPN': 'inline label', 'no_oferta': 'inline label', 'barrio': 'inline label', 'direccion': 'inline label', 'valor_1': 'inline label', 'porcentaje': 'inline label', 'valor_dep': 'inline label', 'fecha': 'inline label', 'area_1': 'inline label', 'n_habitaci': 'inline label', 'n_banos': 'inline label', 'tipo_conci': 'inline label', 'edad': 'inline label', 'agua': 'inline label', 'energia': 'inline label', 'gas': 'inline label', 'casa_pisos': 'inline label', 'casa_patio': 'inline label', 'piso_apart': 'inline label', 'numero_pis': 'inline label', 'ascensor': 'inline label', 'depositos': 'inline label', 'cantidad_p': 'inline label', 'garaje_tip': 'inline label', 'garaje_t_1': 'inline label', 'TIPO_INMUE': 'inline label', 'tipo_ofert': 'inline label', 'fuente_inf': 'inline label', });
lyr_Perimetro_23.set('fieldLabels', { 'NOMBRE_GEO': 'inline label', 'AREA_Ha': 'inline label', 'AREA_m²': 'inline label', });
lyr_Manzana_24.set('fieldLabels', { 'OBJECTID': 'inline label', 'CODIGO': 'inline label', 'AREA_M2': 'inline label', });
lyr_Sector_25.set('fieldLabels', { 'OBJECTID': 'no label', 'CODIGO': 'no label', 'USUARIO_LO': 'no label', 'FECHA_LOG': 'no label', 'GLOBALID': 'no label', 'GLOBALID_S': 'no label', 'CODIGO_MUN': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Terreno_26.set('fieldLabels', {'area_terre': 'inline label', 'avaluo_ter': 'inline label', 'manzana_ve': 'inline label', 'dimension': 'inline label', 'etiqueta': 'inline label', 'relacion_s': 'inline label', 'comienzo_v': 'inline label', 'fin_vida_u': 'inline label', 'espacio_de': 'inline label', 'local_id': 'inline label', 'npn': 'inline label', });
lyr_U_NOMENCLATRURA_VIAL_27.set('fieldLabels', { 'OBJECTID': 'no label', 'TEXTO': 'no label', });
lyr_U_NOMENCLATRURA_VIAL_27.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});
