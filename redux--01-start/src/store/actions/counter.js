import * as actionTypes from './actionTypes'

export const increment = () => (
    {
        type: actionTypes.INCREMENT
    }
);
export const decrement = () => (
    {
        type: actionTypes.DECREMENT
    }
);
export const add = () => (
    {
        type: actionTypes.ADD,
        value: 20,
    }
);
export const sub = () => (
    {
        type: actionTypes.SUB,
        value: 20,
    }
);