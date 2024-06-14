class Square {

    constructor(row, column)
    {
        this.row = row;
        this.column = column;
        this.piece = null;
    }

    // accessors

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

    getRow()
    {
        return this.row;
    }

    setColumn(column)
    {
        this.column = column;
    }

    getcolumn()
    {
        return this.column;
    }

    // class Methods

    // remove the piece from the square and return it
    removePiece()
    {
        let piece = this.piece;
        this.piece = null;
        return piece;
    }

    // return true if there is a piece on this square, 
    //otherwise return false
    isOccupied()
    {
        return this.getPiece != null;
    }

    // place the piece on the square if it's empty and return true, 
    // otherwise return false
    placePiece(piece)
    {
        if(this.isOccupied())
        {
            return false;
        }
        else
        {
            this.piece = piece;
            return true;
        }
    }
}

module.exports = Square;