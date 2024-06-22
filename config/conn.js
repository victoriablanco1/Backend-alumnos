const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alumnos',
    port: '3306',
    multipleStatements: true
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = {
    query: function(sql, values) {
        return new Promise((resolve, reject) => {
            connection.query(sql, values, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    },
    connection: connection
};
