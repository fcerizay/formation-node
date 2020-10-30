// 1. Recuperer premier utilisateur sur 
//https://jsonplaceholder.typicode.com/users
// 2. Recuperer toutes les taches de cet utilisateur 
// https://jsonplaceholder.typicode.com/todos?userId=[ID]

//Version 2 :

const get = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200)
                    resolve(xhr.responseText);
                else
                    reject(xhr);
            }
        }
        xhr.open('GET', url);
        xhr.send();
    });
};

const getPosts = () => {
    get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = JSON.parse(response);
            const user = users[0];
            const userId = user.id;
            return get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        }).then((response) => {
            const todos = JSON.parse(response);
            console.log(todos);
        }).catch((err) => {
            console.error(err);
        });
}

getPosts();