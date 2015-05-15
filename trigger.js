var Trigger = function(options) {

    var options = options || {};
    this.frets = options || 24;
    this.strings = ['e2', 'a2', 'd3', 'g3', 'b3', 'e4']

};

Trigger.prototype = {

    draw: function() {
        console.log('draw called');
        return 'trigger';
    }

};