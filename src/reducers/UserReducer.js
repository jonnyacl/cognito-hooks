export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                newUser: action.newUser
            };
        case 'SIGNUP_CONFIRM_SUCCESS':
            return {
                ...state,
                fetchNewUser: true,
            }
        case 'LOGIN_SUCCESS':
        case 'CHECK_LOGIN_SUCCESS':
            return {
                ...state,
                user: action.user,
                newUser: null,
                fetchNewUser: false
            };
        case 'CHECK_LOGIN_FAIL':
            return {
                ...state,
                user: null,
                fetchNewUser: false
            }
        case 'LOGIN_FAIL':
            return state;
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                user: null,
                fetchNewUser: false
            };
        default:
            return state;
    }
};
