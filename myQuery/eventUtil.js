EventUtil = {
	addHandler: function(element, type, handle){
		if (element.addEventListener) {
			element.addEventListener(type, handle, false);
		}
		else if (element.attachEvent) {
			element.attachEvent('on'+type, handle);
		}
		else {
			element['on' + type] = handle;
		}
	}
	,

	removeHandler: function(){
		if (element.removeEventListener) {
			element.removeEventListener(type, handle, false);
		}
		else if (element.detachEvent) {
			element.detachEvent('on' + type, handle);
		}
		else {
			element['on' + type] = null;
		}
	},

	getEvent: function(event){
		return event ? event : window.event;
	},

	preventDefault: function(event){
		if (event.preventDefault) {
			event.preventDefault();
		}
		else {
			event.returnValue = false;
		}
	},

	stopPropagation: function(event){
		if (event.stopPropagation) {
			event.stopPropagation();
		}
		else {
			event.cancelBubble = true;
		}
	},

	getTarget: function(event){
		return event.target || event.srcElement;
	}
}

