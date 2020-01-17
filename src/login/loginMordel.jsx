


let userInfo = {
    name: '',
    password: ""
}
let loginInfo = {
    token: ''
}

let changeUserInfoType = 'changeUserInfoType';
let logOutType = 'logOutType';

export function loginReucer(state = userInfo, action) {
    console.log('sssss', action);

    switch (action.type) {
        case changeUserInfoType:
            return action.data;
        default:
            return state
    }
}


export function logOutReducer(state = loginInfo, action) {
    switch (action.type) {
        case logOutType:
            return Object.assign({}, state, action.data);
        default:
            return state
    }

}