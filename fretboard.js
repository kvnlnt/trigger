var Fretboard = function(options) {

    // params
    var options = options || {};
    this.frets = options.frets || 24;
    this.fretHeight = 50;
    this.width = options.width || 300;
    this.height = this.frets * this.fretHeight;
    this.tuning = options.strings || ['e2', 'a2', 'd3', 'g3', 'b3', 'e4'];
    this.spread = this.width / this.tuning.length;
    this.board = new Svg({attrs:{ height: this.height, width:this.width}});

    // init
    this.init();

};

Fretboard.prototype = {

    init: function() {
        this.render();
        return this;
    },

    el: function() {
        return this.board;
    },

    render: function() {

        // frets
        var y = 0;
        for (var fret = 0; fret < this.frets; fret++) {
            var _fret = new Fret({ 
                x: 0, 
                y: y, 
                height:this.fretHeight, 
                width:this.width,
                num: fret, 
                tuning: this.tuning, 
                spread:this.spread });
            this.board.appendChild(_fret.el());
            y += this.fretHeight;
        }

        return this;
    }

};