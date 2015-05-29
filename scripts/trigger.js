var Trigger = function(options) {

    // params
    var options = options || {};
    this.fretboardWrapper = options.fretboard || '#fretboardWrapper';
    this.fretboardWrapper = document.querySelector(this.fretboardWrapper);
    this.fretboard = new Fretboard();
    this.pickerWrapper = options.picker || '#pickerWrapper';
    this.pickerWrapper = document.querySelector(this.pickerWrapper);
    this.statsWrapper = options.stats || '#statsWrapper';
    this.statsWrapper = document.querySelector(this.statsWrapper);
    this.picker = new Picker();
    this.player = new Player();
    this.stats = new Stats();

    // init
    this.init();

};

Trigger.prototype = {

    init: function() {
        this.render();
        this.picker.broadcast();
        return this;
    },

    render:function(){
        this.pickerWrapper.appendChild(this.picker.el());
        this.fretboardWrapper.appendChild(this.fretboard.el());
        this.statsWrapper.appendChild(this.stats.el());
        return this;
    }

};

var trigger = new Trigger();