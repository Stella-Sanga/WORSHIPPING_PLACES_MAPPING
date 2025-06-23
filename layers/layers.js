ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32736").setExtent([1092864.167723, 9187608.543382, 1337730.983682, 9340902.801219]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Buddhist_Worship_Places_1 = new ol.format.GeoJSON();
var features_Buddhist_Worship_Places_1 = format_Buddhist_Worship_Places_1.readFeatures(json_Buddhist_Worship_Places_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Buddhist_Worship_Places_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buddhist_Worship_Places_1.addFeatures(features_Buddhist_Worship_Places_1);
var lyr_Buddhist_Worship_Places_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buddhist_Worship_Places_1, 
                style: style_Buddhist_Worship_Places_1,
                popuplayertitle: 'Buddhist_Worship_Places',
                interactive: true,
                title: '<img src="styles/legend/Buddhist_Worship_Places_1.png" /> Buddhist_Worship_Places'
            });
var format_Christian_Worship_Places_2 = new ol.format.GeoJSON();
var features_Christian_Worship_Places_2 = format_Christian_Worship_Places_2.readFeatures(json_Christian_Worship_Places_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Christian_Worship_Places_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Christian_Worship_Places_2.addFeatures(features_Christian_Worship_Places_2);
var lyr_Christian_Worship_Places_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Christian_Worship_Places_2, 
                style: style_Christian_Worship_Places_2,
                popuplayertitle: 'Christian_Worship_Places',
                interactive: true,
                title: '<img src="styles/legend/Christian_Worship_Places_2.png" /> Christian_Worship_Places'
            });
var format_DSM_REGION_3 = new ol.format.GeoJSON();
var features_DSM_REGION_3 = format_DSM_REGION_3.readFeatures(json_DSM_REGION_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_DSM_REGION_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSM_REGION_3.addFeatures(features_DSM_REGION_3);
var lyr_DSM_REGION_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSM_REGION_3, 
                style: style_DSM_REGION_3,
                popuplayertitle: 'DSM_REGION',
                interactive: true,
                title: '<img src="styles/legend/DSM_REGION_3.png" /> DSM_REGION'
            });
var format_Hindu_Worship_Places_4 = new ol.format.GeoJSON();
var features_Hindu_Worship_Places_4 = format_Hindu_Worship_Places_4.readFeatures(json_Hindu_Worship_Places_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Hindu_Worship_Places_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hindu_Worship_Places_4.addFeatures(features_Hindu_Worship_Places_4);
var lyr_Hindu_Worship_Places_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hindu_Worship_Places_4, 
                style: style_Hindu_Worship_Places_4,
                popuplayertitle: 'Hindu_Worship_Places',
                interactive: true,
                title: '<img src="styles/legend/Hindu_Worship_Places_4.png" /> Hindu_Worship_Places'
            });
var format_Mosques_5 = new ol.format.GeoJSON();
var features_Mosques_5 = format_Mosques_5.readFeatures(json_Mosques_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Mosques_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosques_5.addFeatures(features_Mosques_5);
var lyr_Mosques_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosques_5, 
                style: style_Mosques_5,
                popuplayertitle: 'Mosques',
                interactive: true,
                title: '<img src="styles/legend/Mosques_5.png" /> Mosques'
            });
var format_Mosques_Buffer_6 = new ol.format.GeoJSON();
var features_Mosques_Buffer_6 = format_Mosques_Buffer_6.readFeatures(json_Mosques_Buffer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Mosques_Buffer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosques_Buffer_6.addFeatures(features_Mosques_Buffer_6);
var lyr_Mosques_Buffer_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosques_Buffer_6, 
                style: style_Mosques_Buffer_6,
                popuplayertitle: 'Mosques_Buffer',
                interactive: true,
                title: '<img src="styles/legend/Mosques_Buffer_6.png" /> Mosques_Buffer'
            });
var format_Hindu_Buffer_7 = new ol.format.GeoJSON();
var features_Hindu_Buffer_7 = format_Hindu_Buffer_7.readFeatures(json_Hindu_Buffer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Hindu_Buffer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hindu_Buffer_7.addFeatures(features_Hindu_Buffer_7);
var lyr_Hindu_Buffer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hindu_Buffer_7, 
                style: style_Hindu_Buffer_7,
                popuplayertitle: 'Hindu_Buffer',
                interactive: true,
                title: '<img src="styles/legend/Hindu_Buffer_7.png" /> Hindu_Buffer'
            });
var format_Buddhist_Buffer_8 = new ol.format.GeoJSON();
var features_Buddhist_Buffer_8 = format_Buddhist_Buffer_8.readFeatures(json_Buddhist_Buffer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Buddhist_Buffer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buddhist_Buffer_8.addFeatures(features_Buddhist_Buffer_8);
var lyr_Buddhist_Buffer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buddhist_Buffer_8, 
                style: style_Buddhist_Buffer_8,
                popuplayertitle: 'Buddhist_Buffer',
                interactive: true,
                title: '<img src="styles/legend/Buddhist_Buffer_8.png" /> Buddhist_Buffer'
            });
var format_Christian_Buffer_9 = new ol.format.GeoJSON();
var features_Christian_Buffer_9 = format_Christian_Buffer_9.readFeatures(json_Christian_Buffer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Christian_Buffer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Christian_Buffer_9.addFeatures(features_Christian_Buffer_9);
var lyr_Christian_Buffer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Christian_Buffer_9, 
                style: style_Christian_Buffer_9,
                popuplayertitle: 'Christian_Buffer',
                interactive: true,
                title: '<img src="styles/legend/Christian_Buffer_9.png" /> Christian_Buffer'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Buddhist_Worship_Places_1.setVisible(true);lyr_Christian_Worship_Places_2.setVisible(true);lyr_DSM_REGION_3.setVisible(true);lyr_Hindu_Worship_Places_4.setVisible(true);lyr_Mosques_5.setVisible(true);lyr_Mosques_Buffer_6.setVisible(true);lyr_Hindu_Buffer_7.setVisible(true);lyr_Buddhist_Buffer_8.setVisible(true);lyr_Christian_Buffer_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Buddhist_Worship_Places_1,lyr_Christian_Worship_Places_2,lyr_DSM_REGION_3,lyr_Hindu_Worship_Places_4,lyr_Mosques_5,lyr_Mosques_Buffer_6,lyr_Hindu_Buffer_7,lyr_Buddhist_Buffer_8,lyr_Christian_Buffer_9];
lyr_Buddhist_Worship_Places_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'service_ti': 'service_ti', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_distr': 'addr_distr', 'name': 'name', 'amenity': 'amenity', 'addr_munic': 'addr_munic', 'addr_city': 'addr_city', });
lyr_Christian_Worship_Places_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'natural': 'natural', 'operator_w': 'operator_w', 'author': 'author', 'shop': 'shop', 'grades': 'grades', 'Assets_Thr': 'Assets_Thr', 'power': 'power', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'payment__1': 'payment__1', 'is_in_ward': 'is_in_ward', 'is_in_subw': 'is_in_subw', 'Ward': 'Ward', 'building_r': 'building_r', 'building_c': 'building_c', 'descriptio': 'descriptio', 'baby_feedi': 'baby_feedi', 'addr_ward': 'addr_ward', 'operator': 'operator', 'internet_a': 'internet_a', 'building': 'building', 'addr_subwa': 'addr_subwa', 'addr_house': 'addr_house', 'building_l': 'building_l', 'service_ti': 'service_ti', 'operator_t': 'operator_t', 'fee': 'fee', 'polling_st': 'polling_st', 'air_condit': 'air_condit', 'wheelchair': 'wheelchair', 'target': 'target', 'short_name': 'short_name', 'phone': 'phone', 'office': 'office', 'embassy': 'embassy', 'country': 'country', 'website': 'website', 'opening_ho': 'opening_ho', 'name_sw': 'name_sw', 'name_en': 'name_en', 'email': 'email', 'tourism': 'tourism', 'denominati': 'denominati', 'check_date': 'check_date', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'name': 'name', 'amenity': 'amenity', 'addr_munic': 'addr_munic', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', });
lyr_DSM_REGION_3.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Hindu_Worship_Places_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'wheelchair': 'wheelchair', 'operator_t': 'operator_t', 'opening_ho': 'opening_ho', 'internet_a': 'internet_a', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'emergency': 'emergency', 'check_date': 'check_date', 'name': 'name', 'building_s': 'building_s', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'descriptio': 'descriptio', 'building_r': 'building_r', 'building_m': 'building_m', 'building_l': 'building_l', 'building_c': 'building_c', 'building': 'building', 'addr_ward': 'addr_ward', 'addr_subwa': 'addr_subwa', 'addr_stree': 'addr_stree', 'addr_munic': 'addr_munic', 'addr_house': 'addr_house', 'addr_city': 'addr_city', });
lyr_Mosques_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'constructi': 'constructi', 'building': 'building', 'phone': 'phone', 'descriptio': 'descriptio', 'Assets_Thr': 'Assets_Thr', 'wheelchair': 'wheelchair', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'payment__1': 'payment__1', 'website': 'website', 'Ward': 'Ward', 'building_s': 'building_s', 'building_r': 'building_r', 'building_m': 'building_m', 'building_c': 'building_c', 'natural': 'natural', 'public_wat': 'public_wat', 'name_sw': 'name_sw', 'addr_house': 'addr_house', 'operator': 'operator', 'internet_a': 'internet_a', 'check_date': 'check_date', 'highway': 'highway', 'crossing': 'crossing', 'building_a': 'building_a', 'service_ti': 'service_ti', 'capacity': 'capacity', 'operator_t': 'operator_t', 'fee': 'fee', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'vehicle': 'vehicle', 'locked': 'locked', 'barrier': 'barrier', 'addr_subwa': 'addr_subwa', 'addr_ward': 'addr_ward', 'denominati': 'denominati', 'opening_ho': 'opening_ho', 'name': 'name', 'amenity': 'amenity', 'addr_munic': 'addr_munic', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', });
lyr_Mosques_Buffer_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'constructi': 'constructi', 'building': 'building', 'phone': 'phone', 'descriptio': 'descriptio', 'Assets_Thr': 'Assets_Thr', 'wheelchair': 'wheelchair', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'payment__1': 'payment__1', 'website': 'website', 'Ward': 'Ward', 'building_s': 'building_s', 'building_r': 'building_r', 'building_m': 'building_m', 'building_c': 'building_c', 'natural': 'natural', 'public_wat': 'public_wat', 'name_sw': 'name_sw', 'addr_house': 'addr_house', 'operator': 'operator', 'internet_a': 'internet_a', 'check_date': 'check_date', 'highway': 'highway', 'crossing': 'crossing', 'building_a': 'building_a', 'service_ti': 'service_ti', 'capacity': 'capacity', 'operator_t': 'operator_t', 'fee': 'fee', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'vehicle': 'vehicle', 'locked': 'locked', 'barrier': 'barrier', 'addr_subwa': 'addr_subwa', 'addr_ward': 'addr_ward', 'denominati': 'denominati', 'opening_ho': 'opening_ho', 'name': 'name', 'amenity': 'amenity', 'addr_munic': 'addr_munic', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', });
lyr_Hindu_Buffer_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'wheelchair': 'wheelchair', 'operator_t': 'operator_t', 'opening_ho': 'opening_ho', 'internet_a': 'internet_a', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'emergency': 'emergency', 'check_date': 'check_date', 'name': 'name', 'building_s': 'building_s', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'descriptio': 'descriptio', 'building_r': 'building_r', 'building_m': 'building_m', 'building_l': 'building_l', 'building_c': 'building_c', 'building': 'building', 'addr_ward': 'addr_ward', 'addr_subwa': 'addr_subwa', 'addr_stree': 'addr_stree', 'addr_munic': 'addr_munic', 'addr_house': 'addr_house', 'addr_city': 'addr_city', });
lyr_Buddhist_Buffer_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'service_ti': 'service_ti', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_distr': 'addr_distr', 'name': 'name', 'amenity': 'amenity', 'addr_munic': 'addr_munic', 'addr_city': 'addr_city', });
lyr_Christian_Buffer_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'natural': 'natural', 'operator_w': 'operator_w', 'author': 'author', 'shop': 'shop', 'grades': 'grades', 'Assets_Thr': 'Assets_Thr', 'power': 'power', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'payment__1': 'payment__1', 'is_in_ward': 'is_in_ward', 'is_in_subw': 'is_in_subw', 'Ward': 'Ward', 'building_r': 'building_r', 'building_c': 'building_c', 'descriptio': 'descriptio', 'baby_feedi': 'baby_feedi', 'addr_ward': 'addr_ward', 'operator': 'operator', 'internet_a': 'internet_a', 'building': 'building', 'addr_subwa': 'addr_subwa', 'addr_house': 'addr_house', 'building_l': 'building_l', 'service_ti': 'service_ti', 'operator_t': 'operator_t', 'fee': 'fee', 'polling_st': 'polling_st', 'air_condit': 'air_condit', 'wheelchair': 'wheelchair', 'target': 'target', 'short_name': 'short_name', 'phone': 'phone', 'office': 'office', 'embassy': 'embassy', 'country': 'country', 'website': 'website', 'opening_ho': 'opening_ho', 'name_sw': 'name_sw', 'name_en': 'name_en', 'email': 'email', 'tourism': 'tourism', 'denominati': 'denominati', 'check_date': 'check_date', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'name': 'name', 'amenity': 'amenity', 'addr_munic': 'addr_munic', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', });
lyr_Buddhist_Worship_Places_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'religion': '', 'service_ti': '', 'denominati': '', 'addr_stree': '', 'addr_distr': '', 'name': '', 'amenity': '', 'addr_munic': '', 'addr_city': '', });
lyr_Christian_Worship_Places_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'religion': '', 'motor_vehi': '', 'horse': '', 'foot': '', 'bicycle': '', 'barrier': '', 'natural': '', 'operator_w': '', 'author': '', 'shop': '', 'grades': '', 'Assets_Thr': '', 'power': '', 'payment_de': '', 'payment_cr': '', 'payment_ca': '', 'payment__1': '', 'is_in_ward': '', 'is_in_subw': '', 'Ward': '', 'building_r': '', 'building_c': '', 'descriptio': '', 'baby_feedi': '', 'addr_ward': '', 'operator': '', 'internet_a': '', 'building': '', 'addr_subwa': '', 'addr_house': '', 'building_l': '', 'service_ti': '', 'operator_t': '', 'fee': '', 'polling_st': '', 'air_condit': '', 'wheelchair': '', 'target': '', 'short_name': '', 'phone': '', 'office': '', 'embassy': '', 'country': '', 'website': '', 'opening_ho': '', 'name_sw': '', 'name_en': '', 'email': '', 'tourism': '', 'denominati': '', 'check_date': '', 'addr_stree': '', 'addr_postc': '', 'name': '', 'amenity': '', 'addr_munic': '', 'addr_distr': '', 'addr_city': '', });
lyr_DSM_REGION_3.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Hindu_Worship_Places_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'religion': '', 'wheelchair': '', 'operator_t': '', 'opening_ho': '', 'internet_a': '', 'healthcare': '', 'healthca_1': '', 'emergency': '', 'check_date': '', 'name': '', 'building_s': '', 'amenity': '', 'addr_distr': '', 'descriptio': '', 'building_r': '', 'building_m': '', 'building_l': '', 'building_c': '', 'building': '', 'addr_ward': '', 'addr_subwa': '', 'addr_stree': '', 'addr_munic': '', 'addr_house': '', 'addr_city': '', });
lyr_Mosques_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'religion': '', 'constructi': '', 'building': '', 'phone': '', 'descriptio': '', 'Assets_Thr': '', 'wheelchair': '', 'payment_de': '', 'payment_cr': '', 'payment_ca': '', 'payment__1': '', 'website': '', 'Ward': '', 'building_s': '', 'building_r': '', 'building_m': '', 'building_c': '', 'natural': '', 'public_wat': '', 'name_sw': '', 'addr_house': '', 'operator': '', 'internet_a': '', 'check_date': '', 'highway': '', 'crossing': '', 'building_a': '', 'service_ti': '', 'capacity': '', 'operator_t': '', 'fee': '', 'name_en': '', 'addr_stree': '', 'vehicle': '', 'locked': '', 'barrier': '', 'addr_subwa': '', 'addr_ward': '', 'denominati': '', 'opening_ho': '', 'name': '', 'amenity': '', 'addr_munic': '', 'addr_distr': '', 'addr_city': '', });
lyr_Mosques_Buffer_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'religion': '', 'constructi': '', 'building': '', 'phone': '', 'descriptio': '', 'Assets_Thr': '', 'wheelchair': '', 'payment_de': '', 'payment_cr': '', 'payment_ca': '', 'payment__1': '', 'website': '', 'Ward': '', 'building_s': '', 'building_r': '', 'building_m': '', 'building_c': '', 'natural': '', 'public_wat': '', 'name_sw': '', 'addr_house': '', 'operator': '', 'internet_a': '', 'check_date': '', 'highway': '', 'crossing': '', 'building_a': '', 'service_ti': '', 'capacity': '', 'operator_t': '', 'fee': '', 'name_en': '', 'addr_stree': '', 'vehicle': '', 'locked': '', 'barrier': '', 'addr_subwa': '', 'addr_ward': '', 'denominati': '', 'opening_ho': '', 'name': '', 'amenity': '', 'addr_munic': '', 'addr_distr': '', 'addr_city': '', });
lyr_Hindu_Buffer_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'religion': '', 'wheelchair': '', 'operator_t': '', 'opening_ho': '', 'internet_a': '', 'healthcare': '', 'healthca_1': '', 'emergency': '', 'check_date': '', 'name': '', 'building_s': '', 'amenity': '', 'addr_distr': '', 'descriptio': '', 'building_r': '', 'building_m': '', 'building_l': '', 'building_c': '', 'building': '', 'addr_ward': '', 'addr_subwa': '', 'addr_stree': '', 'addr_munic': '', 'addr_house': '', 'addr_city': '', });
lyr_Buddhist_Buffer_8.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'religion': '', 'service_ti': '', 'denominati': '', 'addr_stree': '', 'addr_distr': '', 'name': '', 'amenity': '', 'addr_munic': '', 'addr_city': '', });
lyr_Christian_Buffer_9.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'religion': '', 'motor_vehi': '', 'horse': '', 'foot': '', 'bicycle': '', 'barrier': '', 'natural': '', 'operator_w': '', 'author': '', 'shop': '', 'grades': '', 'Assets_Thr': '', 'power': '', 'payment_de': '', 'payment_cr': '', 'payment_ca': '', 'payment__1': '', 'is_in_ward': '', 'is_in_subw': '', 'Ward': '', 'building_r': '', 'building_c': '', 'descriptio': '', 'baby_feedi': '', 'addr_ward': '', 'operator': '', 'internet_a': '', 'building': '', 'addr_subwa': '', 'addr_house': '', 'building_l': '', 'service_ti': '', 'operator_t': '', 'fee': '', 'polling_st': '', 'air_condit': '', 'wheelchair': '', 'target': '', 'short_name': '', 'phone': '', 'office': '', 'embassy': '', 'country': '', 'website': '', 'opening_ho': '', 'name_sw': '', 'name_en': '', 'email': '', 'tourism': '', 'denominati': '', 'check_date': '', 'addr_stree': '', 'addr_postc': '', 'name': '', 'amenity': '', 'addr_munic': '', 'addr_distr': '', 'addr_city': '', });
lyr_Buddhist_Worship_Places_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'religion': 'no label', 'service_ti': 'no label', 'denominati': 'no label', 'addr_stree': 'no label', 'addr_distr': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr_munic': 'no label', 'addr_city': 'no label', });
lyr_Christian_Worship_Places_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'religion': 'no label', 'motor_vehi': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'natural': 'no label', 'operator_w': 'no label', 'author': 'no label', 'shop': 'no label', 'grades': 'no label', 'Assets_Thr': 'no label', 'power': 'no label', 'payment_de': 'no label', 'payment_cr': 'no label', 'payment_ca': 'no label', 'payment__1': 'no label', 'is_in_ward': 'no label', 'is_in_subw': 'no label', 'Ward': 'no label', 'building_r': 'no label', 'building_c': 'no label', 'descriptio': 'no label', 'baby_feedi': 'no label', 'addr_ward': 'no label', 'operator': 'no label', 'internet_a': 'no label', 'building': 'no label', 'addr_subwa': 'no label', 'addr_house': 'no label', 'building_l': 'no label', 'service_ti': 'no label', 'operator_t': 'no label', 'fee': 'no label', 'polling_st': 'no label', 'air_condit': 'no label', 'wheelchair': 'no label', 'target': 'no label', 'short_name': 'no label', 'phone': 'no label', 'office': 'no label', 'embassy': 'no label', 'country': 'no label', 'website': 'no label', 'opening_ho': 'no label', 'name_sw': 'no label', 'name_en': 'no label', 'email': 'no label', 'tourism': 'no label', 'denominati': 'no label', 'check_date': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr_munic': 'no label', 'addr_distr': 'no label', 'addr_city': 'no label', });
lyr_DSM_REGION_3.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Hindu_Worship_Places_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'religion': 'no label', 'wheelchair': 'no label', 'operator_t': 'no label', 'opening_ho': 'no label', 'internet_a': 'no label', 'healthcare': 'no label', 'healthca_1': 'no label', 'emergency': 'no label', 'check_date': 'no label', 'name': 'no label', 'building_s': 'no label', 'amenity': 'no label', 'addr_distr': 'no label', 'descriptio': 'no label', 'building_r': 'no label', 'building_m': 'no label', 'building_l': 'no label', 'building_c': 'no label', 'building': 'no label', 'addr_ward': 'no label', 'addr_subwa': 'no label', 'addr_stree': 'no label', 'addr_munic': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', });
lyr_Mosques_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'religion': 'no label', 'constructi': 'no label', 'building': 'no label', 'phone': 'no label', 'descriptio': 'no label', 'Assets_Thr': 'no label', 'wheelchair': 'no label', 'payment_de': 'no label', 'payment_cr': 'no label', 'payment_ca': 'no label', 'payment__1': 'no label', 'website': 'no label', 'Ward': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_m': 'no label', 'building_c': 'no label', 'natural': 'no label', 'public_wat': 'no label', 'name_sw': 'no label', 'addr_house': 'no label', 'operator': 'no label', 'internet_a': 'no label', 'check_date': 'no label', 'highway': 'no label', 'crossing': 'no label', 'building_a': 'no label', 'service_ti': 'no label', 'capacity': 'no label', 'operator_t': 'no label', 'fee': 'no label', 'name_en': 'no label', 'addr_stree': 'no label', 'vehicle': 'no label', 'locked': 'no label', 'barrier': 'no label', 'addr_subwa': 'no label', 'addr_ward': 'no label', 'denominati': 'no label', 'opening_ho': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr_munic': 'no label', 'addr_distr': 'no label', 'addr_city': 'no label', });
lyr_Mosques_Buffer_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'religion': 'no label', 'constructi': 'no label', 'building': 'no label', 'phone': 'no label', 'descriptio': 'no label', 'Assets_Thr': 'no label', 'wheelchair': 'no label', 'payment_de': 'no label', 'payment_cr': 'no label', 'payment_ca': 'no label', 'payment__1': 'no label', 'website': 'no label', 'Ward': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_m': 'no label', 'building_c': 'no label', 'natural': 'no label', 'public_wat': 'no label', 'name_sw': 'no label', 'addr_house': 'no label', 'operator': 'no label', 'internet_a': 'no label', 'check_date': 'no label', 'highway': 'no label', 'crossing': 'no label', 'building_a': 'no label', 'service_ti': 'no label', 'capacity': 'no label', 'operator_t': 'no label', 'fee': 'no label', 'name_en': 'no label', 'addr_stree': 'no label', 'vehicle': 'no label', 'locked': 'no label', 'barrier': 'no label', 'addr_subwa': 'no label', 'addr_ward': 'no label', 'denominati': 'no label', 'opening_ho': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr_munic': 'no label', 'addr_distr': 'no label', 'addr_city': 'no label', });
lyr_Hindu_Buffer_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'religion': 'no label', 'wheelchair': 'no label', 'operator_t': 'no label', 'opening_ho': 'no label', 'internet_a': 'no label', 'healthcare': 'no label', 'healthca_1': 'no label', 'emergency': 'no label', 'check_date': 'no label', 'name': 'no label', 'building_s': 'no label', 'amenity': 'no label', 'addr_distr': 'no label', 'descriptio': 'no label', 'building_r': 'no label', 'building_m': 'no label', 'building_l': 'no label', 'building_c': 'no label', 'building': 'no label', 'addr_ward': 'no label', 'addr_subwa': 'no label', 'addr_stree': 'no label', 'addr_munic': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', });
lyr_Buddhist_Buffer_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'religion': 'no label', 'service_ti': 'no label', 'denominati': 'no label', 'addr_stree': 'no label', 'addr_distr': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr_munic': 'no label', 'addr_city': 'no label', });
lyr_Christian_Buffer_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'religion': 'no label', 'motor_vehi': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'natural': 'no label', 'operator_w': 'no label', 'author': 'no label', 'shop': 'no label', 'grades': 'no label', 'Assets_Thr': 'no label', 'power': 'no label', 'payment_de': 'no label', 'payment_cr': 'no label', 'payment_ca': 'no label', 'payment__1': 'no label', 'is_in_ward': 'no label', 'is_in_subw': 'no label', 'Ward': 'no label', 'building_r': 'no label', 'building_c': 'no label', 'descriptio': 'no label', 'baby_feedi': 'no label', 'addr_ward': 'no label', 'operator': 'no label', 'internet_a': 'no label', 'building': 'no label', 'addr_subwa': 'no label', 'addr_house': 'no label', 'building_l': 'no label', 'service_ti': 'no label', 'operator_t': 'no label', 'fee': 'no label', 'polling_st': 'no label', 'air_condit': 'no label', 'wheelchair': 'no label', 'target': 'no label', 'short_name': 'no label', 'phone': 'no label', 'office': 'no label', 'embassy': 'no label', 'country': 'no label', 'website': 'no label', 'opening_ho': 'no label', 'name_sw': 'no label', 'name_en': 'no label', 'email': 'no label', 'tourism': 'no label', 'denominati': 'no label', 'check_date': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr_munic': 'no label', 'addr_distr': 'no label', 'addr_city': 'no label', });
lyr_Christian_Buffer_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});