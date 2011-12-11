var Movie = function()
{
	this.sName = '';
	this.nMinutes = 0;
	this.sDirector = '';
	this.aActors = [];
	this.sDescription = '';
};
Movie.prototype.setName = function(sName){
	this.sName = sName;
};
Movie.prototype.setMinutes = function(nMinutes){
	this.nMinutes = nMinutes;
};
Movie.prototype.setDirector = function(sDirector){
	this.sDirector = sDirector;
};
Movie.prototype.setActors = function(aActors){
	this.aActors = aActors;
};
Movie.prototype.setDescription = function(sDescription){
	this.sDescription = sDescription;
};