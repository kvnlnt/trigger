var Fretboard = function(options) {

    // params
    var options = options || {};
    this.frets = options.frets || 24;
    this.fretHeight = 50;
    this.width = options.width || 320;
    this.labelOffset = options.labelOffset || 20;
    this.height = this.frets * this.fretHeight;
    this.tuning = options.tuning || ['e2', 'a2', 'd3', 'g3', 'b3', 'e4'];
    this.spread = (this.width - this.labelOffset) / this.tuning.length;
    this.board = new Svg({
        attrs: {
            id: 'fretboard',
            height: this.height,
            width: this.width
        }
    });

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

    filterFretsByNotes: function(filter) {
        var notes = document.querySelectorAll('circle.note');
        var labels = document.querySelectorAll('text.label[type="note"]');
        for (var n = 0; n < notes.length; n++) {
            var note = notes.item(n);
            var label = labels.item(n);
            var pitchClass = note.getAttribute('pitch-class');
            var noteInFilter = filter.indexOf(pitchClass) >= 0;
            var isDisabled = note.getAttribute('state') == "disabled";
            if (isDisabled) {
                note.setAttribute('state', "enabled");
                label.setAttribute('state', "enabled");
            }
            if (!noteInFilter) {
                note.setAttribute('state', "disabled");
                label.setAttribute('state', "disabled");
            }
        }
    },

    registerListeners: function() {

        var that = this;
        document.body.addEventListener(Events.rootChanged, function(e) {
            var notes = Musicalc.getChordNotes(e.detail.root, e.detail.type);
            that.filterFretsByNotes(notes);
        });

        document.body.addEventListener(Events.typeChanged, function(e) {
            that.filterFretsByNotes(e.detail.notes);
        });

    },

    render: function() {

        // frets
        var y = 0;
        for (var f = 0; f < this.frets; f++) {
            var fret = new Fret({
                x: this.labelOffset,
                y: y,
                height: this.fretHeight,
                width: this.width - this.labelOffset,
                num: f,
                tuning: this.tuning,
                spread: this.spread
            });
            this.board.appendChild(fret.el());
            y += this.fretHeight;
        }

        return this;
    }

};