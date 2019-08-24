import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class AboutScreen extends Component {
    render() {
        return (
            <div>
                <h4>About Page</h4>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default AboutScreen;
