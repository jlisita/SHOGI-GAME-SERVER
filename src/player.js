class Player {

    constructor(name, number)
    {
        this.name = name;
        this.number = number;
        this.pieces = new Array();
        this.capturedPieces = new Array();
        this.command = "";
        this.isAbandoning = false;
        this.hasWon = false;
        this.moves = [];
    }

    getCommand()
    {
        return this.command;
    }

    getNumber()
    {
        return this.number;
    }

    getName()
    {
        return this.name;
    }

    getHasWon()
    {
        return this.hasWon;
    }

    addPiece(piece)
    {

    }
    
    isAbandoning()
    {

    }

    enterCommand()
    {

    }
}

module.exports = Player;