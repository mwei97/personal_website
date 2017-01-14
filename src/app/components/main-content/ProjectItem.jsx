import React, { Component } from 'react';

/*
props:
    imgsrc: img src such as "https://goo.gl/ekcchC"
    position: for h3, such as "Technical Product Manager"
    specifics: such as "GoDaddy | 2017.1 - 2017.5 | Sunnyvale CA"
    bulletPts: an array of at most 3 strings each of which is a bullut point such as "• China Strategy"
    skills: an array of at most 4 strings each of which is a skill such as "React.js"
    demoLink: a string of link directing to the actual project demo
*/
 const colors = ["w3-btn w3-light-green w3-animate-right", "w3-btn w3-red w3-animate-right", "w3-btn w3-blue w3-animate-right","w3-btn w3-orange w3-animate-right"];

class ProjectItem extends React.Component {
       constructor(props) {
        super(props);
        this.state = {colorCount : 0};
        this.buttonFactory = this.buttonFactory.bind(this);
        this.bulletPtFactory = this.bulletPtFactory.bind(this);
       }

      
      
      buttonFactory() {
        var rows = [];
        for (var i=0; i < 4; i++) {
            if (this.props.skills[i]){
                rows.push(<p><button className={colors[this.state.colorCount++]}>{this.props.skills[i]} </button></p>);
            }
        }
        return <span>{rows}</span>;
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


      
      render () {
        return (
        <div className="w3-third w3-margin-bottom">
            <div className="w3-card-4">
             <img src= {this.props.imgsrc} alt={"Mike"} style={{width: "100%"}}/>
             <div className="w3-container">
                <h3> {this.props.position} </h3>
                <p className = "w3-opacity"> {this.props.specifics}</p>
                {this.bulletPtFactory()}
                {this.buttonFactory()}
                <p><a href={this.props.demoLink} className="w3-btn-block">Demo</a></p>
             </div>
            </div>
        </div>
        );
    }
}



export default ProjectItem;