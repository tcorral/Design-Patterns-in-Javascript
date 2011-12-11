var TryFinally = function(){};
TryFinally.prototype.getContent = function()
{
	var oTest1 = document.getElementById("test1");
	var oTest2 = document.getElementById("test2");
	var oTest3 = document.getElementById("test3");

	try
	{
		return {
			test1: oTest1.innerHTML,
			test2: oTest2.innerHTML,
			test3: oTest3.innerHTML
		}
	}finally
	{
		oTest1 = oTest2 = oTest3 = null;
	}
};