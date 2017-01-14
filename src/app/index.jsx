import React from 'react';
import {render} from 'react-dom';
import NavItems from './components/main-nav/NavItems.jsx';
import Quote from './components/main-content/Quote.jsx';
import AcademicItems from './components/main-content/AcademicItems.jsx';
import ProjectItems from './components/main-content/ProjectItems.jsx';
import Contact from './components/footer/Contact.jsx';
import ContactMe from './components/footer/ContactMe.jsx';
import Footer from './components/footer/Footer.jsx';
import InterestItem from './components/main-content/InterestItem.jsx';

const contentStyle = {
    maxWidth: 1100,
    marginTop: 80,
    marginBottom: 80
};

class App extends React.Component {
  render () {
    return (
    <div>
        <NavItems/>
        <div className="w3-content" style={contentStyle}>
    	   <Quote/>
    	   <AcademicItems/>
    	   <ProjectItems/>
           <InterestItem/>
    	   <ContactMe/>
    	   <Contact/>
        </div>
    	<Footer/>
    </div>
    );
  }
}

render(<App/>, document.getElementById('app'));