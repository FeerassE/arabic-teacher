import React, {Component} from 'react';

class Title extends Component {
    constructor(props) {
        super();
        this.state = {
            hoverTitle: false
        }
        this.toggleTitleEvent = this.toggleTitleEvent.bind(this);
    }

    toggleTitleEvent(){
        this.setState({hoverTitle: !this.state.hoverTitle})
        console.log(this.state.hoverTitle)
    }

    render(){
            return(
                <div className="title fade-in one" 
                onMouseEnter={this.toggleTitleEvent}
                onMouseLeave={this.toggleTitleEvent}
                onClick= {this.toggleTitleEvent}

                >
                {this.state.hoverTitle? 
                            <div>
                                <div className="title-main-arabic fade-in one">
                                    مدرس اللغة العربية
                                </div>
                                <div className="subtitle-arabic fade-in one">
                                    تصميم و تنفيد فراس الليد
                                </div>
                            </div>
                                :
                                <div>
                                    <div className="title-main-english fade-in one">
                                        Arabic Teacher
                                    </div>
                                    <div className="subtitle-english fade-in one">
                                        By Feerass Ellid
                                    </div>
                                </div>
                }
                </div>
            )
        }
}

export default Title;