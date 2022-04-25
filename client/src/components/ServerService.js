const baseUrl = 'http://localhost:4000/api/users/';

export const getUsers = ()=>
{
    return fetch(baseUrl)
    .then(re=> re.json());
}
// fetches user info from database

export const updateServer = (data, id)=>
{
    return fetch(baseUrl + id,
        {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
}

// updates the user object on database