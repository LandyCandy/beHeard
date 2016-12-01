import { RECEIVE_REPS } from 'actions/constants';

const initState = {
    contactInfo: []
}
const reps = (state = initState, { type, payload}) => {
    switch(type) {
        case RECEIVE_REPS:
            return {...state, contactInfo: payload.reps}
        default:
            return state;
    }
}

export default reps;
