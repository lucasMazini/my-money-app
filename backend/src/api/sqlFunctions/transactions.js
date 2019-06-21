const beginTransaction = function(connection, callback) {
    connection.beginTransaction(callback);
};

const rollback = function(connection, callback) {
    connection.rollback(callback);
};

const commit = function(connection, callback) {
    connection.commit(callback);
};

module.exports = { beginTransaction, rollback, commit };