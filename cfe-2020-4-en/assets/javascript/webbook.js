$(document).ready(function() {

    //Change the scroll of the TOC into the current page
    var currentChapterID = $(".web_article div:first .web_offset:first").attr('id');
    var currentItemTocID = 'toc-' + currentChapterID;
    
    var scrollTopFirstDiv = $(".web_fullheader").offset().top;

    if ($("#web_pubtitle")[0]){
        $(document).attr("title", $("#web_pubtitle").text() + " – " + $(".web_end-article-title").text());
    }

    setTocHeight();
    ghostDesign();
    
    if($(".web_btn-toc-content").length > 0){
        $('.web_btn-toc-content').animate({
            scrollTop: $('#' + currentItemTocID).offset().top - $('.web_btn-toc-content').offset().top - 20
        }, 500);        
    }

    $(window).load(function(){
        if(typeof $("#worldmap")[0] !== 'undefined'){
            var $svgDOM = $("#worldmap")[0].contentDocument.documentElement;
            var $countryList = $(".web_countries_list .web_pills");
            var graph = $svgDOM.getElementById("fullgraph");
            var counter = 1;
            
            // Size of the map
            var width = 1008.3;
            var height = 650.9;
            // X and Y boundaries
            var westLong = -169.6;
            var eastLong = 190.25;
            var northLat = 83.68;
            var southLat = -55.55;
            var pi = 3.1415926535898;
            var mapLatBottomDegree = southLat  * pi / 180;
            var mapLonDelta = eastLong - westLong;
           
            $countryList.each(function () {
                var $country = $(this);
                var $zone = $svgDOM.getElementById($country.attr("id"));
                var text = document.createTextNode($country.text());
    
                var longitude = $country.data("longitude");
                var latitude = $country.data("latitude");
                //alert(longitude);
                var lontest = (longitude - westLong) * (width / mapLonDelta);
            
                latitude = latitude * pi / 180;
                var worldMapWidth = ((width / mapLonDelta) * 360) / (2 * pi);
                var mapOffsetY = (worldMapWidth / 2 * Math.log((1 + Math.sin(mapLatBottomDegree)) / (1 - Math.sin(mapLatBottomDegree ))));    
                var lattest = height  - ((worldMapWidth / 2 * Math.log((1 + Math.sin(latitude )) / (1 - Math.sin(latitude )))) - mapOffsetY);
                
                var ray = $country.data("progress-value") / 3.5;
                if (ray < 5) {
                    ray = 5;
                };
    
                var newGraphic = document.createElementNS("http://www.w3.org/2000/svg", 'g');
                var newTitle = document.createElementNS("http://www.w3.org/2000/svg", 'title');
                var newBubble = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    
                newBubble.setAttribute("id",$country.attr("id") + 'ref');
                newBubble.setAttribute("class","web_bubble");
                newBubble.setAttribute("onmouseover","this.style.cursor = 'default'");
                newBubble.setAttribute("opacity","0.6");
                newBubble.setAttribute("r",ray + "px");
                newBubble.setAttribute("fill","#4d6778");
                newBubble.setAttribute("stroke","white");
                newBubble.setAttribute("stroke-width","0.1em");
                newBubble.setAttribute("transform","translate(" + lontest + " " + lattest + ")");
    
                newGraphic.appendChild(newTitle).appendChild(text);
                graph.appendChild(newGraphic).appendChild(newBubble);
                counter = counter + 1;
            });
            
            $('.web_pills').mouseover(function () {
                var $animeId = $(this).attr("id") + 'animate';
                var $circleId = $(this).attr("id") + 'ref';
                var newAnimate = document.createElementNS("http://www.w3.org/2000/svg", 'animateTransform');
    
                newAnimate.setAttribute("id",$animeId);
                newAnimate.setAttribute("attributeName", "transform");
                newAnimate.setAttribute("type", "scale");
                newAnimate.setAttribute("additive", "sum");
                newAnimate.setAttribute("from", "0 0");
                newAnimate.setAttribute("to", "1 1");
                newAnimate.setAttribute("dur", "0.4s");
                newAnimate.setAttribute("repeatCount", "1");
                newAnimate.setAttribute("begin", "mouseover");
    
                $svgDOM.getElementById($circleId).appendChild(newAnimate);
    
                $svgDOM.getElementById($circleId).setAttribute("fill","red");
                $svgDOM.getElementById($animeId).beginElement();
            });
    
            $(".web_pills").on("mouseleave", function () {
                var $animeId = $(this).attr("id") + 'animate';
                var $circleId = $(this).attr("id") + 'ref';
                $svgDOM.getElementById($circleId).setAttribute("fill","#4d6778");
                $svgDOM.getElementById($animeId).remove();
            });
            
            $svgDOM.style.cursor = "-moz-zoom-in";
            $svgDOM.style.cursor = "-webkit-zoom-in";
            $svgDOM.style.cursor = "zoom-in";
            
            $svgDOM.addEventListener('click', function() {
                if($(".web_countries").css("position") == "absolute"){
                    $(".web_countries").css("width","100%");
                    $(".web_countries").css("position", "static");
                    $(".web_countries").css("padding-bottom", "0");
                    $(".web_article").css("margin-bottom", "0");
                    $(this).css("cursor", "-moz-zoom-in");
                    $(this).css("cursor", "-webkit-zoom-in");
                    $(this).css("cursor", "zoom-in");
                }else{
                    $(".web_countries").css("width","50%");
                    $(".web_countries").css("position", "absolute");
                    $(".web_countries").css("padding-bottom", "0.4em");
                    $(".web_article").css("margin-bottom", "5em");
                    $(".web_countries").css("top", $(document).scrollTop() + 100);
                    $(".web_countries").css("left", "25%");
                    $(this).css("cursor", "-moz-zoom-out");
                    $(this).css("cursor", "-webkit-zoom-out");
                    $(this).css("cursor", "zoom-out");
                }
            });
        };

        $("link[href*='assets/css/print.css']").attr("media", "print");

        if(typeof $(".web_concept") !== 'undefined'){
            $(".web_concept").css('visibility', 'visible');
        }
        
        if(typeof $("#worldmap")[0] !== 'undefined'){
            $(".web_countries").css('visibility', 'visible');
            document.getElementById("web_divsvg").style.visibility = "visible";
        }

    });

    $(".web_toc-current-a").parent($(".web_toc-item")).find($(".web_toc-subsection-content")).show();
    $(".web_toc-current-a").parent($(".web_toc-item")).find($(".web_plusminus")).html('&#xf077;').css('color', 'orange');

    displayBlockQuote();
    highlightToc();

    function setTocHeight(){
        if ($(window).scrollTop() + $(window).height() > $(".web_end-article").offset().top) {
            $(".web_btn-toc-content").innerHeight($(".web_end-article").offset().top - $(window).scrollTop() - (2 * $(".web_end-article").innerHeight()) + 9); 
        }else if($(window).scrollTop() < $(".web_fullheader-ghost").offset().top){
            $(".web_btn-toc-content").innerHeight(($(window).scrollTop() + $(window).height()) - $(".web_fullheader").offset().top - $(".web_fullheader").innerHeight()); 
        }else{
            $(".web_btn-toc-content").css('height','90vh');
        }  
    };

    function ghostDesign(){
        $('.web_article').css('paddingTop', $('.web_fullheader').height() + 50);
    };

    function displayBlockQuote(){
        var windowScrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        $(".web_blockquote").each(function () {
            var blockQuoteOffset = $(this).offset().top;
            var blockQuoteHeight = $(this).height();
            if (windowScrollTop+(windowHeight/1.2) > blockQuoteOffset+blockQuoteHeight) {
                $(this).animate({
                opacity:"1"});
            }
        });
    };
    
    function getClosestValue(myArray, myValue){
    //optional
        var i = 0;
        
        while(myArray[++i] < myValue);
    
        return --i;
    }

    function highlightToc(){
        var cutoff = $(document).scrollTop() + ($(window).height() / 2);
        
        var componentTop = [];
        var component = [];
        
        // push each of the items we want to check against to an array with their position and selector
        $('.web_toc-current-a').each(function(){
            var itemTocID = $(this).parent('.web_toc-item').attr('id');
            var componentID = itemTocID.substring(4);
            
            
            if (typeof $(".web_offset[id='"+componentID+"']").attr('id') !== 'undefined'){
                var section = $(".web_offset[id='"+componentID+"']");
                component.push($(this));
                componentTop.push(section.position().top);
            }
        });
        
        if($(".web_btn-toc-content").length > 0){
            $('.web_toc-current-a').removeClass("web_toc-current-item");
            component[getClosestValue(componentTop, cutoff)].addClass("web_toc-current-item");
        }

    };

// OVERLAYS EVENTS

    // Disclaimer overlay
    $(".web_disclaimer-btn-close").click(function () {
        $(".web_disclaimer-overlay").hide();
    });
    
    $(".web_disclaimer-overlay").click(function () {
        $(".web_disclaimer-overlay").hide();
    });
    
    $(".web_disclaimer-div").click(function () {
        event.stopPropagation();
    });
    
    $(".web_disclaimer-open").click(function () {
        $(".web_disclaimer-overlay").show();
    });
    
    // Figure overlay
    $(".web_figure-btn-close").click(function () {
        $(".web_figure-overlay").hide();
    });
    
    $(".web_figure-overlay").click(function () {
        $(".web_figure-overlay").hide();
    });
    
    $(".web_figure-div").click(function () {
        event.stopPropagation();
    });
    
    $(".web_figure-open").click(function () {
        $(this).siblings('.web_figure-overlay').first().show();
    });
    
    // Metadata overlay
    $(".web_metadata-btn-close").click(function () {
        $(".web_metadata-overlay").hide();
    });
    
    $(".web_metadata-overlay").click(function () {
        $(".web_metadata-overlay").hide();
    });
    
    $(".web_btn-metadata-cancel").click(function () {
        $(".web_metadata-overlay").hide();
    });
    
    $(".web_metadata-div").click(function () {
        event.stopPropagation();
    });
    
    $(".web_titleheader-title").click(function () {
        $(".web_metadata-overlay").show();
        
        console.log("clickTItleDOILink");
        dataLayer.push({
            'event': 'customEvent',
            'customLabel': 'clickTItleDOILink',
            'customAction': 'clickLinksWebbook',
            'customCategory': 'engagement'
        });
    });
    
    $(".web_btn-metadata-goto-ilibrary").click(function () {
        console.log($(this).attr("href"));
        dataLayer.push({
            'event': 'customEvent',
            'customLabel': $(this).attr("href"),
            'customAction': 'outboundLink',
            'customCategory': 'navigation'
        });
    });

    $(".web_embed-cyc-btn-close").click(function () {
        $(".web_embed-cyc-overlay").hide();
    });
    
    $("span.web_embed-cyc-open").click(function () {
        $(this).closest(".web_figure-share").next($(".web_embed-cyc-overlay")).show();
    });

    $('.web_genpdf').click(function() {
        var url = window.location;
        window.open("https://web-pdf.herokuapp.com?url=" + encodeURIComponent(url));
	});

// CONCEPTS EVENTS
    $('.web_show_all_concept').click(function () {
        if ($(this).text() == "Show all") {
            $(".web_concept_low_relevance").show();
            $(this).text("Collapse");
        } else {
            $(".web_concept_low_relevance").hide();
            $(this).text("Show all");
        }
    });
    
    $('.web_show_all_countries').click(function () {
        if($(this).text()=="Show all"){
            $(".web_country_low_relevance").show();
            $(this).text("Collapse");
        }else{
            $(".web_country_low_relevance").hide();
            $(this).text("Show all");
        }
    });

    $(".web_progbar").click(function () {
        var label = $(this).find(".web_progbar_label").text();
        window.open("/search?value1=" + label + "&option1=quicksearch",'_blank');
    });

    $(".web_pills").click(function () {
        var label = $(this).text();
        window.open("/search?value1=" + label + "&option1=quicksearch",'_blank');
    });

    $('.web_progbar').each(function () {
        var $el = $(this);
        
        $el.progressbar({
            value: Math.round($el.data("progress-value")*100) / 100
        });
    });
    
    $('.web_pills').each(function () {
        var $el = $(this);
        var percentage = $el.data("progress-value");

        if (percentage <= 10) {
            percentage = 10;
        };

        var r = Math.floor((1 - (percentage / 100)) * (255 - 0) + 0);
        var g = Math.floor((1 - (percentage / 100)) * (255 - 104) + 104);
        var b = Math.floor((1 - (percentage / 100)) * (255 - 182) + 182);
        
        $el.css("background-color", "rgb(" + r + "," + g + "," + b + ")");
        if (percentage >= 40) {
            $el.css("color", "rgba(255, 255, 255)");
        } else {
            $el.css("color", "rgba(0, 0, 0)");
        };
    });

// SHARE
    $('.web_headline-link').click(function () {
        var url = window.location;
        url = url.protocol + '//' + url.host + '/' + url.pathname + url.search + '#' + $(this).attr('id').substr(5);
        
        var dummy = document.createElement('input'),
    		text = url;
    
    	document.body.appendChild(dummy);
    	dummy.value = text;
    	dummy.select();
    	document.execCommand('copy');
    	document.body.removeChild(dummy);
    	
        $(this).children('.web_tooltiptextcopied').css("visibility", "visible");
        
        console.log($(this).attr("data-customLabel"));
        dataLayer.push({
        'event': 'customEvent',
        'customLabel': $(this).attr("data-customLabel"),
        'customAction': 'copyAnchorLinksWebbook',
        'customCategory': 'engagement'
        });
    });
    
    $('.web_headline-link').mouseleave(function () {
        $('.web_tooltiptextcopied').css("visibility", "hidden");
    });

    $('.web_quote-share').click(function() {
        $(this).parent().next().slideToggle(500);
    });

//OTHERS
	$(window).on('resize', function(){
        ghostDesign();
        setTocHeight();
    });

    $(".web_embed-code-copy").click(function() {
    	$(this).prev(".web_embed-code").select();
    	document.execCommand('copy');
    	
        $(this).next('.web_embed-code-copied').fadeIn(0);
        $(this).next('.web_embed-code-copied').fadeOut(2000);
    });
    
    $(".web_btn-toc-div").click(function() {
        if ($(".web_btn-toc-content").css('display') == "none") {
            $(this).addClass("web_toc-open");
            $(this).removeClass("web_toc-close");
            $(".web_btn-toc-content").show();
        }else {
            $(this).addClass("web_toc-close");
            $(this).removeClass("web_toc-open");
            $(".web_btn-toc-content").hide();
        }
    });
    $(".web_article").click(function() {
        $(".web_countries").css("width","100%");
        $(".web_countries").css("position", "static");
        $(".web_countries").css("padding-bottom", "0");
        $(".web_article").css("margin-bottom", "0");
        if(typeof $("#worldmap")[0] !== 'undefined'){
            var $svgDOM = $("#worldmap")[0].contentDocument.documentElement;
            $svgDOM.style.cursor = "-moz-zoom-in";
            $svgDOM.style.cursor = "-webkit-zoom-in";
            $svgDOM.style.cursor = "zoom-in";
        }
    });
    $(".web_cross-close").click(function() {
        $(".web_btn-toc-content").slideToggle();
    });
    $(".web_social").hover(function() {
        $(this).find(".web_btn-slide-content").slideToggle();
    });
    $('.web_access').hover(function () {
        $('ul', this).slideToggle();
    });
    $('.web_access ul').click(function(e) {
        e.stopPropagation();
    });
    
    $(".web_toc-subsection-icon").click(function() {
      var icon = $(this).find("span.web_plusminus");
      var div = $(this).next("ul");
      
      if(div.is(':hidden')){
          div.show();
          icon.html('&#xf077;').css('color', 'orange');
      }else{
          div.hide();
          icon.html('&#xf078;').css('color', 'white');
      };      
    });

    $(".web_block-share-btn").click(function() {
        if($(this).next(".web_figure-share").css('display') == "none"){
            $(this).next(".web_figure-share").show();
        }else{
            $(this).next(".web_figure-share").hide();
        }
    });

    $("span.web_bibref").click(function() {
        anchro = 'bib-' + $(this).attr("id");
        $(".web_ref-pop").hide();
        $('#' + anchro + '').fadeIn(200);
	});
	
    $('.web_ref-pop-close').click(function() {
	   $('.web_ref-pop').fadeOut(300);	
	});
    // Accessibility A+ A-  //
	$('li .web_plus').click(function(){
        curSize= parseInt($('.web_main-container').css('font-size')) + 2; 
		if(curSize<=20)
        $('.web_main-container').css('font-size', curSize);
        });  
  		$('li .web_minus').click(function(){
		curSize= parseInt($('.web_main-container').css('font-size')) - 2;
  			if(curSize>=12)
        $('.web_main-container').css('font-size', curSize);
	});
    
// makes the menu bar appear on top after a delay of > 250
    $(window).scroll(function() {
        displayBlockQuote();
        highlightToc();
        if ($(window).scrollTop() > $(".web_fullheader-ghost").offset().top) {
            $('.web_banner').addClass('web_banner-fixed');
            $('.web_fullheader').addClass('web_btnmenu-fix');
            $('.web_titleheader').addClass('web_titleheader-fixed');
            $('.web_titleheader-oecd-logo').addClass('web_titleheader-oecd-logo-fixed');
            $('.web_titleheader-title').addClass('web_titleheader-title-fixed');
            $('#web_nav-page').addClass('web_nav-page-fixed');
        } else {
            $('#web_nav-page').removeClass('web_nav-page-fixed');
            $('.web_banner').removeClass('web_banner-fixed');
            $('.web_fullheader').removeClass('web_btnmenu-fix');
            $('.web_titleheader').removeClass('web_titleheader-fixed');
            $('.web_titleheader-oecd-logo').removeClass('web_titleheader-oecd-logo-fixed');
            $('.web_titleheader-title').removeClass('web_titleheader-title-fixed');
        }

        ghostDesign();
        setTocHeight();

        
    });
    
	$("a.web_a").click(function() {
    	var idToScroll = $(this).attr('href');
    	
    	if(idToScroll.startsWith("#figure")){
            fullscreenFigure($(idToScroll).parent().find('.web_fullscreen:first'));
            return false;
    	}else if(idToScroll.startsWith("#tablegrp")){
            fullscreenTable($(idToScroll).parent().find('.web_btn-view-full:first'));
            return false;
    	}else{
    	   navigationFn.goToSection(idToScroll);
    	}
    	
    });	
    
    $("a.web_toc-current-a").click(function() {
    	var idToScroll = $(this).attr('href');
    	
    	if($( window ).width() < $(".web_btn-toc-content").width() + $(".web_article").width()){
    	    $(".web_btn-toc-content").hide();
    	}
    	
    	navigationFn.goToSection(idToScroll);
    });	
    
    var navigationFn = {
        goToSection: function(id) {
            
            if($('.web_fullheader').hasClass('web_btnmenu-fix')){
                headerHeight = 0;
            }else{
                headerHeight = $(".web_fullheader").outerHeight(true);
            }
            
            $('html, body').animate({
                scrollTop: $(id).offset().top - headerHeight
            }, 1000);
        }
    }

		// ==========Table button 
	$('.web_btn-view').click(function() {
        $(this).find('i').toggleClass('fa-chevron-down fa-times').closest('.web_blk-expand').toggleClass('web_blk-expand-down');
        if($(this).attr('title') == 'close'){
            $(this).attr("title","expand");
        }else{
            $(this).attr("title","close");
        }
        $(this).closest('.web_btn-view').toggleClass('web_btn-view-colose');
    });

  $('.web_btn-view-full').click(function() {
        fullscreenTable($(this));
   });

    function fullscreenTable(fullscreenButton){
  		if(fullscreenButton.attr('title') == 'full view'){
            fullscreenButton.attr("title","close");
        }else{
            fullscreenButton.attr("title","full view");
        }
        fullscreenButton.find('i').toggleClass('fa-expand fa-times').closest('.web_blk-expand').toggleClass('web_blk-expand-full-page').removeClass('web_blk-expand-down');
        fullscreenButton.closest('.web_btn-view-full').toggleClass('web_btn-view-colose');
        $('.web_btn-view-full').prev('.web_btn-view').attr("title","expand").toggleClass('web_btn-view-hidden').removeClass('web_btn-view-colose').children('i.fa-times').toggleClass('fa-times  fa-chevron-down');
    };

// =========== Graphic view buton fullscreen 
    $(".web_fullscreen").click(function () {
        fullscreenFigure($(this));
    });
    
    function fullscreenFigure(fullscreenButton){
        event.preventDefault();
    
        if (fullscreenButton.children('i').hasClass('fa fa-expand'))
        {
            fullscreenButton.children('i').removeClass('fa fa-expand') && $('div.web_figure-button').css({'background-color': '#ec9a33'}) && $('div.web_figure-expand').css({'border-bottom': 'solid 3px #8ec64b', 'padding-bottom':'50%'}) && $('img').removeClass('web_img-max');
            fullscreenButton.children('i').addClass('fa fa-times').attr('title', 'Close');
        }
		else if (fullscreenButton.children('i').hasClass('fa fa-times'))
        {
            fullscreenButton.children('i').removeClass('fa fa-times') && $('div.web_figure-button').removeAttr('style') && $('div.web_figure-expand').removeAttr('style') && $('img').addClass('web_img-max');
            fullscreenButton.children('i').addClass('fa fa-expand').attr('title', 'Expand');
        }
		fullscreenButton.closest('.web_figure-container').toggleClass('web_figure-container-expanded');
    };

 // ==========social share action pop up 
    $(".web_share").on("click", function(e) {
        $(this).customerPopup(e);
    });
    
    $(".web_link-citation").click(function() {
        var urlCitation = $(this).find(".web_span-link-citation").text();
		window.open(urlCitation, 'Citation', 'width=400, height=200, scrollbars, resizable'); 
		return false;
    });
	
	$(document).keydown(function(e){
	    if (e.keyCode == 37) { 
	    	if(typeof $("a[class='fa fa-chevron-left web_link-btn']").attr("href") != "undefined"){
	    		document.location.href=$("a[class='fa fa-chevron-left web_link-btn']").attr("href");
				return false;
	    	}
	    }
        if (e.keyCode == 39) { 
	    	if(typeof $("a[class='fa fa-chevron-right web_link-btn']").attr("href") != "undefined"){
	    		document.location.href=$("a[class='fa fa-chevron-right web_link-btn']").attr("href");
				return false;
	    	}
	    }
	});

});


(function($) {
    /*
     * @param  {[object]} e           [Mouse event]
     * @param  {[integer]} intWidth   [Popup width defalut 500]
     * @param  {[integer]} intHeight  [Popup height defalut 400]
     * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
     */
    $.fn.customerPopup = function(e, intWidth, intHeight, blnResize) {

        // Prevent default anchor event
        e.preventDefault();

        // Set values for window
        intWidth = intWidth || '500';
        intHeight = intHeight || '400';
        strResize = (blnResize ? 'yes' : 'no');

        // Set title and open popup with focus on it
        var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
            strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
            objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
    }
    /* ========= */

}(jQuery));


