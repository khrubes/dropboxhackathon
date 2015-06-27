var ElementHandler = (function (ElementHandler) {
  
	ElementHandler.handleHTMLElement = function(element) {
		Console.log("ElementHandler.handleHTMLElement"+ element);
	};
  
	return ElementHandler;

} (ElementHandler || {}));