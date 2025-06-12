var wms_layers = [];

var lyr_2025040500_00_2025040523_59_Sentinel2_L2A_True_color_0 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-04-05-00_00_2025-04-05-23_59_Sentinel-2_L2A_True_color<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025040500_00_2025040523_59_Sentinel2_L2A_True_color_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-4836074.445469, -1871579.746820, -4807852.985020, -1854019.747387]
        })
    });
var format_POL_EUCALIPTO_1 = new ol.format.GeoJSON();
var features_POL_EUCALIPTO_1 = format_POL_EUCALIPTO_1.readFeatures(json_POL_EUCALIPTO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POL_EUCALIPTO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POL_EUCALIPTO_1.addFeatures(features_POL_EUCALIPTO_1);
var lyr_POL_EUCALIPTO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POL_EUCALIPTO_1, 
                style: style_POL_EUCALIPTO_1,
                popuplayertitle: 'POL_EUCALIPTO',
                interactive: true,
                title: '<img src="styles/legend/POL_EUCALIPTO_1.png" /> POL_EUCALIPTO'
            });
var format_POL_TALHOES_2 = new ol.format.GeoJSON();
var features_POL_TALHOES_2 = format_POL_TALHOES_2.readFeatures(json_POL_TALHOES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POL_TALHOES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POL_TALHOES_2.addFeatures(features_POL_TALHOES_2);
var lyr_POL_TALHOES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POL_TALHOES_2, 
                style: style_POL_TALHOES_2,
                popuplayertitle: 'POL_TALHOES',
                interactive: true,
                title: '<img src="styles/legend/POL_TALHOES_2.png" /> POL_TALHOES'
            });
var format_POL_PROP_3 = new ol.format.GeoJSON();
var features_POL_PROP_3 = format_POL_PROP_3.readFeatures(json_POL_PROP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POL_PROP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POL_PROP_3.addFeatures(features_POL_PROP_3);
var lyr_POL_PROP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POL_PROP_3, 
                style: style_POL_PROP_3,
                popuplayertitle: 'POL_PROP',
                interactive: true,
                title: '<img src="styles/legend/POL_PROP_3.png" /> POL_PROP'
            });
var format_POL_VERTICES_4 = new ol.format.GeoJSON();
var features_POL_VERTICES_4 = format_POL_VERTICES_4.readFeatures(json_POL_VERTICES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POL_VERTICES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POL_VERTICES_4.addFeatures(features_POL_VERTICES_4);
var lyr_POL_VERTICES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POL_VERTICES_4, 
                style: style_POL_VERTICES_4,
                popuplayertitle: 'POL_VERTICES',
                interactive: true,
                title: '<img src="styles/legend/POL_VERTICES_4.png" /> POL_VERTICES'
            });
var format_PTO_PARCELAS_5 = new ol.format.GeoJSON();
var features_PTO_PARCELAS_5 = format_PTO_PARCELAS_5.readFeatures(json_PTO_PARCELAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTO_PARCELAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTO_PARCELAS_5.addFeatures(features_PTO_PARCELAS_5);
var lyr_PTO_PARCELAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTO_PARCELAS_5, 
                style: style_PTO_PARCELAS_5,
                popuplayertitle: 'PTO_PARCELAS',
                interactive: true,
                title: '<img src="styles/legend/PTO_PARCELAS_5.png" /> PTO_PARCELAS'
            });

lyr_2025040500_00_2025040523_59_Sentinel2_L2A_True_color_0.setVisible(true);lyr_POL_EUCALIPTO_1.setVisible(true);lyr_POL_TALHOES_2.setVisible(true);lyr_POL_PROP_3.setVisible(true);lyr_POL_VERTICES_4.setVisible(true);lyr_PTO_PARCELAS_5.setVisible(true);
var layersList = [lyr_2025040500_00_2025040523_59_Sentinel2_L2A_True_color_0,lyr_POL_EUCALIPTO_1,lyr_POL_TALHOES_2,lyr_POL_PROP_3,lyr_POL_VERTICES_4,lyr_PTO_PARCELAS_5];
lyr_POL_EUCALIPTO_1.set('fieldAliases', {'fid': 'fid', 'VEG': 'VEG', 'area': 'area', });
lyr_POL_TALHOES_2.set('fieldAliases', {'FID': 'FID', 'ID': 'ID', 'area': 'area', 'LG': 'LG', });
lyr_POL_PROP_3.set('fieldAliases', {'recibo': 'recibo', 'modfiscais': 'modfiscais', 'tema': 'tema', 'area': 'area', 'municipio': 'municipio', 'estado': 'estado', });
lyr_POL_VERTICES_4.set('fieldAliases', {'recibo': 'recibo', 'modfiscais': 'modfiscais', 'tema': 'tema', 'area': 'area', 'municipio': 'municipio', 'estado': 'estado', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'vertex_p_2': 'vertex_p_2', 'distance': 'distance', 'angle': 'angle', });
lyr_PTO_PARCELAS_5.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', });
lyr_POL_EUCALIPTO_1.set('fieldImages', {'fid': '', 'VEG': '', 'area': '', });
lyr_POL_TALHOES_2.set('fieldImages', {'FID': 'TextEdit', 'ID': 'Range', 'area': 'TextEdit', 'LG': 'TextEdit', });
lyr_POL_PROP_3.set('fieldImages', {'recibo': 'TextEdit', 'modfiscais': 'TextEdit', 'tema': 'TextEdit', 'area': 'TextEdit', 'municipio': 'TextEdit', 'estado': 'TextEdit', });
lyr_POL_VERTICES_4.set('fieldImages', {'recibo': 'TextEdit', 'modfiscais': 'TextEdit', 'tema': 'TextEdit', 'area': 'TextEdit', 'municipio': 'TextEdit', 'estado': 'TextEdit', 'vertex_ind': 'TextEdit', 'vertex_par': 'TextEdit', 'vertex_p_1': 'TextEdit', 'vertex_p_2': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_PTO_PARCELAS_5.set('fieldImages', {'id': 'TextEdit', 'X': '', 'Y': '', });
lyr_POL_EUCALIPTO_1.set('fieldLabels', {'fid': 'no label', 'VEG': 'no label', 'area': 'no label', });
lyr_POL_TALHOES_2.set('fieldLabels', {'FID': 'no label', 'ID': 'no label', 'area': 'no label', 'LG': 'no label', });
lyr_POL_PROP_3.set('fieldLabels', {'recibo': 'no label', 'modfiscais': 'no label', 'tema': 'no label', 'area': 'no label', 'municipio': 'no label', 'estado': 'no label', });
lyr_POL_VERTICES_4.set('fieldLabels', {'recibo': 'no label', 'modfiscais': 'no label', 'tema': 'no label', 'area': 'no label', 'municipio': 'no label', 'estado': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'vertex_p_2': 'no label', 'distance': 'no label', 'angle': 'no label', });
lyr_PTO_PARCELAS_5.set('fieldLabels', {'id': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_PTO_PARCELAS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});