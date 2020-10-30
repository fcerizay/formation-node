// 1. Recuperer premier utilisateur sur 
//https://jsonplaceholder.typicode.com/users
// 2. Recuperer toutes les taches de cet utilisateur 
//https://jsonplaceholder.typicode.com/todos?userId=[ID]

//Version 3 :

const getPosts = async () => {
    const response = await get('https://jsonplaceholder.typicode.com/users');
    const users = JSON.parse(response);
    const user = users[0];
    const userId = user.id;
    const todos = await get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    console.log(JSON.parse(todos));
};

getPosts();