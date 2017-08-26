export const types = {
    'UPDATE_NAV_TOGGLE': 'UPDATE_NAV_TOGGLE',
    'UPDATE_NAV_MINIFIED': 'UPDATE_NAV_MINIFIED',
    'UPDATE_SIDEBAR_INVERSED': 'UPDATE_SIDEBAR_INVERSED',
    'UPDATE_HEADER_INVERSED': 'UPDATE_HEADER_INVERSED',
    'UPDATE_HEADER_FIXED': 'UPDATE_HEADER_FIXED',
};

const initialState = {
    isNavToggleOn: false,
    isNavMinified: false,
    isSidebarInversed : true,
    isHeaderInversed : true,
    isHeaderFixed : true
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_NAV_TOGGLE:
            return {
                ...state,
                isNavToggleOn: !state.isNavToggleOn
            }
        case types.UPDATE_NAV_MINIFIED:
            return {
                ...state,
                isNavMinified: !state.isNavMinified
            }
        case types.UPDATE_SIDEBAR_INVERSED:
            return {
                ...state,
                isNavToggleOn: !state.isNavToggleOn
            }
        case types.UPDATE_HEADER_FIXED:
            return {
                ...state,
                isHeaderFixed: !state.isHeaderFixed
            }
        case types.UPDATE_HEADER_INVERSED:
            return {
                ...state,
                isHeaderInversed: !state.isHeaderInversed
            }
        default:
            return state;
    }
}

export const actions = {
    toggleNav: () => ({type: types.UPDATE_NAV_TOGGLE}),
    fixHeader: () => ({type: types.UPDATE_HEADER_FIXED})
}