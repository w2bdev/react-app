export const types = {
    'FETCH_NEW_TIME': 'FETCH_NEW_TIME',
    'SAY_HELLO': 'SAY_HELLO',
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
        case types.SAY_HELLO:
            alert("Hello");
            
        default:
            return state;
    }
}

export const actions = {
    updateTime: () => ({type: types.FETCH_NEW_TIME}),
    sayHello: () => ({type: types.SAY_HELLO})
}