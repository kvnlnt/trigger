var Fret = function(options){

    var options = options || {};
    this.tuning = options.tuning || {};
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.num = options.num || 0;
    this.height = options.height || 50;
    this.width = options.width || 300;
    this.spread = options.spread || 50;
    this.fret = new Svg({
        tag:'g', 
        attrs: {
            transform: 'translate(0,' + this.y + ')',
            class: "fret fret" + this.num
        }
    });

    // init
    return this.init();

};

Fret.prototype = {

    init: function(){
        this.render();
        return this;
    },

    el: function(){
        return this.fret;
    },

    render: function() {

        // bar
        var bar = new Svg({tag: 'line', attrs:{
            x1:0, x2: this.width, y1: this.height, y2: this.height, class:'bar bar'+this.num
        }});

        this.fret.appendChild(bar);

        // strings  
        var x = this.spread / 2;
        for (var t in this.tuning) {
            var string = new String({ x1:x, x2:x, y1:0, y2: this.height, num:t });
            this.fret.appendChild(string.el());
            x += this.spread;
        }

        // notes  
        var x = this.spread / 2;
        for (var t in this.tuning) {
            var pitch = Musicalc.getNoteByDegreesFromNote(this.tuning[t], this.num);
            var note = new Note({ x: x, y: this.height/2, r: this.spread/4, num: t, pitch:pitch.pitch });
            this.fret.appendChild(note.el());
            x += this.spread;
        }

        // label  
        var x = this.spread / 2;
        for (var t in this.tuning) {
            var pitch = Musicalc.getNoteByDegreesFromNote(this.tuning[t], this.num);
            var label = new Label({ x: x, y: this.height/2, text: pitch.pitchClass, num: t, klass:'note' });
            this.fret.appendChild(label.el());
            x += this.spread;
        }

        // add string to fret
        return this;

    }

};
