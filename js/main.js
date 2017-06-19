$(function(){
    
    // Variables    
    var $window = $(window),    
        fsImg = $('.img-fs'),
        hsImg = $('.img-hs'),
        startwidth= 640, 
        startheight= 427,
        ratio = startheight/startwidth,
        imagewidth = $(this).width(),
        imageheight = $(this).height(),
        browserwidth = $(window).width(),
        browserheight = $(window).height();
        browserwidth2 = $(window).width()/2,
        browserheight2 = $(window).height();
            
            
    // Window resize handler
    $window.on('resize', function(){ 
        
            imagewidth = $(this).width();
            imageheight = $(this).height();
            browserwidth = $(window).width();
            browserheight = $(window).height();
            browserwidth2 = $(window).width()/2;
            browserheight2 = $(window).height();
                        
            fsImage();
            hsImage();          
            scrollStuff();          
                        
    }); 
    function fsImage(){
    
        
        if ((browserheight/browserwidth) > ratio){
            fsImg.height(browserheight);
            fsImg.width(browserheight / ratio);
        } else {
            fsImg.width(browserwidth);
            fsImg.height(browserwidth * ratio);
        };
        fsImg.css('left', (browserwidth - fsImg.width())/2);
        fsImg.css('top', (browserheight - fsImg.height())/2);
       

    };
    fsImage();
    function hsImage(){
    
        
        if ((browserheight2/browserwidth2) > ratio){
            hsImg.height(browserheight2);
            hsImg.width(browserheight2 / ratio);
        } else {
            hsImg.width(browserwidth2);
            hsImg.height(browserwidth2 * ratio);
        };
        hsImg.css('left', (browserwidth2 - hsImg.width())/2);
        hsImg.css('top', (browserheight2 - hsImg.height())/2);
       

    };
    hsImage();
    
        
    // Scrolling
    $window.on('scroll', function(event){ 
        
            window.requestAnimationFrame(scrollStuff);  
                
    }); 
    function scrollStuff()
    {
        var scrollTop = $window.scrollTop();
        var $slide_img = $('.img-fs, .img-hs');
          
        $slide_img.each(function(){
            var offset = $(this).offset().top;
    
            $(this).css({transform: 'translateY(' +  -Math.round(offset - scrollTop)*0.2 + 'px)'});
            
        }); 

        if( scrollTop > 0 ){
            $('.scroll-cue').fadeOut();
        }
                
    }
    scrollStuff();

    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                       || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
 
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
 
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());
    
    
});





