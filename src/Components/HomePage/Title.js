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
        console.log(this.state.hoverTitle)
    }

    render(){
            return(
                <div className="title" 
                onMouseLeave={this.hoverTitleEvent}
                onMouseEnter={this.hoverTitleEvent}
                >
                {this.state.hoverTitle? 
                                <div className="title-main">
                                    مدرس اللغة العربية
                                </div>
                                :
                                <div>
                                    <div className="title-main">
                                        Arabic Teacher
                                    </div>
                                    <div className="subtitle">
                                        By Feerass Ellid
                                    </div>
                                </div>
                }
                </div>
            )
        }
}

export default Title;