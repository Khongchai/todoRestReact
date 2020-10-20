import {checkAuth, auth} from "../authentication/auth";

export const getData = () => fetch("http://127.0.0.1:8000/api/tasks/", {
    method: "GET",
    headers: {
        "Authorization": `Token ${auth.token}`,
    }
}).then(response => catchErrors(response))

export const saveData = (data, editing) => fetch(createOrEdit(editing, data.id),
{
    method: editing===true? "PUT":"POST", 
    headers: {
        "Content-type": "application/json",
        'X-CSRFToken': csrftoken,
        "Authorization": `Token ${auth.token}`,
    },
    body: JSON.stringify(data)
}).then(response => catchErrors(response))

export const fetchAuth = (username, password) =>
{
    return fetch("http://127.0.0.1:8000/api/auth/login",{
        method: "POST",
        headers:{
            "Content-type": "application/json",
            "X-CSRFToken": csrftoken
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => checkAuth(data))
}



function createOrEdit(editing, id)
{
    //if create, API returns one elem
    //else API returns the entire list
    let url = "http://127.0.0.1:8000/api/tasks/"
    if (editing)
    {
        url = `http://127.0.0.1:8000/api/tasks/${id}/`
    }
    return url
}

export const deleteTask= (id) => fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, 
{
    method: "DELETE", 
    headers: {
        "Content-type": "application/json",
        'X-CSRFToken': csrftoken,
        "Authorization": `Token ${auth.token}`,
    },
    body: id
}).then(response => catchErrors(response))


export const catchErrors = (response) => {
    if (!response.ok)
    {
        throw Error(response.statusText);
    }
    return response.json()
}











function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');