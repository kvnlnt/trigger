var Musicalc = {
    
    notation: ['c','c#/db','d','d#/eb','e','f','f#/gb','g','g#/ab','a','a#/bb','b'],

    getNoteByDegreesFromNote:function(note, degrees){
        var octave = parseInt(note.substr(note.length - 1));
        var pitchClass = note.substr(0, note.length - 1);
        var pitchClassIndex = Musicalc.notation.indexOf(pitchClass);
        var index = pitchClassIndex + degrees;
        var multiplier = Math.ceil(degrees/12);
        var octaveScaled = octave + multiplier;
        var notation = Musicalc.notation.slice();
        var scaledNotation = notation;
        for(var i = 0; i < multiplier; i++){
            scaledNotation.push.apply(scaledNotation, notation);
        }
        return {
            pitchClass:scaledNotation[index],
            octave:octaveScaled,
            pitch:scaledNotation[index] + octaveScaled
        };
    }

};