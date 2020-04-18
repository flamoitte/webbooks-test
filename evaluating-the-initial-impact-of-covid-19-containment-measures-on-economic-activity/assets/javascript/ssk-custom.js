SocialShareKit.init({
    facebook: {
        url: document.URL.replace(/#.*$/, ''),
        caption: document.title,
        picture: '',
    },
    twitter: {
        text: '',
        via: '@oecd',
    },
    onOpen: function(targetElement, network, networkUrl, popupWindow){
      if (network === 'facebook') {
   	  	console.log('facebook');
		dataLayer.push({
		'event': 'customEvent',
		'customLabel': 'facebook',
		'customAction': 'shareFullWebbook',
        'customCategory': 'engagement'
		});
	  }
      if (network === 'twitter') {
   	  	console.log('twitter');
		dataLayer.push({
		'event': 'customEvent',
		'customLabel': 'twitter',
		'customAction': 'shareFullWebbook',
        'customCategory': 'engagement'
		});
	  }
   	  else if (network === 'linkedin') {
   	  	console.log('linkedin');
   	  	dataLayer.push({
		'event': 'customEvent',
		'customLabel': 'linkedin',
		'customAction': 'shareFullWebbook',
        'customCategory': 'engagement'
		});
   	  }
    },
    title: document.title,
    url: document.URL.replace(/#.*$/, ""),
});

jQuery(document).ready(function () {
	jQuery('.ssk-sticky').removeClass('closed');
	jQuery(function() {
    jQuery('.stoggle-sticky').on('click', function() {
        if(!jQuery('.ssk-sticky').hasClass('closed')){
        	jQuery('.ssk-sticky').addClass('closed');
        } else {
        	jQuery('.ssk-sticky').removeClass('closed');
        }
    });
	});
	
});

$('.share-button').click(function() {
	if(jQuery(this).css('bottom') == '0px') {
		jQuery('.ssk-sticky').css('bottom', '0px');
		jQuery(this).css('bottom', '45px');
	} else {
		jQuery('.ssk-sticky').css('bottom', '-50px');
		jQuery(this).css('bottom', '0px');
	}
});