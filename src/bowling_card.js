class BowlingCard {

  constructor() {
    this._turn = 0;
    this._total = 0;
    this._score = [];

  }

  strike() {
    return this._score[this._turn - 1][0] === 10;
  }

  double_strike() {
    return this._score[this._turn - 2][0] === 10;
  }

  spare() {
    return this._score[this._turn - 1][0] + this._score[this._turn - 1][1] === 10;
  }

  total() {
    return this._total;
  }

  get_turn() {
    return this._turn
  }

  turn(roll1, roll2) {
    this._score[this._turn] = [roll1, roll2, 0]
    // Only check for strike when it is not your first turn
    if (this._turn >= 1){
      if(this.strike()) {
        this._score[this._turn -1][2] += (roll1 + roll2)
        // Only check for strike if at least third turn
        if (this._turn >= 2){
          if(this.double_strike()) {
            this._score[this._turn -2][2] += roll1
          }
        }
      }else if(this.spare()) {
        this._score[this._turn -1][2] += roll1
      }
    }
    this._turn += 1;
    this.totalScores();
  }

  bonus_turn(roll1, roll2) {
    if(this._score[8][0] == 10) {
      this._score[8][2] += roll1 
    }
    this._score[this._turn] = [roll1, roll2, 0]
    this._turn += 1;
    this.totalScores();
  }


  totalScores() {
    this._total = 0;
    for (var i = 0; i < this._turn; i++){
      this._total += (this._score[i][0] + this._score[i][1] + this._score[i][2]);
    }
  }

  turn_total(turn) {
    var sum = 0; 
    for (var j=0; j < turn + 1; j++) {
      for (var i=0; i<3; i++) {
        sum += this._score[j][i];
      }
    }
    return sum; 
  }

}