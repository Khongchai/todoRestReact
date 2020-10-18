import React from "react";
import{ Route, Redirect} from "react-router-dom";
import { showToast } from "../accounts/notification";
import { redirect } from "react-router-dom";

export var auth = {
    "isAuthenticated": localStorage.getItem("isAuthenticated")? localStorage.getItem("isAuthenticated"): false,
    "user": localStorage.getItem("user")? localStorage.getItem("user"): null,
    "token": localStorage.getItem("token")? localStorage.getItem("token"): null,
}

export function checkAuth(data) 
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
        redirectTo();
    }
    else 
    {
        showToast();
    }
}


export function redirectTo()
{
    let authenticated = localStorage.getItem("isAuthenticated");
    if (token)
    {
        return authenticated;
    }
    else 
    {
        return false;
    }
}
