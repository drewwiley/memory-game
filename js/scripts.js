// All code will wait until the DOM is ready

$(document).ready(function(){
	var gridSize = 4;
var card= '<img src="img/penguin.jpg">';
var mgHTML = '';
	for (var i = 0; i < gridSize; i++){
			var mgHTML = '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
					 += '<div class="mg-front">'+card+'</div>';
					mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';



	}
$('.mg-contents').html(mgHTML);
});