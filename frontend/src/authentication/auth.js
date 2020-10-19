import React from "react";
import{ Route, Redirect, useHistory } from "react-router-dom";
import { showToast } from "../accounts/notification";

export var auth = {
    "isAuthenticated": localStorage.getItem("isAuthenticated")? localStorage.getItem("isAuthenticated"): false,
    "user": localStorage.getItem("user")? localStorage.getItem("user"): null,
    "token": localStorage.getItem("token")? localStorage.getItem("token"): null,
}

export async function checkAuth(data) 
{
    if (data.token)
    {
        let newAuthState = {
            "isAuthenticated": true,
            "user": data.user,
            "token": data.token,
        }
        auth = newAuthState;
        localStorage.setItem("token", auth.token);
        localStorage.setItem("isAuthenticated", auth.isAuthenticated);
        localStorage.setItem("user", auth.user);
        return redirectTo()
    }
    else 
    {
        showToast();
    }
}


export function redirectTo()
{
    let authenticated = localStorage.getItem("isAuthenticated");
    let token = localStorage.getItem("token");
    if (token && authenticated)
    {
        //val should be true
        return authenticated;
    }
    else 
    {
        return false;
    }
}
