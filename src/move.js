class Move {

    constructor(player, startSquare, EndSquare, piece, capturedPiece, abandon, command) 
    {
        this.player = player;
        this.startSquare = startSquare;
        this.endSquare = EndSquare;
        this.piece = piece;
        this.capturedPiece = capturedPiece;
        this.abandon = abandon;
    }
}

module.exports = Move;

