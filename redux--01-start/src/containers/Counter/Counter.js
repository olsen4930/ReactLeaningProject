import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionPayload from '../../store/actions/';
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                return;
        }
    }

    render() {
        console.log(this.props);

        let StoreResult = this.props.result.map((result, index) => (
            <li onClick={() => this.props.addResultHandler(index)}>{result.value}</li>
        )
        )
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrememtCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onADDFive} />
                <CounterControl label="Subtract 5" clicked={this.props.onSUBFive} />
                <hr />
                <button onClick={()=>this.props.storeResultHandler(this.props.ctr)}>Store Result</button>
                <ul>
                    {StoreResult}
                </ul>

            </div>
        );
    }
}

//This is the state that we want to get. ! after the class scope
//Instruction of 
// It stores a function expecting state and return a function
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        result: state.res.result,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrememtCounter: () => dispatch(actionPayload.increment()),
        onDecrementCounter: () => dispatch(actionPayload.decrement()),
        onADDFive: () => dispatch(actionPayload.add()),
        onSUBFive: () => dispatch(actionPayload.sub()),
        addResultHandler: (index) => dispatch(actionPayload.addResult(index)),
        storeResultHandler: (result) => dispatch(actionPayload.storeResult(result))
    }
}

// connect is a function which return a HOC. Therefore we have to do it as connect()(Counter)
//Two picese of information we need, which state do we want and which action are we looking for.

export default connect(mapStateToProps, mapDispatchToProps)(Counter);