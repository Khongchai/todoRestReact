import React from "react";
export default function Toast()
{
    return (
        <div id="toast">
            Wrong credentials
        </div>
    )
}

export function showToast()
{
    var toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}