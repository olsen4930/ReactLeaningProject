const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0,

}


//Reducer
//Two argument: 1. previous state 2. action
//Return updated state
//!!Always remember the key point here in reducer is you have to change things immutabaly!
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};


//Store
//We learn 2 things just base on these code
//1. Function can be store as a variable without triggering it by not (). Then when want to trigger just () the variable
//2. A store needs to be inint with a Reducer inorder for it to be useful. We only have one Reducer at the end
//3. The reducer is the only thing that can update the state at the end.
const store = createStore(rootReducer);

console.log(store.getState());


//Subscription
//It takes a argument function when ever the state is updated
//e.g when ever the dispatch function is call and change the state, the subscribe function will be call too.
store.subscribe(() => {
    console.log('[Subscription]',store.getState());
    
})


//Dispatching Action
//The type is nesscery inside the dispatch. It is a unique identitfier with your chose
//The convension is to have it all cap letter like the follow 
store.dispatch({ type: 'INC_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', value: 10 })
console.log(store.getState());




