DatabaseController = (function () {
    var that = {},
        db, remoteCouch,syncError,

        init = function (newCanvasController) {
            console.log("dbcontroller am start");
            db = new PouchDB("test");
            //remoteCouch = "http://felix:asdf@127.0.0.1:5984/testtttt";
            remoteCouch = "http://cody:asdf@cmav.iriscouch.com:5984/test";
             var opts = {live:true};
      db.replicate.to(remoteCouch, opts, syncError);
      db.replicate.from(remoteCouch, opts, syncError);
    },
        
    saveImage = function(newDataUrl) {
        var img = {
            _id:"testID",//new Date().toISOString(),
            dataUrl: newDataUrl
        }
        console.log("save2iris");
        db.put(img, function callback(err,res) {
        if(!err){ 
            
        
        test();}});
    },
        
    setBoolHighscore = function(newHighscore) {
        console.log("bool Highscore",newHighscore);
    },    
    test = function() { 
        db.allDocs({include_docs: true, descending:false}, function(err,doc){
            
//            for(var i=0;i<9;i++) {
//   
//                var currSrc = doc.rows[i].doc.dataUrl;
//                var str1 = '<div class=\"galleryItem\"><img src=\"';
//                var str2 = '\"/></div>';
//                
//                var cody = str1+currSrc+str2;
//           
//               
//                var image = document.createElement('img');
//                image.setAttribute('class','galleryItem');
//                image.src=currSrc; 
//                $('#gallery').html(cody);
//            }
//            
//            $('#g1').attr("src", doc.rows[0].doc.dataUrl);
//            $('#g2').attr("src", doc.rows[1].doc.dataUrl);
             
            
            
      });
    };
    that.setBoolHighscore = setBoolHighscore;
    that.saveImage = saveImage;
    that.init = init;

    return that;
})();