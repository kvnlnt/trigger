
var String = function(options){

    var options = options || {};
    this.num = options.num || {};
    this.x1 = options.x1 || 0;
    this.x2 = options.x2 || 0;
    this.y1 = options.y1 || 0;
    this.y2 = options.y2 || 0;
    this.note = options.note || {};
    this.string = new Svg({ tag: 'line', attrs: {
        x1: this.x1,
        y1: this.y1,
        x2: this.x2,
        y2: this.y2,
        class: 'string string' + (parseInt(this.num) + 1)
    }});

};

String.prototype = {

    init:function(){
        this.render();
        return this;
    },

    el: function(){
        return this.string;
    },

    render: function(){
        console.log('render note');
        return this;
    }

};