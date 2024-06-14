let {Board,rowIndexToInt, columnIndexToInt} = require("./board");
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

    // call playerTurn on each player while game is not ending 
    match()
    {
        this.init();
        this.status = Status.INPROGRESS;
	
        do
        {
            console.log(this.toStr());
            
            this.playTurn();

            this.updateStatus();

            if(this.status==Status.INPROGRESS)
            {
                this.rotatePlayer();
            }

	    }while(this.status == Status.INPROGRESS);

	    return 0;
    }

    // change currentPlayer
    rotatePlayer()
    {
        let tmp = this.currentPlayer;
        this.currentPlayer = this.nextPlayer;
        this.nextPlayer = tmp; 
    }

    // process command entered by the player
    playTurn()
    {
        let validMove = true;
        let validCommand= true; 
        do
        {
            do
            {
                this.currentPlayer.enterCommand();
            
                if(!validCommand)
                {
                    console.log("commande invalide");
                }

            }while(!validCommand && !this.currentPlayer.getIsAbandoning());

            if(this.currentPlayer.getIsAbandoning())
            {
                return 0;
            }
            else
            {
                validMove = this.nextMove();
            }
            console.log(`commande saisie ${this.currentPlayer.command}`);


        }while(!validMove);

        return 0;
    }

    // read move contained in command
    nextMove()
    {
        let command = this.currentPlayer.getCommand();
	    let i,j,k,l;
        i = rowIndexToInt((command)[0]);
        j = columnIndexToInt((command)[1]);
        k = rowIndexToInt((command)[3]);
        l = columnIndexToInt((command)[4]);
        if(!this.canMove(i,j,k,l))
        {
            return false;
        }

        this.makeMove(i,j,k,l);

        this.currentPlayer.moves.push(command);
        this.updateRecordedMoves(i,j,k,l);

        return true;
    }

    // test if the movement is possible
    canMove(i, j, k, l)
    {
    if(!this.board.isOccupiedSquare(i,j))
        {
            console.log("This square is empty")
            return false;
        }

        let piece = this.board.getPiece(i,j);
        if(piece.getPlayer().getNumber() != this.currentPlayer.getNumber())
        {
            console.log("This is an adverssary piece")
            return false;
        }

        if(this.board.isOccupiedSquare(k,l) && this.board.getPiece(k,l).getPlayer().getNumber() == this.currentPlayer.getNumber())
        {
            console.log("impossible to capture its own piece");
            return false;
        }

        if(!this.board.getPiece(i,j).isAllowedMove(this.board,i,j,k,l))
        {
            console.log("This move is not allowed for this piece");
            return false;
        }
        return true;
    }

    // execute move on the board
    makeMove(i, j, k, l)
    {
        let piece = this.board.removePiece(i,j);
        if(this.board.isOccupiedSquare(k,l))
        {
            let capturedPiece = this.board.removePiece(k,l);
            capturedPiece.setPlayer(this.currentPlayer);
            capturedPiece.isCaptured = true;
            this.currentPlayer.capturedPieces.push(capturedPiece);
        }
        this.board.placePiece(piece,k,l);
    }
    
    updateRecordedMoves(i,j,k,l)
    {
        this.moves.push(new Move(this.player1, 
        this.board.getSquare(i,j), this.board.getSquare(k,l),  
        this.board.getPiece(i,j), this.board.getPiece(k,l), this.currentPlayer.getIsAbandoning));
    }

    // initialisation of pieces of each player
    init()
    {
        // player 1 pieces initialisation

        let king1 = new King(this.player1);
        this.player1.addPiece(king1);
        this.board.placePiece(king1,0,4);

        let goldGeneral1 = new GoldGeneral(this.player1);
        this.player1.addPiece(goldGeneral1);
        this.board.placePiece(goldGeneral1,0,3);

        let goldGeneral2 = new GoldGeneral(this.player1);
        this.player1.addPiece(goldGeneral2);
        this.board.placePiece(goldGeneral2,0,5);

        let silverGeneral1 = new SilverGeneral(this.player1);
        this.player1.addPiece(silverGeneral1);
        this.board.placePiece(silverGeneral1,0,2);

        let silverGeneral2 = new SilverGeneral(this.player1);
        this.player1.addPiece(silverGeneral2);
        this.board.placePiece(silverGeneral2,0,6);

        let knight1 = new Knight(this.player1);
        this.player1.addPiece(knight1);
        this.board.placePiece(knight1,0,1);

        let knight2 = new Knight(this.player1);
        this.player1.addPiece(knight2);
        this.board.placePiece(knight2,0,7);

        let lance1 = new Lance(this.player1);
        this.player1.addPiece(lance1);
        this.board.placePiece(lance1,0,0);

        let lance2 = new Lance(this.player1);
        this.player1.addPiece(lance2);
        this.board.placePiece(lance2,0,8);

        let rook1 = new Rook(this.player1);
        this.player1.addPiece(rook1);
        this.board.placePiece(rook1,1,1);

        let bishop1 = new Bishop(this.player1);
        this.player1.addPiece(bishop1);
        this.board.placePiece(bishop1,1,7);

        for(let i = 0; i < 9; i++)
        {
            let pawn = new Pawn(this.player1);
            this.player1.addPiece(pawn);
            this.board.placePiece(pawn,2,i);
        }

        // player 2 pieces initialisation

        let king2 = new King(this.player2);
        this.player2.addPiece(king2);
        this.board.placePiece(king2,8,4);

        let goldGeneral3 = new GoldGeneral(this.player2);
        this.player1.addPiece(goldGeneral3);
        this.board.placePiece(goldGeneral3,8,3);

        let goldGeneral4 = new GoldGeneral(this.player2);
        this.player1.addPiece(goldGeneral4);
        this.board.placePiece(goldGeneral4,8,5);

        let silverGeneral3 = new SilverGeneral(this.player2);
        this.player1.addPiece(silverGeneral3);
        this.board.placePiece(silverGeneral3,8,2);

        let silverGeneral4 = new SilverGeneral(this.player2);
        this.player1.addPiece(silverGeneral4);
        this.board.placePiece(silverGeneral4,8,6);

        let knight3 = new Knight(this.player2);
        this.player1.addPiece(knight3);
        this.board.placePiece(knight3,8,1);

        let knight4 = new Knight(this.player2);
        this.player1.addPiece(knight4);
        this.board.placePiece(knight4,8,7);

        let lance3 = new Lance(this.player2);
        this.player1.addPiece(lance3);
        this.board.placePiece(lance3,8,0);

        let lance4 = new Lance(this.player2);
        this.player1.addPiece(lance4);
        this.board.placePiece(lance4,8,8);

        let bishop2 = new Bishop(this.player2);
        this.player2.addPiece(bishop2);
        this.board.placePiece(bishop2,7,7);

        let rook2 = new Rook(this.player2);
        this.player2.addPiece(rook2);
        this.board.placePiece(rook2,7,1);

        for(let i = 0; i < 9; i++)
        {
            let pawn = new Pawn(this.player2);
            this.player2.addPiece(pawn);
            this.board.placePiece(pawn,6,i);
        }
    }

    // return string used to display the game in console for testing
    toStr()
    {
        let str = "";
        str += this.board.toStr();
        str += `\n\n${this.currentPlayer.getName()} turn:`;
        str += `\nLast moves: `
        this.currentPlayer.moves.forEach((move) => {str += move+ ", "});
        str += "\nCaptured pieces: ";
        this.currentPlayer.capturedPieces.forEach((piece) => {str+=piece.toStr() + ", "});
        return str;
    }
}

module.exports = Game;