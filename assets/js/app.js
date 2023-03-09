const alertsRemove = document.querySelectorAll('.alert-remove');
alertsRemove.forEach(function(i){
    i.addEventListener('click',function(e){
        i.remove();
    });
});


var carouselMultis = document.querySelectorAll('.carousel-multi');
if(carouselMultis){
    carouselMultis.forEach(function(cm){          
       	var inner = cm.querySelector('.carousel-inner');                    
        var items = inner.querySelectorAll('.carousel-item');

		var parentwidth = cm.offsetWidth;
		var itemwidth = items[0].offsetWidth;
		var itemInt = parseInt(cm.getAttribute('data-bs-speed')) > 1000 ? parseInt(cm.getAttribute('data-bs-speed')) : 1000;
		var active = Array.from(items).findIndex(function(e){ return e.classList.contains('active') }); 
		items.forEach(function(i){ i.style.animationDuration = itemInt+"ms"; });
		if((parentwidth + (itemwidth * 2)) > (itemwidth * items.length)){
			var t = Math.ceil(((Math.ceil(((parentwidth + (itemwidth * 2)) - (itemwidth * items.length)) / itemwidth)) + 2) / items.length);
			for(x = 0; x < t; x++){
				items.forEach(function(i){
					i.classList.remove('active');
					inner.appendChild(i.cloneNode(true))
				});
			}
		}

        var carousel = new bootstrap.Carousel(cm)        
        carousel.nextWhenVisible();

		var slideTimeout,touchDirection,xClick;
		cm.addEventListener('touchstart', function (e) { xClick = e.touches[0].clientX; });
		cm.addEventListener('touchmove', function (e) {
			if(xClick){
				var xMove =	e.touches[0].clientX;
				touchDirection = (xClick - xMove) < 0 ? "right" : "left";
			}
			items.forEach(function(e){
				if(slideTimeout) { clearTimeout(slideTimeout); }
				e.classList.remove('carousel-move-left','carousel-move-right','carousel-item-next','carousel-item-start','carousel-item-prev','carousel-item-end');
            }); 
        });
        cm.addEventListener('slide.bs.carousel', function (e) { 			                                            
	        items = inner.querySelectorAll('.carousel-item');	
            if (touchDirection == "left" || (!touchDirection && e.direction == "left")) {
                items.forEach(function(e){ e.classList.add('carousel-move-left'); e.classList.remove('active','carousel-move-right'); });                
                var first = items[0];
                slideTimeout = setTimeout(function(){            
                    inner.appendChild(first.cloneNode(true));     
					first.remove();                                  
                    var ni = inner.querySelectorAll('.carousel-item');
                    ni.forEach(function(e){
                        e.classList.remove('carousel-move-left','carousel-item-next','carousel-item-start','carousel-item-prev','carousel-item-end');
                    }); 
					ni[active].classList.add('active');                        					              
                }, (itemInt - 25));                
            } else { 				
                items.forEach(function(e){ e.classList.add('carousel-move-right'); e.classList.remove('active','carousel-move-left'); });
                var last = items[items.length - 1];  			
               	inner.prepend(last.cloneNode(true));                                                                                
    	        last.remove();									
                slideTimeout = setTimeout(function(){                                                    
                    var ni = inner.querySelectorAll('.carousel-item')  
                    ni.forEach(function(e){		
                        e.classList.remove('carousel-move-right','carousel-item-next','carousel-item-start','carousel-item-prev','carousel-item-end')
                    });	
					ni[active].classList.add('active');                        					              									
                }, (itemInt - 25));                                
            }                
        }); 
    });
}

window.addEventListener("load", onLoadFunction);
window.addEventListener("resize", onLoadFunction);

function onLoadFunction(e){     
    var ann = document.querySelector('#header .announcements');
    var nav = document.querySelector('#header .navigation');    

    var ann_h = ann ? ann.offsetHeight : 0;
    ann_h += ann ? parseInt(window.getComputedStyle(ann).getPropertyValue('margin-top')) : 0;
    ann_h += ann ? parseInt(window.getComputedStyle(ann).getPropertyValue('margin-bottom')) : 0;
        
    var nav_h = nav.offsetHeight;
    nav_h += parseInt(window.getComputedStyle(nav).getPropertyValue('margin-top'));
    nav_h += parseInt(window.getComputedStyle(nav).getPropertyValue('margin-bottom'));
       
    var head = document.getElementById('header');
    head.style.minHeight = (ann_h + nav_h)+'px';    

    if(window.scrollY > ann_h && !nav.classList.contains('position-fixed')){
        nav.classList.add('position-fixed');
    } else if(window.scrollY <= ann_h && nav.classList.contains('position-fixed')){
        nav.classList.remove('position-fixed');
    }
};

window.addEventListener("scroll", function() {    
    var ann = document.querySelector('#header .announcements');
    var nav = document.querySelector('#header .navigation');

    var ann_h = ann ? ann.offsetHeight : 0;
    ann_h += ann ? parseInt(window.getComputedStyle(ann).getPropertyValue('margin-top')) : 0;
    ann_h += ann ? parseInt(window.getComputedStyle(ann).getPropertyValue('margin-bottom')) : 0;

    if(window.scrollY > ann_h && !nav.classList.contains('position-fixed')){
        nav.classList.add('position-fixed');
    } else if(window.scrollY <= ann_h && nav.classList.contains('position-fixed')){
        nav.classList.remove('position-fixed');
    }
});