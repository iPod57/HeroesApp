import { types } from "../types/types";

// const state = {
//     name:'Felix',
//     logged:true esto ya esta en el return de abajo
// }

// const loginAction = {
//     type: types.login,
//     payload:{
//         name: 'Felix',
//         email:'felix_72@live.com'
//     }
// }

export const authReducer = (state={}, action)=> {

    switch(action.type){
        case types.login:
            return {
                ...action.payload,
                logged:true
            }

        case types.logout:
            return {
                logged:false
            }

        default:
            return state;
    }

}