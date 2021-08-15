import Aimg from "../ScrabbleLetters/Scrabble-tile-A-wood-150x150.jpg";
import Bimg from "../ScrabbleLetters/Scrabble-tile-B-wood-150x150.jpg";
import Cimg from "../ScrabbleLetters/Scrabble-tile-C-wood-150x150.jpg";
import Dimg from "../ScrabbleLetters/Scrabble-tile-D-wood-150x150.jpg";
import Eimg from "../ScrabbleLetters/Scrabble-tile-E-wood-150x150.jpg";
import Fimg from "../ScrabbleLetters/Scrabble-tile-F-wood-150x150.jpg";
import Gimg from "../ScrabbleLetters/Scrabble-tile-G-wood-150x150.jpg";
import Himg from "../ScrabbleLetters/Scrabble-tile-H-wood-150x150.jpg";
import Iimg from "../ScrabbleLetters/Scrabble-tile-I-wood-150x150.jpg";
import Jimg from "../ScrabbleLetters/Scrabble-tile-J-wood-150x150.jpg";
import Kimg from "../ScrabbleLetters/Scrabble-tile-K-wood-150x150.jpg";
import Limg from "../ScrabbleLetters/Scrabble-tile-L-wood-150x150.jpg";
import Mimg from "../ScrabbleLetters/Scrabble-tile-M-wood-150x150.jpg";
import Nimg from "../ScrabbleLetters/Scrabble-tile-N-wood-150x150.jpg";
import Oimg from "../ScrabbleLetters/Scrabble-tile-O-wood-150x150.jpg";
import Pimg from "../ScrabbleLetters/Scrabble-tile-P-wood-150x150.jpg";
import Qimg from "../ScrabbleLetters/Scrabble-tile-Q-wood-150x150.jpg";
import Rimg from "../ScrabbleLetters/Scrabble-tile-R-wood-150x150.jpg";
import Simg from "../ScrabbleLetters/Scrabble-tile-S-wood-150x150.jpg";
import Timg from "../ScrabbleLetters/Scrabble-tile-T-wood-150x150.jpg";
import Uimg from "../ScrabbleLetters/Scrabble-tile-U-wood-150x150.jpg";
import Vimg from "../ScrabbleLetters/Scrabble-tile-V-wood-150x150.jpg";
import Wimg from "../ScrabbleLetters/Scrabble-tile-W-wood-150x150.jpg";
import Ximg from "../ScrabbleLetters/Scrabble-tile-X-wood-150x150.jpg";
import Yimg from "../ScrabbleLetters/Scrabble-tile-Y-wood-150x150.jpg";
import Zimg from "../ScrabbleLetters/Scrabble-tile-Z-wood-150x150.jpg";

export function wordScorer(wordString:string){
    let wordScore = 0;
    for(let i = 0; i < wordString.length; ++i)
    {
        let myChar = wordString.charAt(i);
        switch(myChar)
        {
            case 'a':
                wordScore += 1;
            break;
            case 'A':
                wordScore += 1;
            break;
            case 'b':
                wordScore += 3;
            break;
            case 'B':
                wordScore += 3;
            break;
            case 'c':
                wordScore += 3;
            break;
            case 'C':
                wordScore += 3;
            break;
            case 'd':
                wordScore += 2;
            break;
            case 'D':
                wordScore += 2;
            break;
            case 'e':
                wordScore += 1;
            break;
            case 'E':
                wordScore += 1;
            break;
            case 'f':
                wordScore += 4;
            break;
            case 'F':
                wordScore += 4;
            break;
            case 'g':
                wordScore += 2;
            break;
            case 'G':
                wordScore += 2;
            break;
            case 'h':
                wordScore += 4;
            break;
            case 'H':
                wordScore += 4;
            break;
            case 'i':
                wordScore += 1;
            break;
            case 'I':
                wordScore += 1;
            break;
            case 'j':
                wordScore += 8;
            break;
            case 'J':
                wordScore += 8;
            break;
            case 'k':
                wordScore += 5;
            break;
            case 'K':
                wordScore += 5;
            break;
            case 'l':
                wordScore += 1;
            break;
            case 'L':
                wordScore += 1;
            break;
            case 'm':
                wordScore += 3;
            break;
            case 'M':
                wordScore += 3;
            break;
            case 'n':
                wordScore += 1;
            break;
            case 'N':
                wordScore += 1;
            break;
            case 'o':
                wordScore += 1;
            break;
            case 'O':
                wordScore += 1;
            break;
            case 'p':
                wordScore += 3;
            break;
            case 'P':
                wordScore += 3;
            break;
            case 'q':
                wordScore += 10;
            break;
            case 'Q':
                wordScore += 10;
            break;
            case 'r':
                wordScore += 1;
            break;
            case 'R':
                wordScore += 1;
            break;
            case 's':
                wordScore += 1;
            break;
            case 'S':
                wordScore += 1;
            break;
            case 't':
                wordScore += 1;
            break;
            case 'T':
                wordScore += 1;
            break;
            case 'u':
                wordScore += 1;
            break;
            case 'U':
                wordScore += 1;
            break;
            case 'v':
                wordScore += 4;
            break;
            case 'V':
                wordScore += 4;
            break;
            case 'w':
                wordScore += 4;
            break;
            case 'W':
                wordScore += 4;
            break;
            case 'x':
                wordScore += 8;
            break;
            case 'X':
                wordScore += 8;
            break;
            case 'y':
                wordScore += 4;
            break;
            case 'Y':
                wordScore += 4;
            break;
            case 'z':
                wordScore += 10;
            break;
            case 'Z':
                wordScore += 10;
            break;
            default:
            break;
        }
    }
    return wordScore;
}

export function wordTiler(wordString:string){
    let htmlString = "<span>";
    let tileWidth = 50;
    for(let i = 0; i < wordString.length; ++i)
    {
        let myChar = wordString.charAt(i);
        switch(myChar)
        {
            case 'a':
                htmlString += `<img src=` + Aimg + ` alt="Aimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'A':
                htmlString += `<img src=` + Aimg + ` alt="Aimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'b':
                htmlString += `<img src=` + Bimg + ` alt="Bimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'B':
                htmlString += `<img src=` + Bimg + ` alt="Bimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'c':
                htmlString += `<img src=` + Cimg + ` alt="Cimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'C':
                htmlString += `<img src=` + Cimg + ` alt="Cimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'd':
                htmlString += `<img src=` + Dimg + ` alt="Dimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'D':
                htmlString += `<img src=` + Dimg + ` alt="Dimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'e':
                htmlString += `<img src=` + Eimg + ` alt="Eimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'E':
                htmlString += `<img src=` + Eimg + ` alt="Eimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'f':
                htmlString += `<img src=` + Fimg + ` alt="Fimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'F':
                htmlString += `<img src=` + Fimg + ` alt="Fimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'g':
                htmlString += `<img src=` + Gimg + ` alt="Gimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'G':
                htmlString += `<img src=` + Gimg + ` alt="Gimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'h':
                htmlString += `<img src=` + Himg + ` alt="Himage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'H':
                htmlString += `<img src=` + Himg + ` alt="Himage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'i':
                htmlString += `<img src=` + Iimg + ` alt="Iimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'I':
                htmlString += `<img src=` + Iimg + ` alt="Iimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'j':
                htmlString += `<img src=` + Jimg + ` alt="Jimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'J':
                htmlString += `<img src=` + Jimg + ` alt="Jimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'k':
                htmlString += `<img src=` + Kimg + ` alt="Kimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'K':
                htmlString += `<img src=` + Kimg + ` alt="Kimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'l':
                htmlString += `<img src=` + Limg + ` alt="Limage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'L':
                htmlString += `<img src=` + Limg + ` alt="Limage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'm':
                htmlString += `<img src=` + Mimg + ` alt="Mimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'M':
                htmlString += `<img src=` + Mimg + ` alt="Mimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'n':
                htmlString += `<img src=` + Nimg + ` alt="Nimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'N':
                htmlString += `<img src=` + Nimg + ` alt="Nimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'o':
                htmlString += `<img src=` + Oimg + ` alt="Oimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'O':
                htmlString += `<img src=` + Oimg + ` alt="Oimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'p':
                htmlString += `<img src=` + Pimg + ` alt="Pimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'P':
                htmlString += `<img src=` + Pimg + ` alt="Pimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'q':
                htmlString += `<img src=` + Qimg + ` alt="Qimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'Q':
                htmlString += `<img src=` + Qimg + ` alt="Qimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'r':
                htmlString += `<img src=` + Rimg + ` alt="Rimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'R':
                htmlString += `<img src=` + Rimg + ` alt="Rimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 's':
                htmlString += `<img src=` + Simg + ` alt="Simage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'S':
                htmlString += `<img src=` + Simg + ` alt="Simage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 't':
                htmlString += `<img src=` + Timg + ` alt="Timage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'T':
                htmlString += `<img src=` + Timg + ` alt="Timage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'u':
                htmlString += `<img src=` + Uimg + ` alt="Uimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'U':
                htmlString += `<img src=` + Uimg + ` alt="Uimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'v':
                htmlString += `<img src=` + Vimg + ` alt="Vimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'V':
                htmlString += `<img src=` + Vimg + ` alt="Vimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'w':
                htmlString += `<img src=` + Wimg + ` alt="Wimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'W':
                htmlString += `<img src=` + Wimg + ` alt="Wimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'x':
                htmlString += `<img src=` + Ximg + ` alt="Ximage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'X':
                htmlString += `<img src=` + Ximg + ` alt="Ximage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'y':
                htmlString += `<img src=` + Yimg + ` alt="Yimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'Y':
                htmlString += `<img src=` + Yimg + ` alt="Yimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'z':
                htmlString += `<img src=` + Zimg + ` alt="Zimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'Z':
                htmlString += `<img src=` + Zimg + ` alt="Zimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            default:
            break;
        }
    }
    htmlString += "</span>";
    return htmlString;
}

export default wordScorer;