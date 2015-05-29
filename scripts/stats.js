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
        data.notes = data.notes || '';
        data.chord_formula = data.chord_formula || '';
        data.scale_formula = data.scale_formula || '';
        console.log(data.chord_formula, data.scale_formula);
        var html = 'notes: ' + data.notes.toString();
        html += '<br/>';
        html += 'formula: ' + data.chord_formula.toString();
        html += '<br/>';
        html += 'scale: ' + data.scale_formula.toString();

        this.stats.innerHTML = html;
        return this;

    }

};