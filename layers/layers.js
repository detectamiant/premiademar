var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
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

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_PositiusPremideMar_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_PositiusPremideMar_1];
lyr_PositiusPremideMar_1.set('fieldAliases', {'fid': 'fid', 'área': 'área', });
lyr_PositiusPremideMar_1.set('fieldImages', {'fid': 'TextEdit', 'área': 'TextEdit', });
lyr_PositiusPremideMar_1.set('fieldLabels', {'fid': 'no label', 'área': 'no label', });
lyr_PositiusPremideMar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});