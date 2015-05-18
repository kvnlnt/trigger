var NoteLabel = function(options){

    var options = options || {};
    this.num = options.num.toString() || '';
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.text = options.text.toString() || '';
    this.klass = options.klass || 'label';
    this.pitchClass = options.pitchClass || 'pitch-class';
    this.label = new Svg({ tag: 'text', attrs: {
        x: this.x,
        y: this.y,
        'pitch-class': this.pitchClass,
        class: 'label label-' + this.klass + ' ' + this.klass + this.num
    }});

    return this.init();

};

NoteLabel.prototype = {

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