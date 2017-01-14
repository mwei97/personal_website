import React, { Component } from 'react';

const backgroundColors = ["w3-row l3 m6 w3-dark-grey w3-container w3-padding-12", "w3-row l3 m6 w3-black w3-container w3-padding-12"]
class AcademicItem extends React.Component {
    constructor(props) {
    	super(props);
        this.bulletPtFactory = this.bulletPtFactory.bind(this);
	}


    bulletPtFactory() {
        var rows = [];
        for (var i=0; i < 3; i++) {
            if (this.props.bulletPts[i]){
                rows.push(<p> {this.props.bulletPts[i]} </p>);
            }
        }
        return <span>{rows}</span>;
    }

    render() {
		return (
            <div className={backgroundColors[this.props.color]}>
			<h3>{this.props.title}</h3>
			{this.bulletPtFactory()}
            </div>
		);
	}
}

export default AcademicItem;