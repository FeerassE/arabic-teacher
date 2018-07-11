import React, {Component} from 'react';

class Title extends Component {
    constructor(props) {
        super();
        this.state = {
            hoverTitle: false
        }
        this.hoverTitleEvent = this.hoverTitleEvent.bind(this);
    }

    hoverTitleEvent(){
        this.setState({hoverTitle: !this.state.hoverTitle})
    }

    render(){
        if(this.state.hoverTitle === true) {
            return(
                <div className="title" 
                onMouseLeave={this.hoverTitleEvent}>
                    <div className="title-main">
                        مدرس اللغة العربية
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="title" onMouseEnter={this.hoverTitleEvent}>
                    <div className="title-main">
                        Arabic Teacher
                    </div>
                    <div className="subtitle">
                    By Feerass Ellid
                    </div>
                </div>
            )
        }
    }
}

export default Title;