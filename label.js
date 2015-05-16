var Label = function(options){

    var options = options || {};
    this.num = options.num || {};
    this.x = options.x || {};
    this.y = options.y || {};
    this.text = options.text || {};
    this.klass = options.klass || 'label';
    this.label = new Svg({ tag: 'text', attrs: {
        x: this.x,
        y: this.y,
        class: 'label label-' + this.klass + ' ' + this.klass + (parseInt(this.num) + 1)
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