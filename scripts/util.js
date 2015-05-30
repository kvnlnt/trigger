var Util = {
    formatNotes: function(arrayOfNotes){
        var arrayOfNotes = arrayOfNotes || [];
        return arrayOfNotes.map(function(note){
            return note.split('/').map(function(enharm){
                return enharm.charAt(0).toUpperCase() + enharm.slice(1);
            }).join('/');
        });
    }
};