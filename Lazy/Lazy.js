var Lazy = function (oContainer, sTextSpan, dTime)
{
	this.oContainer = oContainer;
	this.update(sTextSpan, dTime);
};
Lazy.prototype.addZero = function(nTime)
{
	return nTime < 10? '0' + nTime: nTime;
};
Lazy.prototype.getFormattedTime = function(dTime)
{
	return this.addZero(dTime.getHours()) + ":" + this.addZero(dTime.getMinutes()) + ":" + this.addZero(dTime.getSeconds());
};
Lazy.prototype.update = function(sTextSpan, dTime)
{
	var aHTML = [];
	aHTML.push("<div>");
		aHTML.push('<div>');
			aHTML.push('Not changed:');
			aHTML.push('<span>');
				aHTML.push(this.getFormattedTime(new Date()));
			aHTML.push("</span>");
		aHTML.push('</div>');
		aHTML.push("<span id='spanText'>");
			aHTML.push(sTextSpan);
		aHTML.push("</span>");
		aHTML.push("<span id='timeText'>");
			aHTML.push(this.getFormattedTime(dTime));
		aHTML.push("</span>")
	aHTML.push("</div>");
	this.oContainer.innerHTML = aHTML.join("");
	aHTML = null;
	this.update = function(sTextSpan, dTime)
	{
		var oText = document.getElementById("spanText");
		var oTime = document.getElementById("timeText");
		oText.innerHTML = sTextSpan;
		oTime.innerHTML = this.getFormattedTime(dTime);
		oText = oTime = null;
	};
};