var Note = function(options) {

    var options = options || {};
    this.num = options.num || {};
    this.pitch = options.pitch || {};
    this.pitchClass = options.pitchClass || {};
    this.x = options.x || {};
    this.y = options.y || {};
    this.r = options.r || 25;
    this.state = options.state || '';
    this.note = new Svg({
        tag: 'circle',
        attrs: {
            cx: this.x,
            cy: this.y,
            r: this.r,
            note: (parseInt(this.num) + 1),
            class: 'note',
            'pitch-class': this.pitchClass,
            fretted: false,
            state: this.state
        }
    });

    this.init();

};

Note.prototype = {

    init: function() {
        this.render();
        this.registerEvents();
        return this;
    },

    el: function() {
        return this.note;
    },

    toggleFretting: function(el) {
        var fretted = el.getAttribute('fretted') == 'true';
        el.setAttribute('fretted', !fretted);
    },

    registerEvents: function() {

        var that = this;
        this.note.addEventListener('click', function() {
            that.toggleFretting(this);
            trigger.player.play(that.pitch);
        });

    },

    render: function() {
        return this;
    }

};