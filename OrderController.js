
var OrderController = {
	order: function(list) {
		if	(list && list instanceof Array){
			for( var i=0; i<list.length; i++){
				console.log(list[i]);
				(list[i]).attr('tabindex', i + 1);
			}
		}
	},
	getHomePageList: function() {
		var elements = new Array();
		elements.push($("#sign-in"));
		elements.push($(".button-big sign-up button-secondary"));
		elements.push($("#download-launcher"));
		elements.push($("#try-dfb"));
		return elements;
	},
	
	getMydropboxList: function() {
	
	},
}; 

	