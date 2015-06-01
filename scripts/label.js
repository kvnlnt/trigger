var Label = function(options) {

    var options = options || {};
    this.num = options.num.toString() || '';
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.text = options.text.toString() || '';
    this.klass = options.klass || 'label';
    this.type = options.type || 'label';
    this.state = options.state || '';
    this.label = new Svg({
        tag: 'text',
        attrs: {
            x: this.x,
            y: this.y,
            class: 'label',
            label: this.num,
            type: this.type,
            state: this.state
        }
    });

    return this.init();

};

Label.prototype = {

    init: function() {
        this.render();
        return this;
    },

    el: function() {
        return this.label;
    },

    render: function() {
        this.label.innerHTML = this.text;
        return this;
    }

};