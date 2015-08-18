(function(global, $){

	var jsonDataPromise = fetchData();

	function init(){
		jsonDataPromise.then(render);
	}

	function fetchData() {
		return $.getJSON('game-of-thrones.json');
	}

	function render(data) {
		var template = $('#houses').html();
		$('body').append(Handlebars.compile(template)(data));
	}

	$(init);

})(this, $)