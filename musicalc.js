var Musicalc = {
    
    notation: ['c','c#/db','d','d#/eb','e','f','f#/gb','g','g#/ab','a','a#/bb','b'],

    _scaleNotation: function(multiplier){

        var notation = Musicalc.notation.slice();
        var scaledNotation = notation;
        for(var i = 0; i < multiplier; i++){
            scaledNotation.push.apply(scaledNotation, notation);
        }
        return scaledNotation;

    },

    getNoteByDegreesFromNote:function(note, degrees){

        var octave = parseInt(note.substr(note.length - 1));
        var pitchClass = note.substr(0, note.length - 1);
        var rootIndex = Musicalc.notation.indexOf(pitchClass);
        var index = rootIndex + degrees;
        var multiplier = Math.floor((rootIndex + degrees)/12);
        var scaledNotation = this._scaleNotation(multiplier);
        var octaveScaled = multiplier >= 1 ? octave + multiplier : octave;

        return {
            note:scaledNotation[index],
            octave:octaveScaled,
            pitch:scaledNotation[index] + octaveScaled
        };
    }

};