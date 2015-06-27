
var OrderController = {
	order: function() {
		console.log("OrderController.order function called");
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

	