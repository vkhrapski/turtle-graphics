$(function() {
	
	eval($.turtle());

	$("#scenario").sortable({
            revert: true,
            stop: function(event, ui) {
                if(!ui.item.data('tag') && !ui.item.data('handle')) {
                    ui.item.data('tag', true);
                    ui.item.fadeTo(400, 1);
                }
            },
            out: function (event, ui) {
                var self = ui;
                ui.helper.off('mouseup').on('mouseup', function () {
                    $(this).remove();
                    self.draggable.remove();
                });
            }
        });
        $(".draggable").draggable({
            connectToSortable: '#scenario',
            helper: 'clone',
            revert: 'invalid'
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
    
   
	
