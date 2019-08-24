export const dispatchChangeCampaignName = email => ({
    type: 'EMAIL_ADDRESS',
    email,
});

export const checkEmailAddressChange = (email) => (dispatch) => {
    dispatch(dispatchChangeCampaignName(email));
};
