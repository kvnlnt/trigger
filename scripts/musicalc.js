var Musicalc = {
    
    notation: ['c','c#/db','d','d#/eb','e','f','f#/gb','g','g#/ab','a','a#/bb','b'],

    scale_formulas: {
        major: [
            { num: 0, step:'root' },
            { num: 2, step:'whole' },
            { num: 4, step:'whole' },
            { num: 5, step:'half' },
            { num: 7, step: 'whole' },
            { num: 9, step: 'whole' },
            { num: 11, step: 'whole' },
            { num: 12, step: 'half' },
        ],
        minor: [
            { num: 0, step:'root' },
            { num: 2, step:'whole' },
            { num: 3, step:'half' },
            { num: 5, step:'whole' },
            { num: 7, step: 'whole' },
            { num: 8, step: 'half' },
            { num: 10, step: 'whole' },
            { num: 12, step: 'whole' },
        ]
    },

    chord_formulas: {
        major:[
            { num:0, interval: 'I' },
            { num:4, interval:'III' },
            { num:7, interval: 'IV'}
        ],
        minor:[
            { num:0, interval: 'I' },
            { num:3, interval: 'bIII' },
            { num:7, interval: 'IV'} 
        ]
    },

    _scaleNotation: function(multiplier){

        var notation = Musicalc.notation.slice();
        var scaledNotation = notation;
        for(var i = 0; i < multiplier; i++){
            scaledNotation.push.apply(scaledNotation, notation);
        }
        return scaledNotation;

    },

    getChordNotes:function(root, type){

        var scaledNotation = this._scaleNotation(1);
        var index = Musicalc.notation.indexOf(root);
        var notes = [];
        var formula = Musicalc.chord_formulas[type];

        for(var i = 0; i < formula.length; i++){
            var noteIndex = index + (formula[i].num);
            var note = scaledNotation[noteIndex];
            notes.push(note);
        }

        return notes;

    },

    getScaleFormula:function(root, type){

        var type = type.indexOf('major') > -1 ? 'major' : 'minor';
        var scaledNotation = this._scaleNotation(1);
        var index = Musicalc.notation.indexOf(root);
        var notes = [];
        var formula = Musicalc.scale_formulas[type];

        for(var i = 0; i < formula.length; i++){
            var noteIndex = index + (formula[i].num);
            var note = scaledNotation[noteIndex];
            notes.push(note);
        }

        return notes;

    },

    getChordFormula:function(root, type){

        var formula = Musicalc.chord_formulas[type].map(function(o){ return o.interval; });
        return formula;

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