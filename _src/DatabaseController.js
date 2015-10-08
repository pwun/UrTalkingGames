DatabaseController = (function () {
    var that = {},
        db, remoteCouch,syncError,

        init = function (newCanvasController) {
             db = new PouchDB("testChars");
             remoteCouch = "http://urgadmin:adminpw@urgaming.iriscouch.com:5984/testChars";
             var opts = {live:true};
      db.replicate.to(remoteCouch, opts, syncError);
      db.replicate.from(remoteCouch, opts, syncError);
            retrieveElements();
            console.log("DB Controller ready");
    },
        
    saveImage = function(newNickName,newDataUrl) {
        var img = {
            _id:new Date().toISOString(),
            nickname: newNickName,
            dataUrl: newDataUrl
        }
        db.put(img, function callback(err,res) {
        if(!err){ 
           retrieveElements();
           console.log("succesful db input");
        }
        else{   console.log(err);}
        
        });
    },
        
    retrieveElements = function() { 
        db.allDocs({include_docs: true, descending:false},      function(err,doc){
        for(var i=0;i<doc.rows.length;i++) {
                SamplesView.appendItem(doc.rows[i].doc.nickname, doc.rows[i].doc.dataUrl);
            }
            
            
      });
    },
     setBoolHighscore = function(newHighscore) {
        console.log("bool Highscore",newHighscore);
    } 
    
    ;
    that.setBoolHighscore = setBoolHighscore;
    that.saveImage = saveImage;
    that.init = init;

    return that;
})();