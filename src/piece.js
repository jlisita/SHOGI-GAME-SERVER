class Piece {

    constructor(player) 
    {
        this.player = player;
        this.captured = false;
        this.promoted = false;
        this.position = null;
    }

    getPlayer()
    {
        return this.player;
    }

    setPlayer(player)
    {
        this.player = player;
    }

    setPosition(square)
    {
        this.position = square;
    }
}

class King extends Piece
{
    isAllowedMove(board, i, j , k ,l)
    {
       
    }
}

class Rook extends Piece
{
    isAllowedMove(board, i, j , k ,l)
    {
       
    }
}

class Bishop extends Piece
{
    isAllowedMove(board, i, j , k ,l)
    {
       
    }
}

class GoldGeneral extends Piece
{
    isAllowedMove(board, i, j , k ,l)
    {
       
    }
}

class SilverGeneral extends Piece
{
    isAllowedMove(board, i, j , k ,l)
    {
       
    }
}

class Knight extends Piece
{
    isAllowedMove(board, i, j , k ,l)
    {
       
    }
}

class Lance extends Piece
{
    isAllowedMove(board, i, j , k ,l)
    {
       
    }
}

class Pawn extends Piece
{
    isAllowedMove(board, i, j , k ,l)
    {
       
    }
}

module.exports = {Piece, King, Rook, Bishop, GoldGeneral, SilverGeneral, Knight, Lance, Pawn};