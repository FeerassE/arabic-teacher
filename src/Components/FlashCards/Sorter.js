import React, {Component} from 'react';
import Card from './Card.js';

const {placeData} = require("../../word_data.js");

class Sorter extends Component{
    constructor(props){
        super();
        this.state ={
            data: placeData,
            wordObject: undefined,
            word: undefined
        }
        this.randomWord = this.randomWord.bind(this);
        this.flipCard = this.flipCard.bind(this);
    }

    getRandomNumber(num) {
        return Math.floor(Math.random() * num);
    }
    randomWord() {
        this.setState({wordObject: this.state.data[this.getRandomNumber(this.state.data.length)]}, () =>{
            this.setState({word: this.state.wordObject.english});
        });
    }

    flipCard() {
        if(this.state.word === this.state.wordObject.arabic) {
            this.setState({word: this.state.wordObject.english})
        }
        else { 
            this.setState({word: this.state.wordObject.arabic});
        }
    }

    render() {
        return (
            <div className="flash-card-module">
                <Card word={this.state.word} flipCard={this.flipCard}/>
                <div className="random" onClick={this.randomWord}>
                    <div className="random-content"> 
                        Random Word 
                    </div>
                </div>
           </div>
        )
    }
}

export default Sorter;