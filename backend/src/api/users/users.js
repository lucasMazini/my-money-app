const tables = {
    users: 'users'
};

const selects = {
    user: `select * from ${tables.users}`
};

const inserts = {
    insertUser: `insert into ${tables.users} (login, password, email, user_type, active) values`
};

const findUser = function(connection, login, callback) {
    const query = `${selects.user} where login = '${login}'`;
    connection.query(query, callback); 
};

const saveUser = function(connection, data, callback) {
    const query = `${inserts.insertUser} ('${data.login}', '${data.password}', '${data.email}', '${data.profile}', true)`;
    connection.query(query, data, callback);
}

module.exports = { findUser, saveUser };