// find all the users that have not been linked 
import {linked, allUsers} from './users';

const formatUsers = (users) => {
    let formattedUsers = {};
    users.forEach((user) => {
        formattedUsers[user.id] = user;
    });
    return formattedUsers;
}

const findUnlinkedUsers = (usersList, linkedUsers) => {
    const users = formatUsers(usersList);
    
    linkedUsers.forEach((linkedUser) => {
        const id = linkedUser[id];
        delete users[id];
    })
}

findUnlinkedUsers(allUsers, linked);