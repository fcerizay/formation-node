// 1. recuperer l'utilisateur dont le nom est "Clementine Bauch"
// https://jsonplaceholder.typicode.com/users
// 2. recuperer les commentaires de cet utilisateurs
// https://jsonplaceholder.typicode.com/comments

const getComments = async () => {
    const name = 'Clementine Bauch';
    const users = await get(`https://jsonplaceholder.typicode.com/users?name=${name}`);
    const parseUser = JSON.parse(users);
    const email = parseUser[0].email;
    const comments = await get(`https://jsonplaceholder.typicode.com/comments?email=${email}`);
    const parseComments = JSON.parse(comments);
    console.log(parseComments);
};

getComments();