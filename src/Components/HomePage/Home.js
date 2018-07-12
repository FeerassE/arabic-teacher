import React, { Component } from 'react';
import FlashCard from '../FlashCards/Sorter';
import Title from './Title.js';

class Home extends Component{
    render() {
        return (
            <div className="background">
                <Title />
                <FlashCard />
            </div>
        )
    }
}

export default Home;