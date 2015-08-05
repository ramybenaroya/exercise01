(function(global, $){

	$.getJSON('game-of-thrones.json', function(data){
		var template = $('#houses').html();
		$('body').append(Handlebars.compile(template)(data));
	});

})(this, $)