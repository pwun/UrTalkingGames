SamplesView = (function() {
	var that = {},
   
        sampleView,
        sampleList,

	init = function() {
		_initUI();
		_initEvents();
 		return that;
	},

	_initUI = function() {
        sampleView = document.querySelector('#samples');
        sampleList = $('#sample-list');
	},

	_initEvents = function() { 
        sampleView.addEventListener('mousemove', _onMouseMoved, false);
        sampleView.addEventListener('mouseleave', _onMouseLeft, false);
        sampleView.addEventListener('click', _onClick,false);

	},
    _onClick = function(event) {

        var pickedImage = event.target;
         $('#icon').attr('src',pickedImage.src) ;
          
    },    
    _onMouseMoved = function(event) {
        $(sampleView).removeClass('collappsed');
        $(sampleView).addClass('expanded');
    },
    _onMouseLeft = function(event) {
        $(sampleView).removeClass('expanded');
        $(sampleView).addClass('collappsed');
    },    
        
    
        
    _renderSample = function(data) {
          _.each(data.memes, _addImage);
    }, 
   _addImage = function(nickname,url) {
        var obj = {title:"",className:"", url:"", dataUrl:""};    
        obj.title = nickname;
        obj.className = "thumbs-top";
        obj.url = url;
        obj.dataUrl = url;
    
       var imageContainer = _getContainerForItem('#sampleTemplate', obj);
       
       $(imageContainer).appendTo(sampleList);
    },
    
    _getContainerForItem = function(templateId, item) { 
    
        var compiled = _.template($(templateId).html());
        return compiled(item);
    },
        
    appendItem = function(nickname,imgURL) {
         _addImage(nickname,imgURL);
    },
    resetView = function() {
        sampleList.html("");
    };
        
    that.resetView = resetView;
    that.appendItem = appendItem;
	that.init = init;
	return that;
})();
