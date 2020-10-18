import React from "react";

function Header(props)
{
    return(
        <div class="header">
        <div class="header-right">
            <a class="active" href="#">Home</a>
            <a href="#Login">Login</a>
            <a href="#Register">Register</a>
        </div>
        </div>
    )
}

export default Header;