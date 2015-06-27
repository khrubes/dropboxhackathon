var ElementHandler = (function (ElementHandler) {
  
	ElementHandler.handleHTMLElement = function(element) {
	    console.log("ElementHandler.handleHTMLElement"+ element);
	    switch (element.tagName) {
	    case "IMG":
		element.attr("alt", "")
		break;
	    }
	};
	return ElementHandler;

} (ElementHandler || {}));
