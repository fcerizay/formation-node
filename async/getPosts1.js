// 1. Recuperer premier utilisateur sur 
//https://jsonplaceholder.typicode.com/users
// 2. Recuperer toutes les taches de cet utilisateur
//https://jsonplaceholder.typicode.com/todos?userId=[ID]

//Version 1 :

const get = (url, success, error) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200)
                success(xhr.responseText);
            else
                error(xhr);
        }
    }
    xhr.open('GET', url);
    xhr.send();
};

const getPosts = () => {
    return get('https://jsonplaceholder.typicode.com/users', (response) => {
        const users = JSON.parse(response);
        const user = users[0];
        const userId = user.id;
        get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`, (response) => {
            const todos = JSON.parse(response);
            console.log(todos);
        }, (err) => {
            console.error(err);
        })
    }, (err) => {
        console.error(err);
    })
};

getPosts();