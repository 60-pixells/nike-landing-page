import React, { useRef, useState } from "react";
import "./tictactoe.css"

export default function TicTacToe ({sizeOfBoard}) {
    let player = 0;
    const [winner, setWinner] = useState(null);
    const diagonalElementsRef = useRef((() => getDiagonalElements(sizeOfBoard))());
    const boardValueRef = useRef((() => {
        return [...Array(sizeOfBoard * sizeOfBoard + 1).keys()]
    })());

    function getDiagonalElements(sizeOfBoard) {
        const arr = [];
        for( let i = 1; i <= sizeOfBoard * sizeOfBoard; i = i + sizeOfBoard + 1) {
            arr.push(i);
        }

        for( let i = sizeOfBoard; i < sizeOfBoard * sizeOfBoard; i = i + sizeOfBoard - 1) {
            arr.push(i);
        }
        
        return arr;
    }

    function rowCheck(sizeOfBoard, cellTriggered) {
        let areRowValuesSame = true;
        if(cellTriggered % sizeOfBoard === 0) {
            const startingCell = cellTriggered - sizeOfBoard + 1;
            const endingCell = startingCell + sizeOfBoard;
            const board = boardValueRef.current;
            const cellValue = board[startingCell];
            for( let i = startingCell; i < endingCell; i++) {
                 if(board[i] !== cellValue) {
                    areRowValuesSame = false;
                    break;
                 }
            }
        } else {
            const startingCell = (Math.floor(cellTriggered / sizeOfBoard) * sizeOfBoard) + 1;
            const endingCell = startingCell + sizeOfBoard;
            const board = boardValueRef.current;
            const cellValue = board[startingCell];
            for( let i = startingCell; i < endingCell; i++) {
                 if(board[i] !== cellValue) {
                    areRowValuesSame = false;
                    break;
                 }
            }
        }
        return areRowValuesSame;
    }

    function  colCheck(sizeOfBoard, cellTriggered) {
        let areColValueSame = true;
        let colStartValue = cellTriggered % sizeOfBoard;
        const board = boardValueRef.current;
        const cellValue = board[colStartValue];
        for( let i = colStartValue; i <= sizeOfBoard * sizeOfBoard; i = i + sizeOfBoard) {
            if(cellValue !== board[i]) {
                areColValueSame = false;
                break;
            }
        }
        return areColValueSame;
    }

    function diagonalCheck() {
        const diagonalElements = diagonalElementsRef.current;
        const board = boardValueRef.current;
        let cellValue = board[1];
        let diagonalLeftToRightCheck = true;
        for( let i = 0; i < sizeOfBoard; i++) {
            const cellToCheck = diagonalElements[i];
            if(cellValue !== board[cellToCheck]) {
                diagonalLeftToRightCheck = false;
                break;
            }
        }

        cellValue = board[sizeOfBoard];
        let rightToLeftDiagonalCheck = true;
        for(let i = sizeOfBoard; i < sizeOfBoard * 2; i++) {
            const cellToCheck = diagonalElements[i];
            if(cellValue !== board[cellToCheck]) {
                rightToLeftDiagonalCheck = false;
                break;
            }
        }

        return diagonalLeftToRightCheck || rightToLeftDiagonalCheck;
    }
    function checkAndDisplayWinner(sizeOfBoard, cellTriggered) {
        let isGameCompleted  = false;
        let row = rowCheck(sizeOfBoard, cellTriggered);
        let col = colCheck(sizeOfBoard, cellTriggered);
        let diagonal = diagonalCheck();

        console.log("The validaiton for board is", {
            row,
            col, 
            diagonal
        })
        if(row || col || diagonal) {
            isGameCompleted = true;
        }

        return isGameCompleted;

    }
    function handleClick(e) {
        e.preventDefault();
        
        if(e.target.textContent === "" && !winner) {
            const cellTriggered = e.target.attributes.value.value;

            if(player === 0 ) {
                e.target.textContent = "O";
                player  = 1;
                boardValueRef.current[parseInt(cellTriggered, 10)] = "O";
            } else {
                e.target.textContent = "X";
                player  = 0;
                boardValueRef.current[parseInt(cellTriggered, 10)] = "X";
            }
            const isGameCompleted = checkAndDisplayWinner(sizeOfBoard, parseInt(cellTriggered, 10));
            if(isGameCompleted) {
                const winnerObj = {
                    0 : "O",
                    1: "X"
                };

                const winnerDetail = winnerObj[1 - player];
                setWinner(winnerDetail);
            }
        }
    }
    const Grid = ({sizeOfBoard}) => {
        return (
            <div className="grid-container">
               {
                 [...Array(sizeOfBoard * sizeOfBoard).keys()].map((key) => {
                    return (
                        <h1 
                        className="grid-item" 
                        onClick={handleClick}
                        value={key + 1}
                        />
                    )
                 })
               }
               {
                winner ? (<h1>{`Game Completed, The Winner is ${winner}`}</h1>) : null
               }
            </div>
        )
    }

    return(
        <Grid 
        sizeOfBoard = {sizeOfBoard}
        />
    )
}