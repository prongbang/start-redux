import {SET, RESET} from '../../action/types/user';

let initialState={
    payload: {
        email: "email@github.com"
    }
};

export default function reducers(state=initialState, action) {
    switch(action.type) {
        case SET: 
            // console.log(action.data);
            console.log("state",JSON.stringify({state}));
            console.log("...state",JSON.stringify({...state}));
            console.log("action",JSON.stringify({action}));
            console.log("...action",JSON.stringify({...action.data}));
            // ...state = ใช้ state ล่าสุด -> ""
            // state = เก็บ state ก่อนหน้า -> {"payload":{"email":"email@github.com"}}
            // return {state, ...action.data};
            console.log({...state, payload: action.data.payload});
            console.log({...state, ...action.data});
            
            return {...state, payload: action.data.payload};
        case RESET:
            return {...initialState};
        default:
            return state;
    }
}