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
    interactive: true,
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
    interactive: true,
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
    interactive: true,
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
    fold: 'close',
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

lyr_ARRIENDOLOTE_0.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_ARRIENDOLOCAL_1.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_ARRIENDOHABITACION_2.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_ARRIENDOCASA_3.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_ARRIENDOBODEGA_4.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_ARRIENDOAPTO_5.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_VENTALOTE_6.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_VENTALOCAL_7.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_VENTAHABITACION_8.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_VENTACASA_9.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_VENTABODEGA_10.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_VENTAAPTO_11.set('fieldAliases', { 'NPN': 'NPN', 'TIPO_CONST': 'Tipo&nbspde&nbspConstrucción', 'NUMERO_PIS': 'Numero&nbspde&nbspPisos', 'NUMERO_SOT': 'Numero&nbspde&nbspSotanos', 'TIPO_DOMIN': 'Tipo&nbspde&nbspDomicilio', 'NUMERO_MEZ': 'NUMERO_MEZ', 'NUMERO_SEM': 'NUMERO_SEM', 'COOR_X_F': 'Coordenada&nbspX', 'COOR_Y_F': 'Coordenada&nbspY', 'RASTERVALU': 'Rastervalu', 'NUM_OFERTA': 'Numero&nbspde&nbspOferta', 'BARRIO': 'Barrio', 'TELEFONO_F': 'Telefono', 'VALOR_F': 'Valor', 'PORCENTAJE': '%', 'VALOR_DEPU': 'Valor&nbspDepurado', 'FECHA_F': 'Fecha&nbspde&nbspOferta', 'NUMERO_D_1': 'Numero&nbspde&nbspHabitaciones', 'NUMERO_D_2': 'Numero&nbspde&nbspBaños', 'TIPO_DE_CO': 'Tipo&nbspde&nbspCocina',  'EDAD_DEL_L': 'Edad&nbspdel&nbspInmueble', 'SERVICIOS_': 'Servicio&nbspde&nbspAgua', 'SERVICIO_1': 'Servicio&nbspde&nbspLuz', 'SERVICIO_2': 'Servicio&nbspde&nbspGas',  'CASA_CANTI': 'Numero&nbspde&nbspPisos', 'CASA_CAN_1': 'Numero&nbspde&nbspPatios', 'APTO_CANTI': 'Piso&nbspdel&nbspApartamento', 'APTO_NUMER': 'Numero&nbspde&nbspApartamento', 'APTO_TIENE': 'Tiene&nbspAscensor?', 'GARAJE_TIP': 'Garaje&nbspCaracteristica&nbsp1', 'GARAJE_T_1': 'Garaje&nbspCaracteristica&nbsp2', 'CANTIDAD_D': 'Numero&nbspde&nbspDepositos', 'TIPO_DE_IN': 'Tipo&nbspde&nbspInmueble', 'TIPO_DE_OF': 'Tipo&nbspde&nbspOferta', 'FUENTE_INF': 'Fuente&nbspde&nbspInformación', 'GARAJE_CAN': 'Numero&nbspde&nbspGarajes', 'DIRECCION': 'Dirección', 'AT_M2': 'Área&nbspde&nbspTerreno&nbspm²', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12.set('fieldAliases', {'OBJECTID': 'Identificador', 'FUENTE_DE_': 'Fuente&nbspde&nbspInformación', 'NOMBRE_DEL': 'Barrio', 'TELEFONO': 'Telefono', 'VALOR': 'Valor', 'FECHA_DE_L': 'Fecha', 'AREA': 'Área&nbspm²', 'TIPO_INMUE': 'Tipo&nbspde&nbspInmueble', 'LINK_DE_LA': 'Link&nbspde&nbspla&nbspPublicación', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13.set('fieldAliases', {'OBJECTID': 'Identificador', 'FUENTE_DE_': 'Fuente&nbspde&nbspInformación', 'NOMBRE_DEL': 'Barrio', 'TELEFONO': 'Telefono', 'VALOR': 'Valor', 'FECHA_DE_L': 'Fecha', 'AREA': 'Área&nbspm²', 'TIPO_INMUE': 'Tipo&nbspde&nbspInmueble', 'LINK_DE_LA': 'Link&nbspde&nbspla&nbspPublicación', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14.set('fieldAliases', {'OBJECTID': 'Identificador', 'FUENTE_DE_': 'Fuente&nbspde&nbspInformación', 'NOMBRE_DEL': 'Barrio', 'TELEFONO': 'Telefono', 'VALOR': 'Valor', 'FECHA_DE_L': 'Fecha', 'AREA': 'Área&nbspm²', 'TIPO_INMUE': 'Tipo&nbspde&nbspInmueble', 'LINK_DE_LA': 'Link&nbspde&nbspla&nbspPublicación', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15.set('fieldAliases', {'OBJECTID': 'Identificador', 'FUENTE_DE_': 'Fuente&nbspde&nbspInformación', 'NOMBRE_DEL': 'Barrio', 'TELEFONO': 'Telefono', 'VALOR': 'Valor', 'FECHA_DE_L': 'Fecha', 'AREA': 'Área&nbspm²', 'TIPO_INMUE': 'Tipo&nbspde&nbspInmueble', 'LINK_DE_LA': 'Link&nbspde&nbspla&nbspPublicación', });
lyr_Perimetro_23.set('fieldAliases', { 'NOMBRE_GEO': 'Nombre', 'AREA_Ha': 'Área Ha', 'AREA_m²': 'Área m²', });
lyr_Manzana_24.set('fieldAliases', { 'OBJECTID': 'Identificador', 'CODIGO': 'Codigo', 'AREA_M2': 'Área m²', });
lyr_Sector_25.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'USUARIO_LO': 'USUARIO_LO', 'FECHA_LOG': 'FECHA_LOG', 'GLOBALID': 'GLOBALID', 'GLOBALID_S': 'GLOBALID_S', 'CODIGO_MUN': 'CODIGO_MUN', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Terreno_26.set('fieldAliases', { 'NPN': 'NPN', 'AREA_M2': 'Área&nbspm²', });
lyr_U_NOMENCLATRURA_VIAL_27.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'TEXTO': 'TEXTO', });

lyr_ARRIENDOLOTE_0.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_ARRIENDOLOCAL_1.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_ARRIENDOHABITACION_2.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_ARRIENDOCASA_3.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_ARRIENDOBODEGA_4.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_ARRIENDOAPTO_5.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_VENTALOTE_6.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_VENTALOCAL_7.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_VENTAHABITACION_8.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_VENTACASA_9.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_VENTABODEGA_10.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_VENTAAPTO_11.set('fieldImages', { 'NPN': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'NUMERO_PIS': 'Range', 'NUMERO_SOT': 'Range', 'TIPO_DOMIN': 'TextEdit', 'NUMERO_MEZ': 'Range', 'NUMERO_SEM': 'Range', 'COOR_X_F': 'TextEdit', 'COOR_Y_F': 'TextEdit', 'RASTERVALU': 'TextEdit', 'NUM_OFERTA': 'Range', 'BARRIO': 'TextEdit', 'TELEFONO_F': 'TextEdit', 'VALOR_F': 'Range', 'PORCENTAJE': 'TextEdit', 'VALOR_DEPU': 'Range', 'FECHA_F': 'TextEdit', 'NUMERO_D_1': 'Range', 'NUMERO_D_2': 'Range', 'TIPO_DE_CO': 'TextEdit', 'EDAD_DEL_L': 'Range', 'SERVICIOS_': 'TextEdit', 'SERVICIO_1': 'TextEdit', 'SERVICIO_2': 'TextEdit', 'CASA_CANTI': 'Range', 'CASA_CAN_1': 'Range', 'APTO_CANTI': 'TextEdit', 'APTO_NUMER': 'TextEdit', 'APTO_TIENE': 'TextEdit', 'GARAJE_TIP': 'TextEdit', 'GARAJE_T_1': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'TIPO_DE_IN': 'TextEdit', 'TIPO_DE_OF': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'GARAJE_CAN': 'TextEdit', 'DIRECCION': 'TextEdit', 'AT_M2': 'Range', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12.set('fieldImages', { 'OBJECTID': 'Range', 'FUENTE_DE_': 'TextEdit', 'NOMBRE_DEL': 'TextEdit', 'TELEFONO': 'TextEdit', 'VALOR': 'Range', 'FECHA_DE_L': 'DateTime', 'AREA': 'TextEdit', 'TIPO_INMUE': 'TextEdit', 'LINK_DE_LA': 'TextEdit', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13.set('fieldImages', { 'OBJECTID': 'Range', 'FUENTE_DE_': 'TextEdit', 'NOMBRE_DEL': 'TextEdit', 'TELEFONO': 'TextEdit', 'VALOR': 'Range', 'FECHA_DE_L': 'DateTime', 'AREA': 'TextEdit', 'TIPO_INMUE': 'TextEdit', 'LINK_DE_LA': 'TextEdit', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14.set('fieldImages', { 'OBJECTID': 'Range', 'FUENTE_DE_': 'TextEdit', 'NOMBRE_DEL': 'TextEdit', 'TELEFONO': 'TextEdit', 'VALOR': 'Range', 'FECHA_DE_L': 'DateTime', 'AREA': 'TextEdit', 'TIPO_INMUE': 'TextEdit', 'LINK_DE_LA': 'TextEdit', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15.set('fieldImages', { 'OBJECTID': 'Range', 'FUENTE_DE_': 'TextEdit', 'NOMBRE_DEL': 'TextEdit', 'TELEFONO': 'TextEdit', 'VALOR': 'Range', 'FECHA_DE_L': 'DateTime', 'AREA': 'TextEdit', 'TIPO_INMUE': 'TextEdit', 'LINK_DE_LA': 'TextEdit', });
lyr_Perimetro_23.set('fieldImages', { 'NOMBRE_GEO': 'TextEdit', 'AREA_Ha': 'TextEdit', 'AREA_m²': 'TextEdit', });
lyr_Manzana_24.set('fieldImages', { 'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'AREA_M2': 'TextEdit', });
lyr_Sector_25.set('fieldImages', { 'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'USUARIO_LO': 'TextEdit', 'FECHA_LOG': 'DateTime', 'GLOBALID': 'TextEdit', 'GLOBALID_S': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Terreno_26.set('fieldImages', { 'NPN': '', 'AREA_M2': '', });
lyr_U_NOMENCLATRURA_VIAL_27.set('fieldImages', { 'OBJECTID': 'TextEdit', 'TEXTO': 'TextEdit', });

lyr_ARRIENDOLOTE_0.set('fieldLabels', {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_ARRIENDOLOCAL_1.set('fieldLabels',  {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_ARRIENDOHABITACION_2.set('fieldLabels',  {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_ARRIENDOCASA_3.set('fieldLabels', {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_ARRIENDOBODEGA_4.set('fieldLabels',  {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_ARRIENDOAPTO_5.set('fieldLabels',  {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_VENTALOTE_6.set('fieldLabels',  {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_VENTALOCAL_7.set('fieldLabels',  {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_VENTAHABITACION_8.set('fieldLabels',  {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_VENTACASA_9.set('fieldLabels',  {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_VENTABODEGA_10.set('fieldLabels',  {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_VENTAAPTO_11.set('fieldLabels',  {'NPN': 'inline label', 'TIPO_CONST': 'inline label', 'NUMERO_PIS': 'inline label', 'NUMERO_SOT': 'inline label', 'TIPO_DOMIN': 'inline label', 'NUMERO_MEZ': 'inline label', 'NUMERO_SEM': 'inline label', 'COOR_X_F': 'inline label', 'COOR_Y_F': 'inline label', 'RASTERVALU': 'inline label', 'NUM_OFERTA': 'inline label', 'BARRIO': 'inline label', 'TELEFONO_F': 'inline label', 'VALOR_F': 'inline label', 'PORCENTAJE': 'inline label', 'VALOR_DEPU': 'inline label', 'FECHA_F': 'inline label', 'NUMERO_D_1': 'inline label', 'NUMERO_D_2': 'inline label', 'TIPO_DE_CO': 'inline label', 'EDAD_DEL_L': 'inline label', 'SERVICIOS_': 'inline label', 'SERVICIO_1': 'inline label', 'SERVICIO_2': 'inline label', 'CASA_CANTI': 'inline label', 'CASA_CAN_1': 'inline label', 'APTO_CANTI': 'inline label', 'APTO_NUMER': 'inline label', 'APTO_TIENE': 'inline label', 'GARAJE_TIP': 'inline label', 'GARAJE_T_1': 'inline label', 'CANTIDAD_D': 'inline label', 'TIPO_DE_IN': 'inline label', 'TIPO_DE_OF': 'inline label', 'FUENTE_INF': 'inline label', 'GARAJE_CAN': 'inline label', 'DIRECCION': 'inline label', 'AT_M2': 'inline label', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_LOTE_12.set('fieldLabels', {'OBJECTID': 'inline label', 'FUENTE_DE_': 'inline label', 'NOMBRE_DEL': 'inline label', 'TELEFONO': 'inline label', 'VALOR': 'inline label', 'FECHA_DE_L': 'inline label', 'AREA': 'inline label', 'TIPO_INMUE': 'inline label', 'LINK_DE_LA': 'inline label', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CONDOMINIO_13.set('fieldLabels', {'OBJECTID': 'inline label', 'FUENTE_DE_': 'inline label', 'NOMBRE_DEL': 'inline label', 'TELEFONO': 'inline label', 'VALOR': 'inline label', 'FECHA_DE_L': 'inline label', 'AREA': 'inline label', 'TIPO_INMUE': 'inline label', 'LINK_DE_LA': 'inline label', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_CASA_14.set('fieldLabels', {'OBJECTID': 'inline label', 'FUENTE_DE_': 'inline label', 'NOMBRE_DEL': 'inline label', 'TELEFONO': 'inline label', 'VALOR': 'inline label', 'FECHA_DE_L': 'inline label', 'AREA': 'inline label', 'TIPO_INMUE': 'inline label', 'LINK_DE_LA': 'inline label', });
lyr_PUNTOS_DE_INTERES_URBANIZACIONES_APARTAMENTO_15.set('fieldLabels', {'OBJECTID': 'inline label', 'FUENTE_DE_': 'inline label', 'NOMBRE_DEL': 'inline label', 'TELEFONO': 'inline label', 'VALOR': 'inline label', 'FECHA_DE_L': 'inline label', 'AREA': 'inline label', 'TIPO_INMUE': 'inline label', 'LINK_DE_LA': 'inline label', });
lyr_Perimetro_23.set('fieldLabels', { 'NOMBRE_GEO': 'inline label', 'AREA_Ha': 'inline label', 'AREA_m²': 'inline label', });
lyr_Manzana_24.set('fieldLabels', { 'OBJECTID': 'inline label', 'CODIGO': 'inline label', 'AREA_M2': 'inline label', });
lyr_Sector_25.set('fieldLabels', { 'OBJECTID': 'no label', 'CODIGO': 'no label', 'USUARIO_LO': 'no label', 'FECHA_LOG': 'no label', 'GLOBALID': 'no label', 'GLOBALID_S': 'no label', 'CODIGO_MUN': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Terreno_26.set('fieldLabels', { 'NPN': 'inline label', 'AREA_M2': 'inline label', });
lyr_U_NOMENCLATRURA_VIAL_27.set('fieldLabels', { 'OBJECTID': 'no label', 'TEXTO': 'no label', });
lyr_U_NOMENCLATRURA_VIAL_27.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});