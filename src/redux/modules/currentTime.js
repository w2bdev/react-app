export const types = {
    'FETCH_NEW_TIME': 'FETCH_NEW_TIME'
};

const initialState = {
    currentTime: new Date(),
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_NEW_TIME:
            return {
                ...state,
                currentTime: new Date()
            };
        default:
            return state;
    }
}

export const actions = {
    updateTime: () => ({type: types.FETCH_NEW_TIME}),
}