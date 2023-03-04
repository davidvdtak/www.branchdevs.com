String.prototype.trimStart = function(charlist) {
	if (charlist === undefined)
	charlist = "\s";

	return this.replace(new RegExp("^[" + charlist + "]+"), "");
};

String.prototype.trimEnd = function(charlist) {
	if (charlist === undefined)
	charlist = "\s";

	return this.replace(new RegExp("[" + charlist + "]+$"), "");
};