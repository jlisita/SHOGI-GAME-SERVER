let Board = require("./board");
let Player = require("./player");
let {King,Rook,Bishop,GoldGeneral,SilverGeneral,Knight,Lance,Pawn} = require("./piece");
let Move = require('./move');

const Result = Object.freeze({
    PLAYER1WIN: 0,
    PLAYER2WIN: 1,
    DRAWN: 2,
    PAT: 3,
});

const Status = Object.freeze({
    PENDING: 0,
    INPROGRESS: 1,
    ENDED: 2,
});

class Game {

    constructor(board, player1, player2)
    {
        this.board = new Board();
        this.player1 =new Player("player1",1);
        this.player2 = new Player("player2",2);
        this.currentPlayer = this.player1;
        this.nextPlayer = this.player2;
        this.status = Status.PENDING;
        this.result = null;
        this.moves = [];
    }

    init()
    {

    }

    updateStatus()
    {

    }

    match()
    {

    }


    rotatePlayer()
    {

    }

    playTurn()
    {

    }

    nextMove()
    {

    }

    canMove(i, j, k, l)
    {

    }

    makeMove(i, j, k, l)
    {

    }
    
    updateRecordedMoves(i,j,k,l)
    {

    }

    toStr()
    {
        
    }
}

module.exports = Game;