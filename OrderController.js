
var OrderController = {
	order: function(list) {
		if	(list && list instanceof Array){
			for( var i=0; i<list.length; i++){
				console.log(list[i]);				
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


function speak(message){
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[10]; // Note: some voices don't support altering params
	msg.voiceURI = 'native';
	msg.volume = 1; // 0 to 1
	msg.rate = 1; // 0.1 to 10
	msg.pitch = 1; //0 to 2
	msg.text = message;
	msg.lang = 'en-US';
	speechSynthesis.speak(msg);
}

	