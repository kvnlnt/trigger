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
        this.broadcast();
        return this;

    },

    el: function() {
        return this.picker;
    },

    broadcast: function(){
        var rootChanged = new CustomEvent(Events.rootChanged, { 
            detail: { 
                root:this.root,
                type:this.type
            }
        });
        document.body.dispatchEvent(rootChanged);
    },

    registerEvents: function() {

        var that = this;

        // root changed
        this.picker.querySelector('#pickRoot').addEventListener('change', function(e) {
            that.root = this.value;
            that.broadcast();
        });

        // type changed
        this.picker.querySelector('#pickType').addEventListener('change', function(e) {
            that.type = this.value;
            that.broadcast();
        });

    },

    render: function() {

        var html = '\
        <div class="row"> \
        <div class="col pad5"> \
        <select name="root" id="pickRoot"> \
            <option value="c">C</option> \
            <option value="c#/db">C#/Db</option> \
            <option value="d">D</option> \
            <option value="d#/eb">D#/Eb</option> \
            <option value="e">E</option> \
            <option value="f">F</option> \
            <option value="f#/gb">F#/Gb</option> \
            <option value="g">G</option> \
            <option value="g#/ab">G#/Ab</option> \
            <option value="a">A</option> \
            <option value="a#/bb">A#/Bb</option> \
            <option value="b">B</option> \
        </select> \
        </div> \
        <div class="col pad5"> \
        <select name="type" id="pickType"> \
            <option value="major">Major</option> \
            <option value="minor">minor</option> \
        </select> \
        </div> \
        </div>';

        this.picker.innerHTML = html;
        return this;
    }

};