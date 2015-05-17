var El = function(options) {

    // params
    var options = options || {};
    var tag = options.tag || 'div';
    var attrs = options.attrs || {};
    var el = document.createElement(tag);

    // apply attrs
    for (var attr in attrs) {
        el.setAttribute(attr, attrs[attr]);
    }

    // init
    return el;

};
