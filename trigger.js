var Trigger = function(options) {

    // params
    var options = options || {};
    this.wrapper = options.fretboard || '#fretboard';
    this.wrapper = document.querySelector(this.wrapper);
    this.fretboard = new Fretboard();

    // init
    this.init();

};

Trigger.prototype = {

    init: function() {
        this.render();
        return this;
    },

    render:function(){
        this.wrapper.appendChild(this.fretboard.el());
        return this;
    }

};

var trigger = new Trigger();