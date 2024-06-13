let Square = require("./square");

class Board {

    constructor()
    {
        this.squares = new Array();
        for(let i = 0; i < 9; i++)
            {
               this.squares[i]= new Array();
                for(let j = 0; j < 9; j++)
                    {
                        this.squares[i].push(new Square(i,j));
                    }
            }
    }

    getSquare(i,j)
    {
        return this.squares[i][j];
    }

    getPiece(i,j)
    {

    }

    placePiece(piece,i,j)
    {

    }

    removePiece(i,j)
    {

    }

    isOccupiedSquare(i,j)
    {

    }

    isEmptyBetween(i, j, k, l)
    {

    }

    toStr()
    {
       
    }
}

module.exports = {Board, rankIndexToInt, fileIndexToInt};