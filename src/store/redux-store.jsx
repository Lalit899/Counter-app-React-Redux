import { createStore } from 'redux';

const Initial_Value = {counter: 0, privacy: true};

const counterReducer = (Stores = Initial_Value, action) => {
    let newStore = Stores;
    if(action.type === "INCREMENT"){
        newStore = {counter: Stores.counter + 1, privacy: Stores.privacy}
    }
    else if(action.type === "DECREMENT"){
        newStore = {counter: Stores.counter - 1, privacy: Stores.privacy}
    }
    else if(action.type === "ADDITION"){
        newStore = {counter: Stores.counter + Number(action.payload.number), privacy: Stores.privacy}
    }
    else if(action.type === "SUBTRACTION"){
        newStore = {counter: Stores.counter - Number(action.payload.number), privacy: Stores.privacy}
    }
    else if(action.type === "TOGGLE"){
        newStore = {counter : Stores.counter, privacy: !Stores.privacy}
    }
    return newStore;
}

const counterStore = createStore(counterReducer);

export default counterStore;