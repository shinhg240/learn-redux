//Ducks 패턴 > actions, action types, reducer 하나에 묶음

//action type
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initState = {
    number: 0,
    diff: 1,
};

export default function counter(state=initState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff,
            }
        case INCREASE:
            return{
                ...state,
                number: state.number + state.diff
            }
        case DECREASE:
            return{
                ...state,
                number: state.number - state.diff
            }
        default:
            return state;
    }
}