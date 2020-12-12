import React, {useState} from 'react';
import Layout from './Layout';


export function checkWinner(boxes) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for(let i = 0; i<lines.length; i++) {
        const[x,y,z] = lines[i];
        if(boxes[x] && boxes[x] === boxes[y] && boxes[x] === boxes[z]) {
            return boxes[x];
        }
    }
    return null
}
const boxes = [null,null,null, "X","X","0",null,null,null];
console.log(checkWinner(boxes));

const styles = {
    width:'200px',
    margin:'20px auto',
};

const pStyle = {
    color:'green'
}

function Game() {
    const[layout, setLayout] = useState(Array(9).fill(null));
    const[xIsNext, setXisNext] = useState(true);
    const winner = checkWinner(layout)

    const handleClick = (i) => {
        const layoutState = [...layout];
        if(winner || layoutState[i]) return;
        layoutState[i] = xIsNext ? 'X' : '0';
        setLayout(layoutState);
        setXisNext(!xIsNext);
    }


    return(
        <React.Fragment>
            <Layout boxes={layout} onClick={handleClick} />
            <div style={styles}>
                <p style={pStyle}>
                    {winner ? 'Winner : ' + winner : 'Next Player ' + (xIsNext ? 'X' : '0')}
                </p>

            </div>
        </React.Fragment>
    )
}
export default Game