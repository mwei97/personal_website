import React, { Component } from 'react';
import AcademicItem from './AcademicItem.jsx'


class AcademicItems extends React.Component {
  render() {
		return (
        <div className="w3-row w3-container" id = "Study">
              <div className="w3-center w3-padding-64"  >
                  <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16 w3-animate-bottom">Academic Focus</span>
              </div>

              <AcademicItem title='DataStructure & Machine Learning' 
                  bulletPts={["• Morehead-Cain scholar at UNC Chapel Hill: full-ride scholarship",
                              "• CSURF Research Scholar: $5000 research grant towards software work",
                              "• Publication Data Structure and Algorithm"]}
                  color={1}/>
                
              <AcademicItem title='Startup' 
                  bulletPts={["• Publication: \"Four Steps Startup\" ",
                              "• Burch Fellow @Silicon Valley:a 5 month entrepreneurship immersion program, including listening to distinguished startup/VC speakers, startup bootcamp and company visits to Google, Facebook, Airbnb and Y Commbinator etc. "]}
                  color={0}/>
        </div>
		);
	}
}

export default AcademicItems;