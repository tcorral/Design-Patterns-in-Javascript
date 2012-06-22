var Nullify = function(){};
Nullify.prototype.fillContent = function()
{
	var oTest1 = document.getElementById("test1");
	var oTest2 = document.getElementById("test2");
	var oTest3 = document.getElementById("test3");
	oTest1.onclick = function () {};
	oTest2.onclick = function () {};
	oTest3.onclick = function () {};

	oTest1.innerHTML = 'TEST 1';
	oTest2.innerHTML = 'TEST 2';
	oTest3.innerHTML = 'TEST 3';

	oTest1 = oTest2 = oTest3 = null;
};