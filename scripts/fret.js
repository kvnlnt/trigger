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
            transform: 'translate(' + this.x + ',' + this.y + ')',
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
        var x = this.spread / 2;
        var bar = new Svg({tag: 'line', attrs:{
            x1:x, x2: this.width - x, y1: this.height, y2: this.height, class:'bar bar'+this.num
        }});

        this.fret.appendChild(bar);

        // label 
        var label = new Label({ x: 0, y: this.height/2, text: this.num, num: this.num, klass:'fret' });
        this.fret.appendChild(label.el());

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
            var note = new Note({ x: x, y: this.height/2, r: this.spread/3, num: t, pitch:pitch.pitch, pitchClass:pitch.note });
            this.fret.appendChild(note.el());
            x += this.spread;
        }

        // note labels  
        var x = this.spread / 2;
        for (var t in this.tuning) {
            var pitch = Musicalc.getNoteByDegreesFromNote(this.tuning[t], this.num);
            var label = new NoteLabel({ x: x, y: this.height/2, text: pitch.note.split('/')[0], num: t, klass:'note', pitchClass:pitch.note });
            this.fret.appendChild(label.el());
            x += this.spread;
        }

        // add string to fret
        return this;

    }

};
