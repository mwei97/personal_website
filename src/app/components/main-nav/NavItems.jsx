import React from 'react';
import NavItem from './NavItem.jsx';

class NavItems extends React.Component {
    render () {
        return (
            <div className="w3-top">
                 <div className="w3-row w3-large">
                    <NavItem navLink = {"#Study"} navTopic = {"Academic Focus"}/>
                    <NavItem navLink = {"#Strength"} navTopic = {"Strength"}/>
                    <NavItem navLink = {"#Interests"} navTopic = {"Interests"}/>
                    <NavItem navLink = {"#Contact"} navTopic = {"Contact"}/>
                </div>
            </div>
        );
    }
}

export default NavItems;