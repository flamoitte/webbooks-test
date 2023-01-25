window.onload = function() {
    $("#tocSubBtn-" + $(".dc-section-chapter").attr('id')).trigger("click");
    
    if( document.readyState !== 'loading' ) {
        myInitCode();
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            myInitCode();
        });
    }

    function myInitCode() {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.getAttribute('id');
    
          if (entry.intersectionRatio > 0) {
            document.querySelector("nav[id='sidebarMenu'] li a[href=\"#" + id + "\"]").classList.add('active');
          } else {
            document.querySelector("nav[id='sidebarMenu'] li a[href=\"#" + id + "\"]").classList.remove('active');
          }
        });
      }); // Track all sections that have an `id` applied
      
        var elements = document.querySelectorAll('section[id]');
        for (var i = 0; i < elements.length; i++) {
          observer.observe(elements[i]);
        }
      
      
    }

    var matchesResult = document.querySelector("#matchesResult");

if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector || 
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

// TODO: .closest() n'est pas accepté sur IE et il casse tous le JS, trouver un polyfill'
    document.addEventListener("click", function(event) {
    	// If user clicks inside the element, do nothing
    	if (event.target.closest("#matchesResult")) return;
    	if (event.target.closest("#searchInput")){
    	   matchesResult.classList.remove("d-none");
    	}else{
    	// If user clicks outside the element, hide it!
        	matchesResult.classList.add("d-none");
    	}
    
    });
    
    var input = document.getElementById('searchInput');

    input.addEventListener('focus', function() {
        matchesResult.classList.remove("d-none");
    });

};

$(window).load(function(){
    setTocHeight();
    setAnchorOffset();
});

function positionNextButton(){
    var X = $("#sidebarMenu").width();
    var Y = $(".dc-content").width();
    var Z = $(".dc-section-chapter").width();
    
    var a = (Y - Z) / 2;
    
    var left1 = X + ((Y - Z) / 4);
    var left2 = $("body").width() - X - $(".dc-nav-next").width() - Y + (a / 2);
    
    $('.dc-previous-btn').css({
        'right': 'auto',
        'left': left1 + "px"
    });
    
    $('.dc-next-btn').css({
        'right': left2,
        'left': 'auto'
    });

};


$(".dc-toc-btn").click(function () {
    $("#sidebarMenu").toggleClass('dc-toc-close');
    $("#sidebarMenuGhost").toggleClass('dc-toc-close');
    $("main").toggleClass('dc-toc-close');
});

$("#sidebarMenu .nav-link").click(function () {
    $("#sidebarMenu").toggleClass('dc-toc-close');
    $("#sidebarMenuGhost").toggleClass('dc-toc-close');
    $("main").toggleClass('dc-toc-close');
});

$(".dc-previous-btn").mouseenter(function () {
    $(".dc-nav-previous-title").removeClass('dc-nav-title-hidden');
});
$(".dc-previous-btn").mouseleave(function(){
    $(".dc-nav-previous-title").addClass('dc-nav-title-hidden');
});
$(".dc-next-btn").mouseenter(function () {
    $(".dc-nav-next-title").removeClass('dc-nav-title-hidden');
});
$(".dc-next-btn").mouseleave(function(){
    $(".dc-nav-next-title").addClass('dc-nav-title-hidden');
});

window.addEventListener('resize', function() {
    setTocHeight();
    setAnchorOffset();
});

function setAnchorOffset(){
    var HeaderH = $("header").outerHeight();
    var HeaderGhostH = $(".dc-ghost").outerHeight();
    
    /*console.log(HeaderH + ' ' + HeaderGhostH);*/
    
    document.styleSheets[0].addRule('.dc-content h1[id]::before, .dc-content h2[id]::before, .dc-content h3[id]::before, .dc-content h4[id]::before, .dc-content h5[id]::before, .dc-content p[id]::before', 'height: ' + HeaderGhostH + 'px;');
    document.styleSheets[0].addRule('.dc-content h1[id]::before, .dc-content h2[id]::before, .dc-content h3[id]::before, .dc-content h4[id]::before, .dc-content h5[id]::before, .dc-content p[id]::before', 'margin-top: -' + HeaderGhostH + 'px;');
};

function setTocHeight(){
    var HeaderH = 54;
    
    var HeaderGhostH = $(".dc-ghost").outerHeight();
    
    var SearcheH = $(".dc-search").outerHeight(true);
    var FooterH = $(".dc-footer").outerHeight(true);
    
    if($(".dc-toc-btn").is(":visible")){
        var TOCBtnH = $(".dc-toc-btn").outerHeight(true);
    }else{
        var TOCBtnH = 0;
    }
    
    heightToc = window.innerHeight - (HeaderH + HeaderGhostH + SearcheH + FooterH + TOCBtnH - 50);
    heightSideBar = window.innerHeight - HeaderH;
    $('#sidebarMenu').css({
        'height': heightSideBar + 'px'
    });
    $('#sidebarMenu .dc-nav').css({
        'height': heightToc + 'px'
    });
    $('#matches').css({
        'height': heightToc + 'px'
    });
};



var offset = $('header').offset();
var navParent = $('div.dc-ghost');
var nav = $('header');

if (window.pageYOffset > offset.top) {
    $('div.dc-ghost').show();
    nav.css({'position': 'fixed', 'top': 0});
} else {
    $('div.dc-ghost').hide();
    nav.css({'position': 'static', 'top': ''});
}


window.addEventListener('scroll', function() {

    if (window.pageYOffset > offset.top) {
        $('div.dc-ghost').show();
        $('.dc-backtotop').show();
        nav.css({'position': 'fixed', 'top': 0});
    } else {
        $('div.dc-ghost').hide();
        $('.dc-backtotop').hide();
        nav.css({'position': 'static', 'top': ''});
    }
});

// SHARE
    $('.dc-headline-link').each(function () {
        $(this).append( "<i class='fas fa-link'></i><span class='dc-tooltiptext'>copy the link</span><span class='dc-tooltiptextcopied'>link copied!</span>" );
    });

    $('.dc-headline-link').click(function () {
        var url = window.location;
        url = url.protocol + '//' + url.host + url.pathname + url.search + '#' + $(this).attr('id').substr(5);
        
        var dummy = document.createElement('input'),
    		text = url;
    
    	document.body.appendChild(dummy);
    	dummy.value = text;
    	dummy.select();
    	document.execCommand('copy');
    	document.body.removeChild(dummy);
    	
        $(this).children('.dc-tooltiptextcopied').css("visibility", "visible");
        
        setTimeout(function() {
             $('.dc-tooltiptextcopied').css("visibility", "hidden");
        }, 1000);
        
        /*window.location.href = url;*/
    });
    
    $('.dc-headline-link').on('touchend', function(){
        $(this).children('.dc-tooltiptext').css("visibility", "hidden");
    });
    
    $('.dc-div-headline-link').on('mouseenter', function(){ 
        $(this).children('.dc-headline-link').css("opacity", "1");
    });
    
    $('.dc-div-headline-link').on('mouseleave', function(){
        $(this).children('.dc-headline-link').css("opacity", "0");
    });

