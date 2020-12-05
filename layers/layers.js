var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_core_members_coords_extra_1 = new ol.format.GeoJSON();
var features_core_members_coords_extra_1 = format_core_members_coords_extra_1.readFeatures(json_core_members_coords_extra_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_core_members_coords_extra_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_core_members_coords_extra_1.addFeatures(features_core_members_coords_extra_1);
var lyr_core_members_coords_extra_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_core_members_coords_extra_1, 
                style: style_core_members_coords_extra_1,
                interactive: true,
                title: '<img src="styles/legend/core_members_coords_extra_1.png" /> core_members_coords_extra'
            });

lyr_OSMStandard_0.setVisible(true);lyr_core_members_coords_extra_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_core_members_coords_extra_1];
lyr_core_members_coords_extra_1.set('fieldAliases', {'field_1': 'field_1', 'Member ID': 'Member ID', 'Name': 'Name', 'Email': 'Email', 'IP': 'IP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_core_members_coords_extra_1.set('fieldImages', {'field_1': 'TextEdit', 'Member ID': 'TextEdit', 'Name': 'TextEdit', 'Email': 'TextEdit', 'IP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_core_members_coords_extra_1.set('fieldLabels', {'field_1': 'inline label', 'Member ID': 'inline label', 'Name': 'inline label', 'Email': 'inline label', 'IP': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_core_members_coords_extra_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});