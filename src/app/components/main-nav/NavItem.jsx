import React from 'react';

/*
props:
    navLink: link to one section related to one topic
    navTopic: topic name
*/
class NavItem extends React.Component {
    render () {
        return (
            <div className="w3-col s3">
                <a href={this.props.navLink} className="w3-btn-block w3-black">{this.props.navTopic}</a>
            </div>
        );
    }
}

export default NavItem;