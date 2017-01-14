import React, { Component } from 'react';
import ProjectItem from './ProjectItem.jsx';

class ProjectItems extends React.Component {
	render() {
            return (
			<div>
				<div className="w3-row-padding" id="Strength">
					<div className="w3-center w3-padding-64">
                                    <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16  w3-animate-bottom">Strength: Full Stack Development </span>

                                    <p className="w3-border-dark-grey w3-padding-16  w3-animate-bottom"><h5>🔧 Programming Skills</h5> </p>
                                    <span><button className="w3-btn w3-green w3-animate-right">React.js </button></span>
                                    <span><button className="w3-btn w3-light-green w3-animate-right">React-native </button></span>
                                    <span><button className="w3-btn w3-blue w3-animate-right">HTML CSS Javascript</button></span>
                                    <span><button className="w3-btn w3-black w3-animate-right">Python</button></span>
                                    <span><button className="w3-btn w3-brown w3-animate-right">Java</button></span>

                                    <p className="w3-border-dark-grey  w3-animate-bottom"><h5> 🔧 Business Skills</h5> </p>
                                    <span><button className="w3-btn w3-orange w3-animate-right">Agile Development</button></span>
                                    <span><button className="w3-btn w3-red w3-animate-right">User-centric Design</button></span>
                                    <span><button className="w3-btn w3-yellow w3-animate-right">Value Investing</button></span>
                                    <span><button className="w3-btn w3-indigo w3-animate-right">Fluent in Mandarin and English</button></span>
            		      </div>
                    
            		      <ProjectItem imgsrc={"https://goo.gl/ekcchC"} 
                                           position={"Technical Product Manager"} 
                                           specifics={"GoDaddy | 2017.1 - 2017.5 | Sunnyvale CA" }
                                           bulletPts={["• China Strategy",
                                                       "• Code in react.js to product the frontend web product"]}
                                           skills={["React.js","User-centric Design","HTML CSS Javascript","Agile Development"]}
                                           demoLink={"http://google.com"}/>
                              <ProjectItem imgsrc={"https://goo.gl/8gXnJn"}
                                           position={"Founding Software Engineer"}
                                           specifics={"Technies Group | 2016.10 - Present | Chapel Hill N.C" }
                                           bulletPts={["•  Led a group 5 software engineers to use react.js for frontend to build web applications for local business clients (currently in Chapel Hill area) such as Supper Meal and individual requests.",
                                           "•  The group focuses creating web application with machine learning backend to provide meaningful insights for the clients. Used python for data analysis.",
                                           "• Provided SEO and data analytics service for the clients such as Keller Williams real estate and its affiliated agents to boost their digital presence. "]}
                                           skills={["React-native","HTML CSS Javascript","Python","Java"]}
                                           demoLink={"http://google.com"}/>
                        </div>
			</div>
		);
	}
}

export default ProjectItems;