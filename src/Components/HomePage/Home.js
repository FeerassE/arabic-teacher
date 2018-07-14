import React, { Component } from 'react';
import FlashCard from '../FlashCards/Sorter';
import Title from './Title.js';

class Home extends Component{
    render() {
        return (
            <div className="home fade-in one">
                <Title />
                <FlashCard />
            </div>
        )
    }
}

export default Home;