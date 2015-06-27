'use strict';

var OrderController = (function (OrderController) {
  
	OrderController.orderHomepage = function() {
		Console.log("OrderController.orderHomepage");
	};

	OrderController.orderMyDropbox = function() {
		Console.log("OrderController.orderMyDropbox");
	};
  
	return OrderController;

} (OrderController || {}));

