$(function() {
	var speedValue = 1;
	$('#slider').slider(
		{
			min: 1,
			max: 100,
			value: 1,
			orientation: 'horizontal',
			range: 'min',
			animate: true,
			slide: function( event, ui ) {
          		speedValue = ui.value;
          		$("#slider").val(speedValue);
          		speed(speedValue);
           	}
		}
	)
	$('#slider').css('background', '#FFFFFF').css('border', '1px solid white');
	$('#slider .ui-slider-range').css('background', '#FFFFFF');

	eval($.turtle());
	speed(1000);
	jumpto(0,220);
	pen('green');
	speed(speedValue);
	$('#scenario').sortable(
		{
            receive: function(e, ui) { sortableIn = 1; },
			over: function(e, ui) { sortableIn = 1; },
			out: function(e, ui) { sortableIn = 0; },
			beforeStop: function(e, ui) {
			   if (sortableIn == 0) { 
			      ui.item.remove(); 
			   } 
			}
	    }
    );
    $('.draggable').draggable(
    	{
	        connectToSortable: '#scenario',
	        helper: 'clone',
	        revert: 'invalid',
	        cursorAt: 
	        {	
	        	left: -20,
	        	top: 10
	        }
    	}
    );

	$('.fa-play').click(
		function() {
			runScript(getCommandsArray());
		}
	);

	$(".fa-pause").on('click', 
		function() {
		 	
    	}
	); 

	var runScript = function(commands) {
		$.each(commands, function(index, value){
      			eval(value);
	    });
	};

	$(".fa-stop").on('click', 
		function() {
	        location.reload(false);
    	}
	);
	
	var pushCommand = function(command, array, self) {
		switch(command){
			case 'show':
				array.push("pen('green');");
				break;
			case 'hide':
				array.push("pen(null);");
				break;
			case 'lt':
			case 'rt':
			case 'fd':
				var param = self.context.firstElementChild.value || 0;
				array.push(command + '(' + param + ');');
				break;
			default: break;
		}
		return array;
	};

	var getCommandsArray = function() {
		var command = '', repeats = 0, commands = [], repeatedCommands = [];
		$('#scenario>.draggable').each(
			function(index, element) {
				command = $(this).data('command');
                if(repeats == 0) {
	                if (command == 'repeat') {
	                    repeats = $(this).context.firstElementChild.value;
	                }
	                else {
						commands = pushCommand(command, commands, $(this));
                	}
                }				
                else {
                	if(command != 'end') {
            			repeatedCommands = pushCommand(command, repeatedCommands, $(this));
                	}
                	else {
                		while(repeats != 0) {
	                		commands = commands.concat(repeatedCommands);
	                		repeats--;
	                	}	
                	}
                }		
			}
		);
		return commands;
	};

});

