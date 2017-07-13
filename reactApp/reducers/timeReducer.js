import types from '../actions/types';

const timeReducer = (state = 17, action) => {
    switch(action.type) {
        case types.addSlot:
            return state + 1;
        case types.removeSlot:
            return state - 1;
        default: return state;
    }
};

export default timeReducer;
