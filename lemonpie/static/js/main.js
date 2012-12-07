/*global requirejs, require, OpenLayers, jQuery, $, Raphael, stations, console  */
/*jslint indent: 4 */
"use strict";
requirejs.config({
    paths: {
        'jquery' : 'lib/jquery',
        'underscore' : 'lib/underscore',
        'bootstrap': 'lib/bootstrap',
        'openlayers': 'lib/OpenLayers'
    },
    shim: {
        'bootstrap' : {
            'deps' : ['jquery']
        },
    }
});
require(['jquery', 'underscore', 'bootstrap', 'openlayers'], function ($, _) {

    layers = jQuery.parseJSON(layers);
    var layer = null;

    for (layer in layers) {
        console.log(layer, layers[layer]);
    }

    var map = L.map('map').setView([52.4, 5.8], 9);

    // base layer
    L.tileLayer('http://{s}.tile.cloudmade.com/2a821ef633ec46428cbb11db251bac65/{styleId}/256/{z}/{x}/{y}.png', {
        styleId: 999,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map);

    // data layer
    L.geoJson(layers[0]).addTo(map);

    // jQuery UI shizzle
    $('#informationtoggle').on('click', function (e) {
        if ($('#mapcontainer').attr('class') === 'span12') {
            $("#mapcontainer").removeClass('span12').addClass('span8');
            $("#map").animate({height: '-=100', width: '-=400'});
            $("#information").toggle();
        } else {
            $("#mapcontainer").removeClass('span8').addClass('span12');
            $("#map").animate({height: '+=100', width: '+=400'});
            $("#information").toggle();
        }
    })

}); // end requirejs
