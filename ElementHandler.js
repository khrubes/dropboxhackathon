var ElementHandler = (function (ElementHandler) {

    ElementHandler.handleDocument = function() {
	var all = document.getElementsByTagName("*");
	for (var i=0, max=all.length; i < max; i++) {
	    handleHTMLElement(all[i]);
	}
	
    }

    ElementHandler.handleHTMLElement = function(element) {
	console.log("ElementHandler.handleHTMLElement"+ element);
	switch (element.tagName) {
	case "IMG":
	    console.log("Making image not focusable.");
	    element.setAttribute("alt", "");
	    element.setAttribute("tabIndex", -1);
	    break;
	}
    };
    return ElementHandler;
    
} (ElementHandler || {}));
