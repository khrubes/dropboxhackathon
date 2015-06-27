var ElementHandler = (function (ElementHandler) {

    ElementHandler.handleDocument = function() {
    	var speak_elements = [];
    	var speak_text = [];
		var all = document.getElementsByTagName("*");
		for (var i=0, max=all.length; i < max; i++) {
	    	this.handleHTMLElement(all[i]);
	    	switch(all[i].getAttribute("id")) {
		    	case "sign-in":
		    		all[i].setAttribute("tabIndex", 1);
	    			speak_elements[0] = all[i];
	    			speak_text[0] = "Sign in link";
	    			break;
	    		case "pyxl7639130046151584940":
	    			all[i].setAttribute("tabIndex", 2);
	    			speak_elements[1] = all[i];
	    			speak_text[1] = "Sign up. Enter name."
	    			break;
	    		case "pyxl7554087131990313027":
	    			all[i].setAttribute("tabIndex", 3);
	    			speak_elements[2] = all[i];
	    			speak_text[2] = "Enter last name";
	    			break;
	    		case "pyxl3381044811436792095":
	    			all[i].setAttribute("tabIndex", 4);
	    			speak_elements[3] = all[i];
	    			speak_text[3] = "Enter email";
	    			break;
	    		case "pyxl8239182193694702555":
	    			all[i].setAttribute("tabIndex", 5);
	    			speak_elements[4] = all[i];
	    			speak_text[4] = "Enter password";
	    			break;
	    		case "pyxl819687647070601317":
	    			all[i].setAttribute("tabIndex", 6);
	    			speak_elements[5] = all[i];
	    			speak_text[5] = "I agree checkbox, unchecked";
	    			break;
	    		case ""
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
