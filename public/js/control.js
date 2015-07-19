$(function() {
	
	eval($.turtle());

	$('ul.connectedSortable').sortable({
		connectWith: 'ul',
		cursor: 'move',
		cursorAt: {
			left: -10,
			top: 10
		}
    });

   
    $('#slider').slider(
		{
			min: 1,
			max: 100,
			value: 20,
			orientation: 'horizontal',
			range: 'min',
			animate: true,
		}
	)
	$('#slider').css('background', '#FFFFFF').css('border', '1px solid white');
	$('#slider .ui-slider-range').css('background', '#FFFFFF');

	$("#play-pause").click(
		function() {
			$('.fa-play').toggleClass('fa-pause');
		}
	)

	var commands = [];
	$('.fa-play').click(
		function() {
			
		}
	);
});
    
   
	
