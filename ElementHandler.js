var ElementHandler = (function (ElementHandler) {

    ElementHandler.handleDocument = function() {
    	var speak_elements = [];
    	var speak_text = [];
		var all = document.getElementsByTagName("*");
		for (var i=0, max=all.length; i < max; i++) {
	    	this.handleHTMLElement(all[i]);
	    	switch(all[i].getAttribute("id")) {
		    	case "sign-in":
		    		all[i].setAttribute("tabIndex", 0);
	    			speak_elements[0] = all[i];
	    			speak_text[0] = "Sign in link";
	    			break;
	    }
	   	for (var i=0, max=speak_elements.length; i < max; i++) {
	   		// call speak(speak_elements[i], speak_text[i]);
	   	}
	}
	
    }

    ElementHandler.handleHTMLElement = function(element) {
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
