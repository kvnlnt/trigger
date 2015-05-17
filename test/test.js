var Tests = {

    draw: function() {
        var trigger = new Trigger();
        Assert.true(trigger.draw(), 'trigger');
    },

    drawFretboard: function() {
        var trigger = new Trigger();
        Assert.true(trigger.draw(), 'trigger');
    }

};

Assert.run(Tests);