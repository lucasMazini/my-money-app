const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Users = require('./users');
const Transactions = require('../sqlFunctions/transactions');
const env = require('../../.env');
const Connection = require('../../config/database');

const connectSql = Connection();

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-zA-Z]).{6,20})/;

// verificar o pq não funciona
const sendErrorsFromDB = (res, dbErrors) => {
    const errors = [];
    _.forIn(dbErrors.errors, error => errors.push(error.message));
    return res.status(400).json({ errors });
};
//

const login = (req, res, next) => {
    const login = req.body.login || '';
    const password = req.body.password || '';

    Users.findUser(connectSql, login, function(err, user) {
        if(err) {
            return sendErrorsFromDB(res, err);
        } else if ((user.length > 0 && user[0].login === login) && (bcrypt.compareSync(password, user[0].password))) {
            if(user[0].active != false) {
                const token = jwt.sign({ ...user }, env.authSecret, {
                    expiresIn: "1 day"
                });
                const email = user[0].email;
                const user_id = user[0].id;
                
                res.json({ user_id, login, email, token });
            } else {
                return res.status(400).send({ errors: ['Usuário está desativado!'] });
            }
        } else {
            return res.status(400).send({ errors: ['Usuário/Senha inválidos'] });
        };
    });
};

const validateToken = (req, res, next) => {
    const token = req.body.token || '';

    jwt.verify(token, env.authSecret, function(err, decoded) {
        return res.status(200).send({ valid: !err });
    });
};

const signup = (req, res, next) => {
    const data = req.body || '';
    const login = data.login || '';
    const email = data.email || '';
    const password = data.password || '';
    const confirm_password = data.confirm_password || '';

    if(!email.match(emailRegex)) {
        return res.status(400).send({ errors: ['O e-mail informado está inválido'] });
    };

    if(!password.match(passwordRegex)) {
        return res.status(400).send({
            errors: [
                'Sua senha precisa ter entre 6-20 digitos. Contendo ao menos uma letra e um número.'
            ]
        });
    };

    const salt = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, salt);
    if(!bcrypt.compareSync(confirm_password, passwordHash)) {
        return res.status(400).send({ errors: ['Senhas não conferem.'] });
    };

    data.password = passwordHash;

    Users.findUser(connectSql, login, function(err, user){
        if(err) {
            return sendErrorsFromDB(res, err);
        } else if (user.length > 0 && user[0].login === login) {
            return res.status(400).send({ errors: ['Usuário já cadastrado.'] });
        } else {
            Users.saveUser(connectSql, data, function(err, result) {
                if(err) {
                    return sendErrorsFromDB(res, err);
                } else {
                    //return res.status(200).send({ success: ['Usuário cadastrado com sucesso!'] });
                };
            });
        };
    });
};

module.exports = { login, signup, validateToken };