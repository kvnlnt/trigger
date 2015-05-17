var Trigger = function(options) {

    // params
    var options = options || {};
    this.fretboardWrapper = options.fretboard || '#fretboardWrapper';
    this.fretboardWrapper = document.querySelector(this.fretboardWrapper);
    this.fretboard = new Fretboard();
    this.pickerWrapper = options.picker || '#pickerWrapper';
    this.pickerWrapper = document.querySelector(this.pickerWrapper);
    this.picker = new Picker();
    this.player = new Player();

    // init
    this.init();

};

Trigger.prototype = {

    init: function() {
        this.render();
        return this;
    },

    render:function(){
        this.pickerWrapper.appendChild(this.picker.el());
        this.fretboardWrapper.appendChild(this.fretboard.el());
        return this;
    }

};

var trigger = new Trigger();