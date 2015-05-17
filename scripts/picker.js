var Picker = function(options) {

    var options = options || {};
    this.picker = new El({
        attrs: {
            id: 'picker'
        }
    });
    this.root = 'c';
    this.type = 'major';
    return this.init();

};

Picker.prototype = {

    init: function() {

        this.render().registerEvents();
        return this;

    },

    el: function() {
        return this.picker;
    },

    registerEvents: function() {

        var that = this;

        // root changed
        this.picker.querySelector('#pickRoot').addEventListener('change', function(e) {
            that.root = this.value;
            var notes = Musicalc.getChordNotes(that.root, that.type);
            var rootChanged = new CustomEvent(Events.rootChanged, { detail: { notes: notes }});
            document.body.dispatchEvent(rootChanged);
        });

        // type changed
        this.picker.querySelector('#pickType').addEventListener('change', function(e) {
            that.type = this.value;
            var notes = Musicalc.getChordNotes(that.root, that.type);
            var typeChanged = new CustomEvent(Events.typeChanged, { detail: { notes: notes }});
            document.body.dispatchEvent(typeChanged);
        });

    },

    render: function() {

        var html = '\
        <select name="root" id="pickRoot"> \
            <option value="c">C</option> \
            <option value="c#/db">C&#9839;/D&#9837;</option> \
            <option value="d">D</option> \
            <option value="d#/eb">D&#9839;/E&#9837;</option> \
            <option value="e">E</option> \
            <option value="f">F</option> \
            <option value="f#/gb">F&#9839;/G&#9837;</option> \
            <option value="g">G</option> \
            <option value="g#/ab">G&#9839;/A&#9837;</option> \
            <option value="a">A</option> \
            <option value="a#/bb">A&#9839;/B&#9837;</option> \
            <option value="b">B</option> \
        </select> \
        <select name="type" id="pickType"> \
            <option value="major">Major</option> \
            <option value="minor">minor</option> \
        </select>';

        this.picker.innerHTML = html;
        return this;
    }

};