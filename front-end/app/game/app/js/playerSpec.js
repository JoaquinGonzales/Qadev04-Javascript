var Player = require('./player.js')

    describe('Player', function(){
        xit('should be create a table for the player', function(){
            var player = new Player();
			//Steps
            var actRes = player.createTable(3,4);
            var expRes = 3*4;
            //Validation
            expect(actRes).toEqual(expRes);
        });
		it('should create a new player with name',function()
		{
			var player = new Player('pedro');
			var actual= player._getName();
			var actual= 'pedro';
			expect(actual).toEqual(actual);
		});
    });

