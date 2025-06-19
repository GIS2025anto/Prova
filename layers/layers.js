var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Perimetro_1 = new ol.format.GeoJSON();
var features_Perimetro_1 = format_Perimetro_1.readFeatures(json_Perimetro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetro_1.addFeatures(features_Perimetro_1);
var lyr_Perimetro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetro_1, 
                style: style_Perimetro_1,
                popuplayertitle: 'Perimetro',
                interactive: true,
                title: '<img src="styles/legend/Perimetro_1.png" /> Perimetro'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Perimetro_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Perimetro_1];
lyr_Perimetro_1.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Foto': 'Foto', });
lyr_Perimetro_1.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Perimetro_1.set('fieldLabels', {'id': 'header label - visible with data', 'Nome': 'header label - visible with data', 'Foto': 'no label', });
lyr_Perimetro_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});