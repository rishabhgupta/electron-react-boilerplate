import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkEmailAddressChange } from './emailAddress.actions';

class EmailAddress extends Component {
    handleEmailAddressChange = (e) => {
        const { onChange } = this.props;
        onChange(e.target.value);
    };

    render() {
        const { email } = this.props;
        return (
            <div className="email-address-wrapper">
                <label>Email Address</label>
                <input name="email" value={email} onChange={this.handleEmailAddressChange}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        email: state.email,
    };
}

const mapDispatchToProps = {
    onChange: checkEmailAddressChange,
};

EmailAddress.propTypes = {
    email: PropTypes.string,
    onChange: PropTypes.func,
};

EmailAddress.defaultProps = {
    onChange: () => {},
    email: '',
};

const ConnectedEmailAddress = connect(mapStateToProps, mapDispatchToProps)(EmailAddress);

ConnectedEmailAddress.propTypes = EmailAddress.propTypes;
ConnectedEmailAddress.displayName = 'EmailAddress';

export default ConnectedEmailAddress;
