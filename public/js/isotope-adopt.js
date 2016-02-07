$(document).ready(function() {
	$('.grid').isotope();

	$('button.filter').click(function(e) {
        e.preventDefault();
		var to_filter = $(this).attr('rel');
      $('button.filter').removeClass('active');
      $(this).addClass('active');
		if(to_filter == 'all') {
            $('.grid').isotope({filter: '.element-item'});
		} else {
            $('.grid').isotope({filter: to_filter});
		}

	});
});
