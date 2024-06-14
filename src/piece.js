class Piece {

    constructor(player) 
    {
        this.player = player;   // Player
        this.captured = false;  // boolean
        this.promoted = false;  // boolean
        this.position = null;   // Square
    }

    // accessors

    getPlayer()
    {
        return this.player;
    }

    setPlayer(player)
    {
        this.player = player;
    }

    getCaptured()
    {
        return this.captured;
    }

    setCaptured(captured)
    {
        this.captured = captured;
    }

    getPromoted()
    {
        return this.promoted;
    }

    setPromoted(promoted)
    {
        this.promoted = promoted;
    }

    getPosition()
    {
        return this.position;
    }

    setPosition(position)
    {
        this.position = position;
    }
}

// classes who inherit from Piece

class King extends Piece
{
    // return true the position change from (i,j) to (k,l) is compliant with King movement rule  
    isAllowedMove(board, i, j , k ,l)
    {
        return isOneSquare(k-i,l-j);
    }
    // return string used to display the King piece in console for testing
    toStr()
    {
        if(this.player.number == 1 )
        {
            return "E⭣";
        }
        else
        {
            return "E⭡";   
        }
    }
}

class Rook extends Piece
{
    // return true the position change from (i,j) to (k,l) is compliant with Rook movement rule  
    isAllowedMove(board, i, j , k ,l)
    {
        if(!board.isEmptyBetween(i,j,k,l))
        {
            return false;
        }
        return isLateral(k-i,l-j);
    }
    // return string used to display the Rook piece in console for testing
    toStr()
    {
        if(this.player.number == 1 )
        {
            return "R⭣";
        }
        else
        {
            return "R⭡";   
        }
    }
}

class Bishop extends Piece
{
    // return true the position change from (i,j) to (k,l) is compliant with Bishop movement rule  
    isAllowedMove(board, i, j , k ,l)
    {
        if(!board.isEmptyBetween(i,j,k,l))
        {
            return false;
        }
        return isDiagonal(k-i,l-j);   
    }
    // return string used to display the Bishop piece in console for testing
    toStr()
    {
        if(this.player.number == 1 )
        {
            return "B⭣";
        }
        else
        {
            return "B⭡";   
        }
    }
}

class GoldGeneral extends Piece
{
    // return true the position change from (i,j) to (k,l) is compliant with Gold General movement rule  
    isAllowedMove(board, i, j , k ,l)
    {
        if(this.getPlayer().getNumber() == 1)
        {
            return ( ( (k-i == -1) && ((l-j == -1) || (l-j == 0) || (l-j == 1)) ) 
        || ( (k-i == 0) && ( (l-j == -1) || (l-j == 1) ) ) 
        || ( (k-i == 1) && (l-j == 0) ) )
        }
        else
        {
            return ( ( (k-i == 1) && ((l-j == -1) || (l-j == 0) || (l-j == 1)) ) 
        || ( (k-i == 0) && ( (l-j == -1) || (l-j == 1) ) ) 
        || ( (k-i == -1) && (l-j == 0) ) )
        }
    }
    // return string used to display the  Gold General piece in console for testing
    toStr()
    {
        if(this.player.number == 1 )
        {
            return "G⭣";
        }
        else
        {
            return "G⭡";   
        }
    }
}

class SilverGeneral extends Piece
{
    // return true the position change from (i,j) to (k,l) is compliant with Silver General movement rule  
    isAllowedMove(board, i, j , k ,l)
    {
        if(this.getPlayer().getNumber() == 1)
        {
            return ( ( (k-i == 1) && ( (l-j == -1) || (l-j == 0) || (l-j == 1) ) ) 
        || ( (k-i == -1) && ( (l-j == -1) || (l-j == 1) ) ) )
        }
        else
        {
            return ( ( (k-i == -1) && ( (l-j == -1) || (l-j == 0) || (l-j == 1) ) ) 
        || ( (k-i == 1) && ( (l-j == -1) || (l-j == 1) ) ) )
        }
    }
    // return string used to display the Silver General piece in console for testing
    toStr()
    {
        if(this.player.number == 1 )
        {
            return "S⭣";
        }
        else
        {
            return "S⭡";   
        }
    }
}

class Knight extends Piece
{
    // return true the position change from (i,j) to (k,l) is compliant with Knight movement rule  
    isAllowedMove(board, i, j , k ,l)
    {
        if(this.getPlayer().getNumber() == 1)
        {
            return ((k-i== 2) && ((l-j==1) || (l-j==-1))); 
        }
        else
        {
            return ((k-i== -2) && ((l-j==1) || (l-j==-1))); 
        }
    }
    // return string used to display the Knight piece in console for testing
    toStr()
    {
        if(this.player.number == 1 )
        {
            return "K⭣";
        }
        else
        {
            return "K⭡";   
        }
    }
}

class Lance extends Piece
{
    // return true the position change from (i,j) to (k,l) is compliant with Lance movement rule  
    isAllowedMove(board, i, j , k ,l)
    {
        if(!board.isEmptyBetween(i,j,k,l))
        {
            return false;
        }
        if(this.getPlayer().getNumber() == 1)
        {
            return isForward(k-i,l-j);
        }
        else
        {
            return isBack(k-i,l-j);
        }
              
    }
    // return string used to display the Lance piece in console for testing
    toStr()
    {
        if(this.player.number == 1 )
        {
            return "L⭣";
        }
        else
        {
            return "L⭡";   
        }
    }
}

class Pawn extends Piece
{
    // return true the position change from (i,j) to (k,l) is compliant with Pawn movement rule  
    isAllowedMove(board, i, j , k ,l)
    {
        if(this.getPlayer().getNumber() == 1)
        {
            return (k-i == 1) && (l-j == 0);
        }
        else
        {
            return (k-i == -1) && (l-j == 0);
        }
    }
    // return string used to display the Pawn piece in console for testing
    toStr()
    {
        if(this.player.number == 1 )
        {
            return "P⭣";
        }
        else
        {
            return "P⭡";   
        }
    }
}

function isForward(i, j)
{
	return	(i>0) && (j==0);
}

function isBack(i, j)
{
	return (i<0) && (j==0);
}

function isLeft(i, j)
{
	return (i==0) && (j<0);
}

function isRight(i, j)
{
	return (i==0) && (j>0);
}

function isForwardRight(i, j)
{
	return (i>0) && (j>0) && (i==j);
}

function isForwardLeft(i, j)
{
	return (i>0) && (j<0) && (i==-j);
}

function isBackRight(i, j)
{
	return (i<0) && (j>0) && (i==-j);
}
function isDiagonal(i, j)
{
	return isForwardRight(i,j) || isForwardLeft(i,j) || isBackRight(i,j) || isBackLeft(i,j);
}

function isLateral(i, j)
{
	return isForward(i,j) || isBack(i,j) ||isLeft(i,j) || isRight(i,j);
}

function isOneSquare(i, j)
{
	return  ( ((i==1) || (i==-1))  && ( (j==0) || (j==1) || (j==-1) ) )  ||  ( (i==0) && ((j==1) || (j==-1)) );
}

module.exports = {Piece, King, Rook, Bishop, GoldGeneral, SilverGeneral, Knight, Lance, Pawn};