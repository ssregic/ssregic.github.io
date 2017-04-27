baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'CartoDB dark',
    source: new ol.source.XYZ({
        url: 'http://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({
            html: ['&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>']
        })]
    })
})];
var baseLayersGroup = new ol.layer.Group({
    'type': 'base',
    'title': 'Base maps',
    layers: baseLayers
});
var lyr_parcelas = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_parcelas)
    }),

    style: style_parcelas,
    title: "Parcelas",
    filters: [],
    timeInfo: null,
    isSelectable: true
});
var lyr_contornodeedificacion = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_contornodeedificacion)
    }),

    style: style_contornodeedificacion,
    title: "Contorno de Edificacion",
    filters: [],
    timeInfo: null,
    isSelectable: true
});

lyr_parcelas.setVisible(true);
lyr_contornodeedificacion.setVisible(true);
var layersList = [lyr_parcelas, lyr_contornodeedificacion];
layersList.unshift(baseLayersGroup);