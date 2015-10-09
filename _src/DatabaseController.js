DatabaseController = (function () {
    var that = {},
        db, remoteCouch,syncError,

        init = function (newCanvasController) {
             db = new PouchDB("chars");
             remoteCouch = "http://urgadmin:adminpw@urgaming.iriscouch.com:5984/chars";
             var opts = {live:true};
      db.replicate.to(remoteCouch, opts, syncError);
      db.replicate.from(remoteCouch, opts, syncError);
            retrieveElements();
     },
        
    saveImage = function(newNickName,newDataUrl) {
        var img = {
            _id:newNickName,
            dataUrl: newDataUrl
        };
        db.put(img, function callback(err,res) {
        if(!err){ 
           retrieveElements();
         }
        else{   console.log(err);}
        });
    },
        
    retrieveElements = function() { 
        SamplesView.resetView();
        db.allDocs({include_docs: true, descending:false},      function(err,doc){
        for(var i=0;i<doc.rows.length;i++) {
                SamplesView.appendItem(doc.rows[i].doc._id, doc.rows[i].doc.dataUrl);
            }      
      });
    }
    ;
    that.saveImage = saveImage;
    that.init = init;

    return that;
})();