var Stats = function(options) {

    var options = options || {};
    this.stats = new El({
        attrs: {
            id: 'stats'
        }
    });
    return this.init();

};

Stats.prototype = {

    init: function() {

        this.render().registerEvents();
        return this;

    },

    el: function() {
        return this.stats;
    },

    registerEvents: function() {

        var that = this;
        document.body.addEventListener(Events.rootChanged, function(e) {
            that.render(e.detail);
        });

        document.body.addEventListener(Events.typeChanged, function(e) {
            that.render(e.detail);
        });

    },

    render: function(data) {

        var data = data || {};
        data.root = data.root || 'c';
        data.type = data.type || 'major';

        var notes = Musicalc.getChordNotes(data.root, data.type);
        var chord_formula = Musicalc.getChordFormula(data.root, data.type);
        var scale_notes = Musicalc.getScaleNotes(data.root, data.type);

        var html = 'Notes: ' + Util.formatNotes(notes).toString();
        html += '<br/>';
        html += 'Formula: ' + chord_formula.toString();

        this.stats.innerHTML = html;
        return this;

    }

};