
export function wordScorer(wordString:string):number{
    let wordScore = 0;
    for(let i = 0; i < wordString.length; ++i)
    {
        let myChar = wordString.charAt(i);
        switch(myChar)
        {
            case 'a'||'A':
            wordScore += 1;
            break;
            case 'b'||'B':
            wordScore += 3;
            break;
            case 'c'||'C':
            wordScore += 3;
            break;
            case 'd'||'D':
            wordScore += 2;
            break;
            case 'e'||'E':
            wordScore += 1;
            break;
            case 'f'||'F':
            wordScore += 4;
            break;
            case 'g'||'G':
            wordScore += 2;
            break;
            case 'h'||'H':
            wordScore += 4;
            break;
            case 'i'||'I':
            wordScore += 1;
            break;
            case 'j'||'J':
            wordScore += 8;
            break;
            case 'k'||'K':
            wordScore += 5;
            break;
            case 'l'||'L':
            wordScore += 1;
            break;
            case 'm'||'M':
            wordScore += 3;
            break;
            case 'n'||'N':
            wordScore += 1;
            break;
            case 'o'||'O':
            wordScore += 1;
            break;
            case 'p'||'P':
            wordScore += 3;
            break;
            case 'q'||'Q':
            wordScore += 10;
            break;
            case 'r'||'R':
            wordScore += 1;
            break;
            case 's'||'S':
            wordScore += 1;
            break;
            case 't'||'T':
            wordScore += 1;
            break;
            case 'u'||'U':
            wordScore += 1;
            break;
            case 'v'||'V':
            wordScore += 4;
            break;
            case 'w'||'W':
            wordScore += 4;
            break;
            case 'x'||'X':
            wordScore += 8;
            break;
            case 'y'||'Y':
            wordScore += 4;
            break;
            case 'z'||'Z':
            wordScore += 10;
            break;
            default:
            break;
        }
    }
    return wordScore;
}

export default wordScorer;