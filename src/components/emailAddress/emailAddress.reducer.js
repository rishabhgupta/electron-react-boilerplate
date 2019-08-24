import { INIT_EMAIL_ADDRESS } from './emailAddress.constants';

const emailAddressReducer = (state = INIT_EMAIL_ADDRESS, action) => {
    switch (action.type) {
        case 'EMAIL_ADDRESS':
            return action.email;
        default:
            return state;
    }
};

export default emailAddressReducer;
