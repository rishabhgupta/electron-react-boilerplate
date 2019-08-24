import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { readManifestFile } from './HomeScreen.actions';
import EmailAddress from '../../components/emailAddress/emailAddress.component';
import {connect} from "react-redux";

class HomeScreen extends PureComponent {
    handleProcessFile = () => {
        const { getManifest, email } = this.props;
        debugger;
        getManifest(email);
    };

    render() {
        return (
            <div>
                <h4>electron react boilerplate</h4>
                <Link to='/about'>About</Link>
                <button onClick={this.handleProcessFile}>Process File</button>
                <EmailAddress/>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        email: state.email,
    };
}

const mapDispatchToProps = {
    getManifest: readManifestFile,
};

HomeScreen.propTypes = {
    getManifest: PropTypes.func,
    email: PropTypes.string,
};

HomeScreen.defaultProps = {
    getManifest: () => {},
};

const ConnectedHomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

ConnectedHomeScreen.propTypes = HomeScreen.propTypes;
ConnectedHomeScreen.displayName = 'HomeScreen';

export default ConnectedHomeScreen;

