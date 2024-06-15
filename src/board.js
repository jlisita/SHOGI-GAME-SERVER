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

    // return the piece of the square on position (i,j)
    // return null otherwise
    getPiece(i,j)
    {
        return this.getSquare(i,j).getPiece();
    }

    // place the piece on square on position (i,j)
    placePiece(piece,i,j)
    {
        this.squares[i][j].placePiece(piece);
    }

     // remove and the piece on square on position (i,j)
     // otherwise return false
    removePiece(i,j)
    {
        return this.squares[i][j].removePiece();
    }

    // return true if there is a piece on the square on position (i,j), 
    //otherwise return false
    isOccupiedSquare(i,j)
    {
        return this.squares[i][j].isOccupied();
    }

    // return true if all the square between position(i,j) and position(k,l) of the board are empty
    // return false otherwise
    isEmptyBetween(i, j, k, l)
    {
        if(k-i==0) // horizontal move
        {
            if(l-j>0) // from left to right
            {
                for(let n=j+1;n<l;n++)
                {
                    if(this.isOccupiedSquare(i,n))
                        return false;
                }
            }
            else // from right to left
            {
                for(let n=j-1;n>l;n--)
                {
                    if(this.isOccupiedSquare(i,n))
                        return false;
                }
            }
        }
        else if(l-j==0) // vertical move
        {
            if(k-i>0) // from down to up
            {
                for(let m=i+1;m<k;m++)
                {
                    if(this.isOccupiedSquare(m,j))
                        return false;	
                }
            }
            else // from up to down
            {
                for(let m=i-1;m>k;m--)
                {
                    if(this.isOccupiedSquare(m,j))
                        return false;			
                }
            }
        }
        else // diagonal move
        {
            if(k-i>0 && l-j>0) // from down/left to up/right
            {
                for(let n=1;n<k-i;n++)
                {
                    if(this.isOccupiedSquare(i+n,j+n))
                        return false;
                }
            }
            else if(k-i>0 && l-j<0) // from down/right to up/left
            {
                for(let n=1;n<k-i;n++)
                {
                    if(this.isOccupiedSquare(i+n,j-n))
                        return false;
                }
            }
            else if(k-i<0 && l-j>0 ) // from up/left to down/right
            {
                for(let n=1;n<Math.abs(k-i);n++)
                {
                    if(this.isOccupiedSquare(i-n,j+n))
                        return false;
                }
            }
            else if(k-i<0 && l-j<0) // from up/right to down/left
            {
                for(let n=1;n<Math.abs(k-i);n++)
                {
                    if(this.isOccupiedSquare(i-n,j-n))
                        return false;
                }
            }
        }
	    return true;
    }

    // return string used to display the game board in console for testing
    toStr()
    {
        let str = "";
        let rowIndex = [1,2,3,4,5,6,7,8,9];

        let columnIndex= ['A','B','C','D','E','F','G','H','I']; 
        str += "\n";
        str += "  ";
        for(let j = 8; j>=0; j--)
        {
            str +=  "    " + rowIndex[j];
        }
        str +=  "\n   |";
        for(let j = 0; j < 9; j++)
        {
            str += "----|";
        }
        str += "\n";

        for(let i = 0; i < 9 ; i++)
        {
            str += "   | ";
            for(let j = 0; j < 9; j++)
            {
                if(this.isOccupiedSquare(i,j)==true)
                {
                    str += this.getPiece(i,j).toStr();
                    str += " | ";
                }
                else
                {
                    str += "   | ";
                }
            }
            str += columnIndex[i];
            str +=  "\n   |";
            for(let j = 0; j < 9; j++)
            {
                str += "----|";
            }
            str += "\n";
        }
        return str;
    }
}

// make conversion of column number of the board to column index in squares
function columnIndexToInt(c)
{
	let i;
	switch(c)
	{
		case '1':
			i=8;
			break;
		case '2':
			i=7;
			break;
		case '3':
			i=6;
			break;
		case '4':
			i=5;
			break;
		case '5':
			i=4;
			break;
		case '6':
			i=3;
			break;
		case '7':
			i=2;
			break;
		case '8':
			i=1;
			break;
        case '9':
            i=0;
            break;
		default:
			i = -1;
	}
	return i;
}

// make conversion of row letter of the board to row index in squares
function rowIndexToInt(c)
{
	let i;
	switch(c)
	{
		case 'a': case 'A':
			i=0;
			break;
		case 'b': case 'B':
			i=1;
			break;
		case 'c': case 'C':
			i=2;
			break;
		case 'd': case 'D':
			i=3;
			break;
		case 'e': case 'E':
			i=4;
			break;
		case 'f': case 'F':
			i=5;
			break;
		case 'g': case 'G':
			i=6;
			break;
		case 'h': case 'H':
			i=7;
			break;
        case 'i': case 'I':
            i=8;
            break; 
		default:
			i = -1;
	}
	return i;
}

module.exports = {Board, rowIndexToInt, columnIndexToInt};