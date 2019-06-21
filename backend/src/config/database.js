const mysql = require('mysql');

const connectSQL = function() {
    return mysql.createConnection({
        host: "",
        user: "",
        password: "",
        database: ""
    });
};

module.exports = connectSQL;