import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'



export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    const location = useLocation();
    //console.log(location);

    localStorage.setItem('lasturl',location.pathname+location.search);

    //(location.search !== '')? localStorage.setItem('lasturl',location.pathname):

    return user.logged
        ? children
        : <Navigate to="/login" />
}


//children son los dashboards