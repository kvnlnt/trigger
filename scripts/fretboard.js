var Fretboard = function(options) {

    // params
    var options = options || {};
    this.frets = options.frets || 24;
    this.fretHeight = 50;
    this.width = options.width || 320;
    this.labelOffset = options.labelOffset || 20;
    this.height = this.frets * this.fretHeight;
    this.tuning = options.strings || ['e2', 'a2', 'd3', 'g3', 'b3', 'e4'];
    this.spread = (this.width-this.labelOffset) / this.tuning.length;
    this.board = new Svg({attrs:{ id:'fretboard', height: this.height, width:this.width}});

    // init
    this.init();

};

Fretboard.prototype = {

    init: function() {
        this.render();
        this.registerListeners();
        return this;
    },

    el: function() {
        return this.board;
    },

    registerListeners: function(){

        document.body.addEventListener(Events.rootChanged, function(e){
            console.log('root changed', e.detail);
        });

        document.body.addEventListener(Events.typeChanged, function(e){
            console.log('type changed', e.detail);
        });

    },

    render: function() {

        // frets
        var y = 0;
        for (var f = 0; f < this.frets; f++) {
            var fret = new Fret({ 
                x: this.labelOffset, 
                y: y, 
                height:this.fretHeight, 
                width:this.width-this.labelOffset,
                num: f, 
                tuning: this.tuning, 
                spread:this.spread });
            this.board.appendChild(fret.el());
            y += this.fretHeight;
        }

        return this;
    }

};