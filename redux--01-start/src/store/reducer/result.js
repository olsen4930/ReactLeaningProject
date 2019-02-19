import * as actionTypes from '../actions/actionTypes'
import { updateObject } from "./utility";
const initialState = {
    result: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_RESULT:
            const tempResult = [...state.result];
            // const newCounter = state.counter + Number(tempResult.splice(action.position, 1));

            //standard immutable way:
            //This kind of copy will still effect the og result if you change the content. the contents
            //are still pointing to the same object. But delete is okay
            // const newArray = [...state.result];
            // newArray.splice(action.position,1)

            const updatedArray = tempResult.filter((element, index) => {
                return index !== action.position;
            })

            return updateObject(state, { result: updatedArray });

        case actionTypes.STORE_RESULT:
            // let tempState = { ...state }
            // tempState.result.push(tempState.counter);

            return updateObject(state,{result: state.result.concat({ value: action.result })})

        default:
            return state
    }
}

export default reducer;