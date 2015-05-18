var Note = function(options){

    var options = options || {};
    this.num = options.num || {};
    this.pitch = options.pitch || {};
    this.pitchClass = options.pitchClass || {};
    this.x = options.x || {};
    this.y = options.y || {};
    this.r = options.r || 25;
    this.note = new Svg({ tag: 'circle', attrs: {
        cx: this.x,
        cy: this.y,
        r: this.r,
        class: 'note note' + (parseInt(this.num) + 1),
        'pitch-class': this.pitchClass
    }});

    this.init();

};

Note.prototype = {

    init:function(){
        this.render();
        this.registerEvents();
        return this;
    },

    el: function(){
        return this.note;
    },

    registerEvents: function(){

        var that = this;
        this.note.addEventListener('click', function(){
            trigger.player.play(that.pitch);
        });

    },

    render: function(){
        return this;
    }

};