import React from 'react';


const Card = (props) => {
    if(props.word === undefined) {
        return (
            <div className="card">
                
            </div>)
    }
    else {
        return (
            <div className="card" onClick={props.flipCard}>
                {props.word}
            </div>
        )
    }
}

export default Card;