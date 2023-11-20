const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return (
                action.payload
            )
            break;
        case 'USER_LOAD':
            return (
                action.payload
            )
            break;

        default:
            return state
            break;
    }

}

export default userReducer