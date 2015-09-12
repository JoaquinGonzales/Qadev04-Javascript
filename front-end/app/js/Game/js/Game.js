/**
 * Created by JoaquinGonzales on 8/28/2015.
 */
var GameBatleShip=function(name)
{
    var _name=name;
    this.maxnumShots=10;
    this.players=[];
    this.setName=function(newName)
    {
        _name=name;
    }
    this.getName=function()
    {
        return _name
    }
};
GameBatleShip.prototype.start= function()
{
    console.log('this is a game',this.getName());
}
GameBatleShip.prototype.createPlayers=function()
{
    var numPlayers=1;
    for(var i =0;i<numPlayers;i++)
    {
        var player = new Player('Player'+i);
        this.players.push(player);
    }
}