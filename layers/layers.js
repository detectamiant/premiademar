var wms_layers = [];

var lyr_STOrtofotocolor2020_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2020]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2020_0, 0]);
var format_PositiusPremideMar_1 = new ol.format.GeoJSON();
var features_PositiusPremideMar_1 = format_PositiusPremideMar_1.readFeatures(json_PositiusPremideMar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusPremideMar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusPremideMar_1.addFeatures(features_PositiusPremideMar_1);
var lyr_PositiusPremideMar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusPremideMar_1, 
                style: style_PositiusPremideMar_1,
                interactive: true,
                title: '<img src="styles/legend/PositiusPremideMar_1.png" /> Positius Premià de Mar'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2020_0,],
                                title: "Mapas de fondo"});

lyr_STOrtofotocolor2020_0.setVisible(true);lyr_PositiusPremideMar_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_PositiusPremideMar_1];
lyr_PositiusPremideMar_1.set('fieldAliases', {'fid': 'fid', 'área': 'área', });
lyr_PositiusPremideMar_1.set('fieldImages', {'fid': 'TextEdit', 'área': 'TextEdit', });
lyr_PositiusPremideMar_1.set('fieldLabels', {'fid': 'no label', 'área': 'no label', });
lyr_PositiusPremideMar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});