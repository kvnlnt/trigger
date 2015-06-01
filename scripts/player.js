var Player = function(options){

    var options = options || {};
    this.sample = options.sample || '../samples/gtr_aco_steel.mp3';
    this.sampleLength = options.sampleLength || 2000;

    return this.init();

};

Player.prototype = {

    init: function(){

        var that = this;

        document.body.addEventListener(Events.playClicked, function(e) {
            that.playFrettedNotes();
        });

        return new Howl({
          urls: [this.sample],
          sprite: this.getOffsets()
        });

    },

    playFrettedNotes: function(){
        console.log('play fretted notes');
    },

    getOffsets: function(){

        var that          = this;
        var keys          = Musicalc.notation;
        var offset        = 0;
        var sprite        = {};
        var octaves       = 5;

        for (var n = 0; n < octaves; n++){
            var octave = n+1;
            for(var key in keys){
                sprite[keys[key] + octave] = [offset, this.sampleLength];
                offset += this.sampleLength;
            }
        }

        return sprite;

    }

};
