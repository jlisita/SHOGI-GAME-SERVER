class Player {

    constructor(name, number)
    {
        this.name = name;     // string
        this.number = number;   // int
        this.pieces = new Array();
        this.capturedPieces = new Array();
        this.command = ""; // string
        this.isAbandoning = false; // bool
        this.hasWon = false;      // bool
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

    setHasWon(value)
    {
        this.hasWon = value;
    }

    getIsAbandoning()
    {
        return this.isAbandoning;
    }

    setIsAbandoning(value)
    {
        this.isAbandoning = value;
    }

    // add a new piece to the pieces tab
    addPiece(piece)
    {
        this.pieces.push(piece);
    }
    
    // ask user to enter a command in console
    enterCommand()
    {
        const readline = require("readline-sync");
        this.command = readline.question("Enter a move ? ");
        
        if(this.command == "abandon")
        {
            this.abandonment = true;
        }
    }
}

module.exports = Player;