History = function(maxElements) {
	this.elements = [];
	this.currentElement = -1;
	this.maxElements = maxElements || -1;
};

History.prototype = {

	add : function(element) {
		this.elements.unshift(element);
		this.currentElement++;
		this.trimExtraElements();
		this.trimForward();
	},

	back : function() {
		var result;
		if (this.elements && this.currentElement - 1 >= 0) {
			this.currentElement = this.currentElement - 1;
			return this.elements[this.currentElement];
		}
		return result;
	},

	forward : function() {
		var result;
		if (this.elements && this.currentElement + 1 < this.elements.length) {
			this.currentElement = this.currentElement + 1;
			return this.elements[this.currentElement];
		}
		return result;
	},
	maxElements : function(maxElements) {
		this.maxElements = maxElements;
		this.trimExtraElements();
	},

	trimForward : function() {
		this.elements = this.elements.slice(0, this.currentElement + 1);
	},
	trimExtraElements : function() {
		if (this.maxElements < 0) {
			return;
		}
		var elCount = this.elements.length;
		if (elCount > this.maxElements) {
			this.currentElement = this.currentElement - (elCount - this.maxElements);
			this.elements = this.elements.slice(0, this.maxElements);
		}
	}
};
