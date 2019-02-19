import * as actionType from './actionTypes'

export const addResult = (index) => (
    {
        type: actionType.ADD_RESULT,
        position: index
    }
);

export const saveResult = (result) => {
    return {
        type: actionType.STORE_RESULT,
        result,
    }
}


export const storeResult = (result) => {

    //we get dispatch here is becuase of the thunk middleware
    //we still dispatch an action but then redux-thunk steps in has the action and
    //blocks the old action and dispatch it again in the future <==== This is basically the key of Asynchronous code middle ware logic
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000)
    }
};