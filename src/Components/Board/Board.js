import { useState, useEffect } from "react";
import Row from "./Row";


function preciseComparison(lineWord, wordToFind) {

  const obj = [];
  let j = 0;
  let copy = wordToFind.slice();

  for (let i = 0; i < lineWord.length; i++) {

    const index = wordToFind.indexOf(lineWord[i])
    const index2 = copy.indexOf(lineWord[i])
    if (index !== -1 && index2 !== -1) {
      obj[j] = {};
      obj[j].letter = lineWord[i];
      obj[j].pos = index;
      obj[j].samepos = i === index;
      j++;
      copy = copy.slice(0, index2) + copy.slice(index2 + 1);
    }

  }
  return obj;
}

function Board() {
  const [nbCol, setNbCol] = useState(5);
  const [nbRow, setNbRow] = useState(5);
  const [board, setBoard] = useState(Array(nbCol).fill().map(() => Array(nbRow).fill({ letter: '' })));
  const [line, setLine] = useState([]);
  //const [letters, setLetters] = useState([[]])
  //const [col, setcol] = useState(0);
  const wordToFind = 'tylsa';
  const listWords = [
    'testa',
    'testb',
    'testc',
    'testd',
    'teste',
    'tylsa'
  ]
  let row = 0;
  let col = 0;
  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (col >= nbCol) {
        console.log('perdu');
        return;
      }
      if (!e.repeat) {
        if (e.key === 'Enter') {
          const tmp = [...board];
         

          const lineWord = tmp[col].map((eleme) => eleme.letter).join('').toLowerCase();
          if (lineWord.length < nbRow)
            console.log('not full')
          else {
            if (listWords.find(element => element === lineWord) === undefined)
              console.log('word not exist');
            else {
              if (lineWord !== wordToFind) {
                col++;
                if (col >= nbCol)
                  console.log('perdu');
                else {
                  row = 0;
                  const nline = preciseComparison(lineWord, wordToFind);
                  setLine(nline);
                  console.log('not the word')
                }
              }
              else
                console.log('find');
                //logic to block and not continue to work
            }
          }
        }
        if (e.key === 'Backspace') {
          row--;
          if (row >= 0) {
            let tmp = [...board]
            const t = { letter: '' }
            tmp[col][row] = t;
            setBoard(tmp);
            console.log(tmp);
          }
          else
            row = 0;
        }
        if (e.key.length === 1 && /^[a-zA-Z]+$/.test(e.key)) {
          if (row < nbRow) {
            let tmp = [...board]
            const t = { letter: e.key }
            tmp[col][row++] = t;
            setBoard(tmp);
          }
        }
      }
    })
    return () => {
      //  document.removeEventListener('keydown');
    };
  }, []);





  return (
    <div className="flex flex-col">
      {board.map((t, i) =>
        <Row key={i} cell={t} line={i === col ? line : []} />
      )}
    </div>
  )
}

export default Board;