const alertsRemove = document.querySelectorAll('.alert-remove');
alertsRemove.forEach(function(i){
    i.addEventListener('click',function(e){
        i.remove();
    });
});


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