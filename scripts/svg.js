var Svg = function(options) {

    // params
    var options = options || {};
    var namespace = options.namespace || 'http://www.w3.org/2000/svg';
    var tag = options.tag || 'svg';
    var attrs = options.attrs || {};
    var el = document.createElementNS(namespace, tag);

    // apply attrs
    for (var attr in attrs) {
        el.setAttribute(attr, attrs[attr]);
    }

    // init
    return el;

};
