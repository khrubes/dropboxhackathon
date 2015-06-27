var ElementHandler = (function (ElementHandler) {
  
	ElementHandler.handleHTMLElement = function(element) {
	    console.log("ElementHandler.handleHTMLElement"+ element);
	    switch (element.tagName) {
	    case "IMG":
		console.log("Making images not focusable.");
		element.setAttribute("alt", "");
		element.setAttribute("tabIndex", -1);
		break;
	    }
	};
	return ElementHandler;

} (ElementHandler || {}));
