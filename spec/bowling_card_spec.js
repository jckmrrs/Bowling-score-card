describe('BowlingCard', function() {
  var bowling_card

  beforeEach(function() {
    bowling_card = new BowlingCard();
  })

    describe ('check total scores', function() {
      it ('can sum all of the previous scores', function() {
        bowling_card.turn(3,4)
        bowling_card.turn(2,1)
        bowling_card.turn(7,2)
        expect(bowling_card.total()).toEqual(19);
      });

      it ('can sum all of the previous scores with spare', function() {
        bowling_card.turn(3,7)
        bowling_card.turn(2,1)
        bowling_card.turn(7,2)
        expect(bowling_card.total()).toEqual(24);
      });

      it ('can sum all of the previous scores with one strike', function() {
        bowling_card.turn(10,0)
        bowling_card.turn(2,1)
        bowling_card.turn(7,2)
        expect(bowling_card.total()).toEqual(25);
      });

      it ('can sum all of the previous scores with two strike', function() {
        bowling_card.turn(10,0)
        bowling_card.turn(10,0)
        bowling_card.turn(7,2)
        expect(bowling_card.total()).toEqual(55);
      });

      it ('can sum all of the previous scores with two strike', function() {
        bowling_card.turn(5,5)
        bowling_card.turn(10,0)
        bowling_card.turn(7,2)
        expect(bowling_card.total()).toEqual(48);
      });

      it ('can sum all of the previous scores over 10 turns', function() {
        bowling_card.turn(10,0)
        bowling_card.turn(10,0)
        bowling_card.turn(7,2)
        bowling_card.turn(6,4)
        bowling_card.turn(3,5)
        bowling_card.turn(0,0)
        bowling_card.turn(10,0)
        bowling_card.turn(10,0)
        bowling_card.turn(10,0)
        bowling_card.turn(3,4)
        expect(bowling_card.total()).toEqual(153);
      });

    });

    describe ('Invalid turn', function() {
      it ('will raise an error is the total number of pins knocked down on a turn is greater than 10', function() {
        expect(function() { bowling_card.turn(8,7); }).toThrowError('Invalid turn!');
      });
    });

    describe ('turn total', function() {
      it ('can total the score of a given turn', function() {
        bowling_card.turn(10,0)
        bowling_card.turn(10,0)
        bowling_card.turn(7,2)
        expect(bowling_card.turn_total(2)).toEqual(9)
      });

      it ('can total the score of a given turn', function() {
        bowling_card.turn(10,0)
        bowling_card.turn(10,0)
        bowling_card.turn(7,2)
        expect(bowling_card.turn_total(0)).toEqual(27)
      });
    });

});