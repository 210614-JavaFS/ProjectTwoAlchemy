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
    let htmlString = "<span>";
    let tileWidth = 50;
    for(let i = 0; i < wordString.length; ++i)
    {
        let myChar = wordString.charAt(i);
        switch(myChar)
        {
            case 'a':
                wordScore += 1;
                htmlString += `<img src=` + Aimg + ` alt="Aimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'A':
                wordScore += 1;
                htmlString += `<img src=` + Aimg + ` alt="Aimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'b':
                wordScore += 3;
                htmlString += `<img src=` + Bimg + ` alt="Bimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'B':
                wordScore += 3;
                htmlString += `<img src=` + Bimg + ` alt="Bimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'c':
                wordScore += 3;
                htmlString += `<img src=` + Cimg + ` alt="Cimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'C':
                wordScore += 3;
                htmlString += `<img src=` + Cimg + ` alt="Cimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'd':
                wordScore += 2;
                htmlString += `<img src=` + Dimg + ` alt="Dimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'D':
                wordScore += 2;
                htmlString += `<img src=` + Dimg + ` alt="Dimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'e':
                wordScore += 1;
                htmlString += `<img src=` + Eimg + ` alt="Eimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'E':
                wordScore += 1;
                htmlString += `<img src=` + Eimg + ` alt="Eimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'f':
                wordScore += 4;
                htmlString += `<img src=` + Fimg + ` alt="Fimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'F':
                wordScore += 4;
                htmlString += `<img src=` + Fimg + ` alt="Fimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'g':
                wordScore += 2;
                htmlString += `<img src=` + Gimg + ` alt="Gimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'G':
                wordScore += 2;
                htmlString += `<img src=` + Gimg + ` alt="Gimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'h':
                wordScore += 4;
                htmlString += `<img src=` + Himg + ` alt="Himage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'H':
                wordScore += 4;
                htmlString += `<img src=` + Himg + ` alt="Himage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'i':
                wordScore += 1;
                htmlString += `<img src=` + Iimg + ` alt="Iimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'I':
                wordScore += 1;
                htmlString += `<img src=` + Iimg + ` alt="Iimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'j':
                wordScore += 8;
                htmlString += `<img src=` + Jimg + ` alt="Jimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'J':
                wordScore += 8;
                htmlString += `<img src=` + Jimg + ` alt="Jimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'k':
                wordScore += 5;
                htmlString += `<img src=` + Kimg + ` alt="Kimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'K':
                wordScore += 5;
                htmlString += `<img src=` + Kimg + ` alt="Kimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'l':
                wordScore += 1;
                htmlString += `<img src=` + Limg + ` alt="Limage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'L':
                wordScore += 1;
                htmlString += `<img src=` + Limg + ` alt="Limage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'm':
                wordScore += 3;
                htmlString += `<img src=` + Mimg + ` alt="Mimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'M':
                wordScore += 3;
                htmlString += `<img src=` + Mimg + ` alt="Mimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'n':
                wordScore += 1;
                htmlString += `<img src=` + Nimg + ` alt="Nimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'N':
                wordScore += 1;
                htmlString += `<img src=` + Nimg + ` alt="Nimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'o':
                wordScore += 1;
                htmlString += `<img src=` + Oimg + ` alt="Oimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'O':
                wordScore += 1;
                htmlString += `<img src=` + Oimg + ` alt="Oimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'p':
                wordScore += 3;
                htmlString += `<img src=` + Pimg + ` alt="Pimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'P':
                wordScore += 3;
                htmlString += `<img src=` + Pimg + ` alt="Pimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'q':
                wordScore += 10;
                htmlString += `<img src=` + Qimg + ` alt="Qimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'Q':
                wordScore += 10;
                htmlString += `<img src=` + Qimg + ` alt="Qimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'r':
                wordScore += 1;
                htmlString += `<img src=` + Rimg + ` alt="Rimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'R':
                wordScore += 1;
                htmlString += `<img src=` + Rimg + ` alt="Rimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 's':
                wordScore += 1;
                htmlString += `<img src=` + Simg + ` alt="Simage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'S':
                wordScore += 1;
                htmlString += `<img src=` + Simg + ` alt="Simage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 't':
                wordScore += 1;
                htmlString += `<img src=` + Timg + ` alt="Timage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'T':
                wordScore += 1;
                htmlString += `<img src=` + Timg + ` alt="Timage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'u':
                wordScore += 1;
                htmlString += `<img src=` + Uimg + ` alt="Uimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'U':
                wordScore += 1;
                htmlString += `<img src=` + Uimg + ` alt="Uimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'v':
                wordScore += 4;
                htmlString += `<img src=` + Vimg + ` alt="Vimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'V':
                wordScore += 4;
                htmlString += `<img src=` + Vimg + ` alt="Vimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'w':
                wordScore += 4;
                htmlString += `<img src=` + Wimg + ` alt="Wimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'W':
                wordScore += 4;
                htmlString += `<img src=` + Wimg + ` alt="Wimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'x':
                wordScore += 8;
                htmlString += `<img src=` + Ximg + ` alt="Ximage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'X':
                wordScore += 8;
                htmlString += `<img src=` + Ximg + ` alt="Ximage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'y':
                wordScore += 4;
                htmlString += `<img src=` + Yimg + ` alt="Yimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'Y':
                wordScore += 4;
                htmlString += `<img src=` + Yimg + ` alt="Yimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'z':
                wordScore += 10;
                htmlString += `<img src=` + Zimg + ` alt="Zimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            case 'Z':
                wordScore += 10;
                htmlString += `<img src=` + Zimg + ` alt="Zimage" width="` + tileWidth +`"height="` + tileWidth + `"/>`;
            break;
            default:
            break;
        }
    }
    htmlString += "</span>";
    return {
        wordScore,
        htmlString
    };
}

export default wordScorer;