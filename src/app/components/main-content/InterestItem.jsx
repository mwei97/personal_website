import React from 'react';
import { Carousel } from 'react-bootstrap';

const imgStyle = {
    width: '100%',
};



class InterestItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index : 0, direction: null};
         this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        return(
            <div className="w3-row w3-container" id = "Interests">
                <div className="w3-center w3-padding-64"  >
                  <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16 w3-animate-bottom">Interests</span>
                </div>

                <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>               
                    <Carousel.Item>
                        <img style={imgStyle} src="https://static.pexels.com/photos/7101/wood-coffee-iphone-notebook.jpg" />
                        <Carousel.Caption>
                            <h3>Helen Qin</h3>
                            <p>Work hard, Think Differently, Program</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                
                    <Carousel.Item>
                        <img style={imgStyle} src="https://static.pexels.com/photos/132982/pexels-photo-132982.jpeg" />
                        <Carousel.Caption>
                            <h3>Helen Qin</h3>
                            <p>Work hard, Think Differently, Program</p>
                        </Carousel.Caption>
                    </Carousel.Item>           
                </Carousel>
            </div>
        );
    }
}

export default InterestItem;