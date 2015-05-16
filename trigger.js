var Svg = function(options) {

    // params
    var options = options || {};
    var namespace = options.namespace || 'http://www.w3.org/2000/svg';
    var tag = options.tag || 'svg';
    var attrs = options.attrs || {};
    var el = document.createElementNS(namespace, tag);

    // apply attrs
    for (var attr in attrs) {
        el.setAttribute(attr, attrs[attr]);
    }

    // init
    return el;

};

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

var Note = function(options){

    var options = options || {};
    this.num = options.num || {};
    this.x = options.x || {};
    this.y = options.y || {};
    this.r = options.r || 25;
    this.note = new Svg({ tag: 'circle', attrs: {
        cx: this.x,
        cy: this.y,
        r: this.r,
        class: 'note note' + (parseInt(this.num) + 1)
    }});

};

Note.prototype = {

    init:function(){
        this.render();
        return this;
    },

    el: function(){
        return this.note;
    },

    render: function(){
        return this;
    }

};

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

var Label = function(options){

    var options = options || {};
    this.num = options.num || {};
    this.x = options.x || {};
    this.y = options.y || {};
    this.text = options.text || {};
    this.label = new Svg({ tag: 'text', attrs: {
        x: this.x,
        y: this.y,
        class: 'label label' + (parseInt(this.num) + 1)
    }});

    return this.init();

};

Label.prototype = {

    init:function(){
        this.render();
        return this;
    },

    el: function(){
        return this.label;
    },

    render: function(){
        this.label.innerHTML = this.text;
        return this;
    }

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
            var note = new Note({ x: x, y: this.height/2, r: this.spread/4, num: t });
            this.fret.appendChild(note.el());
            x += this.spread;
        }

        // label  
        var x = this.spread / 2;
        for (var t in this.tuning) {
            var label = new Label({ x: x, y: this.height/2, text: this.tuning[t], num: t });
            this.fret.appendChild(label.el());
            x += this.spread;
        }

        // add string to fret
        return this;

    }

};

var Fretboard = function(options) {

    // params
    var options = options || {};
    this.frets = options.frets || 24;
    this.fretHeight = 50;
    this.width = options.width || 300;
    this.height = this.frets * this.fretHeight;
    this.tuning = options.strings || ['e2', 'a2', 'd3', 'g3', 'b3', 'e4'];
    this.spread = this.width / this.tuning.length;
    this.board = new Svg({attrs:{ height: this.height, width:this.width}});

    // init
    this.init();

};

Fretboard.prototype = {

    init: function() {
        this.render();
        return this;
    },

    el: function() {
        return this.board;
    },

    render: function() {

        // frets
        var y = 0;
        for (var fret = 0; fret < this.frets; fret++) {
            var _fret = new Fret({ 
                x: 0, 
                y: y, 
                height:this.fretHeight, 
                width:this.width,
                num: fret, 
                tuning: this.tuning, 
                spread:this.spread });
            this.board.appendChild(_fret.el());
            y += this.fretHeight;
        }

        return this;
    }

};

var Trigger = function(options) {

    // params
    var options = options || {};
    this.wrapper = options.fretboard || '#fretboard';
    this.wrapper = document.querySelector(this.wrapper);
    this.fretboard = new Fretboard();

    // init
    this.init();

};

Trigger.prototype = {

    init: function() {
        this.render();
        return this;
    },

    render:function(){
        this.wrapper.appendChild(this.fretboard.el());
        return this;
    }

};

var trigger = new Trigger();