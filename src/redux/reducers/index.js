import { combineReducers } from "redux";
import auth from './auth'
import anuncios from './anuncios'


export default combineReducers({
    auth,
    anuncios
})