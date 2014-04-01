		
		$(function () {
  $('.animation-flipInX').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated flipInX');
    }
  });
 
  
  $('.animation-bounceInDown').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated bounceInDown');
    }
  });
  $('.animation-bounceInUp').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated bounceInUp');
    }
  });
  $('.animation-bounceInLeft').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated bounceInLeft');
    }
  });
   $('.animation-bounceInRight').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated bounceInRight');
    }
  });
 
  
  $('.animation-fadeInUp').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated fadeInUp');
    }
  });
  $('.animation-fadeInDown').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated fadeInDown');
    }
  });



  
});
		
$(document).ready(function() {
  
			var nice = $("html").niceScroll();  // The document page (body)
	
			$("#body").html($("#body").html()+' '+nice.version);
});
jQuery(document).ready(function(){

	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="assets/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			comments: $('#comments').val(),
			verify: $('#verify').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});

		return false;

	});

});