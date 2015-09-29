var Table = require('./table.js');
var Ship = require('./ship.js');

    describe('Table', function(){
		it('it should create a table',function(){
			var table= new Table(2,2);
			var actual= table.getField();
			var expected =4;
			expect(actual).toEqual(expected);
		});
        it('should create number of ships in Table', function(){
            var table = new Table(6,6);//create a new table with tam= 6x6
            var actRes = table._createShips();
            var expRes = parseInt((6*6)/20)+1;
			//the number of ships should be the int number of the logic(tamX*TamY/20)+1=2 ships
			expect(actRes).toEqual(expRes);
        });
		
		it('should shot in the same cell', function(){
            var table = new Table(8,8);
			//Steps to create a ship and post it in a place
			table._createShips();
			table._initField();
			table._placeShips();
			table._doShot(2,1);//this step shot in cell (2,1)
			var actRes = table._doShot(2,1);
            var expRes = 2;//the expect result should be the number 2 when the shot is in the same cell
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('should be do shot in a non existence place', function(){
            var table = new Table(5,5);
			//Steps
			table._createShips();
			table._initField();
			table._placeShips();
			var actRes = table._doShot(5,9);//doing a shot in a cell invalid
            var expRes = 0;
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('should be do shot a ship', function(){
            var table = new Table(8,8);
			//Steps
			table._createShips();
			table._initField();
			var ship = table._placeShips();
			var actRes = table._doShot(ship[1],ship[1]);
            var expRes = 1;
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('should be do a failed shot', function(){
            var table = new Table(8,8);
			//Steps
			table._createShips();
			table._initField();
			table._placeShips();
			var actRes = table._doShot(1,1);
            var expRes = 3;
            //Validation
			expect(actRes).toEqual(expRes);
        });
    });
