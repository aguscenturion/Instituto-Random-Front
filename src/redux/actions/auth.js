import axios from "axios";

import { 
    USER_LOADED, 
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT, 
    LIMPIAR_USER,
    LIMPIAR_ANUNCIOS
} from "./types";

import setAuthToken from '../../utils/setAuthToken';

//LOGIN USUARIO
export const login = (dni, contrasenia) => async dispatch => {
    
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({dni, contrasenia})

   

    try {
        const res = await axios.post('http://localhost:5000/api/login', body, config)

        //console.log(res)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
       
        dispatch(loadUser())
    } catch (err) {

        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(console.log(error)))
        }
        
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const loadUser = () => async dispatch => {

    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        
        const res = await axios.get('http://localhost:5000/api/login-user')

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const logout = () => dispatch => {
    dispatch({type : LOGOUT }) 
    dispatch({type: LIMPIAR_USER})
    dispatch({type: LIMPIAR_ANUNCIOS})
 } 