class Square {

    constructor(row, column)
    {
        this.row = row;
        this.column = column;
        this.piece = null;
    }

    setPiece(piece)
    {
        this.piece = piece;
    }

    getPiece()
    {
        return this.piece
    }

    setRow(row)
    {
        this.row = row;
    }

    setColumn(column)
    {
        this.column = column;
    }

    removePiece()
    {

    }

    isOccupied()
    {
    
    }

    placePiece(piece)
    {

    }
}

module.exports = Square;